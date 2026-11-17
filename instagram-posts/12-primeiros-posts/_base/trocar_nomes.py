"""Troca nomes de pessoas e clientes nos prints usando o Nano Banana (Gemini) por recortes.

Para cada trecho: recorta com margem, amplia, completa com fundo até uma proporção aceita
pelo Gemini, pede a troca de texto, reduz o resultado e cola de volta só a área do texto.
O resto do print fica idêntico ao original.

Uso: <python com Pillow> trocar_nomes.py jobs.json
"""
import json, os, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

GEN = os.path.expanduser("~/.claude/skills/nano-banana/scripts/generate.py")
ASPECTS = {"1:1": 1, "2:3": 2/3, "3:2": 3/2, "3:4": 3/4, "4:3": 4/3, "4:5": 4/5, "5:4": 5/4,
           "9:16": 9/16, "16:9": 16/9, "21:9": 21/9}
MARGIN = 40
TARGET = 1024

PROMPT = ("This is a small cropped piece of a software screenshot or a printed document. "
          "Edit only the text: {pairs}. Render the new text in exactly the same typeface, size, weight, "
          "letter case, color and baseline position as the text it replaces, aligned the same way. "
          "Keep every other pixel unchanged: background, borders, icons, lines, signatures and all other text. "
          "Do not add anything.")


def bg_color(img):
    px = img.convert("RGB").getpixel((2, 2))
    return px


def run_job(job, base_img, tmp):
    x, y, w, h = job["box"]
    W, H = base_img.size
    cx0, cy0 = max(0, x - MARGIN), max(0, y - MARGIN)
    cx1, cy1 = min(W, x + w + MARGIN), min(H, y + h + MARGIN)
    crop = base_img.crop((cx0, cy0, cx1, cy1)).convert("RGB")
    cw, ch = crop.size
    s = TARGET / max(cw, ch)
    big = crop.resize((round(cw * s), round(ch * s)), Image.LANCZOS)
    bw, bh = big.size
    r = bw / bh
    name, ar = min(ASPECTS.items(), key=lambda kv: abs(kv[1] - r))
    if ar >= r:
        pw, ph = round(bh * ar), bh
    else:
        pw, ph = bw, round(bw / ar)
    canvas = Image.new("RGB", (pw, ph), bg_color(crop))
    ox, oy = (pw - bw) // 2, (ph - bh) // 2
    canvas.paste(big, (ox, oy))
    src = os.path.join(tmp, f"{job['id']}-in.png")
    out = os.path.join(tmp, f"{job['id']}-out.png")
    canvas.save(src)
    pairs = "; ".join(f'replace "{a}" with "{b}"' for a, b in job["replace"])
    cmd = ["python3", GEN, PROMPT.format(pairs=pairs), "-i", src, "-o", out,
           "--pro", "--aspect", name]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if not os.path.exists(out):
        return job["id"], None, res.stdout[-400:] + res.stderr[-400:]
    edited = Image.open(out).convert("RGB").resize((pw, ph), Image.LANCZOS)
    edited = edited.crop((ox, oy, ox + bw, oy + bh)).resize((cw, ch), Image.LANCZOS)
    # só a área do texto volta para o print
    ix, iy = x - cx0, y - cy0
    patch = edited.crop((ix, iy, ix + w, iy + h))
    edited.save(os.path.join(tmp, f"{job['id']}-crop.png"))
    return job["id"], patch, ""


def main():
    spec = json.load(open(sys.argv[1]))
    tmp = spec.get("tmp") or tempfile.mkdtemp()
    os.makedirs(tmp, exist_ok=True)
    for f in spec["files"]:
        base = Image.open(f["src"]).convert("RGB")
        with ThreadPoolExecutor(4) as ex:
            results = list(ex.map(lambda j: run_job(j, base, tmp), f["jobs"]))
        for (jid, patch, err), job in zip(results, f["jobs"]):
            if patch is None:
                print("FALHOU", f["src"], jid, err)
                continue
            base.paste(patch, tuple(job["box"][:2]))
            print("ok", os.path.basename(f["dst"]), jid)
        base.save(f["dst"])
        print("SALVO", f["dst"])


if __name__ == "__main__":
    main()
