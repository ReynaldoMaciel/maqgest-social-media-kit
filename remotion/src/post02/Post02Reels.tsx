// Post 2 · Reels "Planilha e Word x MaqGest"
// Cada cena: "Do jeito antigo" em tela cheia → slide → "Com o MaqGest" em tela cheia.
// A faixa de texto do topo fica fixa; só o painel desliza.
// Roteiro: instagram-posts/12-primeiros-posts/02-planilha-x-maqgest/plano.md
import { AbsoluteFill, Img, interpolate, OffthreadVideo, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { springTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { color, font, fontFaceCss, logo, screenshot } from "../brand";
import { BAND_TOP, FullPanel, PANEL_TOP, SafeBox, Side } from "./FullPanel";

const FPS = 30;
const s = (seconds: number) => Math.round(seconds * FPS);
const TRANSITION = s(0.8);

const VENDEDOR = staticFile("videos/vendedor-gerando-orcamento-a-moda-antiga.mp4");
const CLIENTE = staticFile("videos/cliente-recebendo-orcamento.mp4");

// vídeo inteiro, sem zoom, centralizado na área segura
const fit: React.CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" };
const fill: React.CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" };

/** Trecho do vídeo do vendedor. `from` = segundo inicial no arquivo; `rate` < 1 deixa mais lento. */
/** Volume com fade de entrada e saída, para não estalar nos cortes. `dur` em segundos. */
const fadeVolume = (dur: number) => (f: number) =>
  interpolate(f, [0, 8, s(dur) - 8, s(dur)], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

const Vendedor: React.FC<{ from: number; dur: number; rate?: number }> = ({ from, dur, rate = 1 }) => (
  <OffthreadVideo src={VENDEDOR} trimBefore={s(from)} playbackRate={rate} volume={fadeVolume(dur)} style={fit} />
);

/** Print do MaqGest (provisório até a gravação de tela). `full`: mostra a largura inteira do print. */
const Tela: React.FC<{ name: string; full?: boolean; pos?: string; zoom?: number }> = ({ name, full, pos = "left top", zoom }) =>
  zoom ? (
    <Img src={screenshot(name)} style={{ position: "absolute", top: 0, left: 0, width: `${zoom * 100}%`, height: "auto" }} />
  ) : full ? (
    <Img src={screenshot(name)} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto" }} />
  ) : (
    <Img src={screenshot(name)} style={{ ...fill, objectPosition: pos }} />
  );

type Segment = { id: string; band: string; side: Side; seconds: number; badge?: string; badgeAt?: number; bleed?: boolean; content: React.ReactNode };

const segments: Segment[] = [
  { id: "abertura", band: "Fazer uma proposta de trator em 2026:", side: "antigo", seconds: 4, bleed: true, content: <Vendedor from={0} dur={4} /> },

  { id: "cliente-antigo", band: "Achar o cliente", side: "antigo", seconds: 5, bleed: true, badge: "Digitando o CPF de novo", content: <Vendedor from={3} dur={5} /> },
  { id: "cliente-novo", band: "Achar o cliente", side: "novo", seconds: 4.5, content: <Tela name="mobile-nova-cotacao-generico.png" full /> },

  { id: "maquina-antigo", band: "Incluir a máquina", side: "antigo", seconds: 5, bleed: true, badge: "Procurando NCM no Google", content: <Vendedor from={10} dur={5} /> },
  { id: "maquina-novo", band: "Incluir a máquina", side: "novo", seconds: 4.5, content: <Tela name="passo-2-produtos-generico.png" zoom={1.45} /> },

  // 17–20,15 s do arquivo em câmera lenta (4,5 s × 0,7); em 20,3 s o vídeo corta para a cozinha
  { id: "envio-antigo", band: "Enviar a proposta", side: "antigo", seconds: 4.5, bleed: true, badge: "Ainda formatando", content: <Vendedor from={17} dur={4.5} rate={0.7} /> },
  {
    id: "envio-novo",
    band: "Enviar a proposta",
    side: "novo",
    seconds: 5.5,
    badge: "Proposta recebida",
    badgeAt: 2.2,
    bleed: true,
    content: (
      <>
        <Sequence durationInFrames={s(1.8)} layout="none">
          <SafeBox>
            <Tela name="cotacao-pagina-1-anonimizada.png" full />
          </SafeBox>
        </Sequence>
        <Sequence from={s(1.8)} layout="none">
          <OffthreadVideo src={CLIENTE} trimBefore={s(5)} volume={fadeVolume(5.5 - 1.8)} style={fit} />
        </Sequence>
      </>
    ),
  },
];
const FINAL_SECONDS = 4;

// início de cada segmento no vídeo final (as transições sobrepõem os segmentos)
const starts = segments.reduce<number[]>((acc, seg, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + s(segments[i - 1].seconds) - TRANSITION);
  return acc;
}, []);
const FINAL_START = starts[starts.length - 1] + s(segments[segments.length - 1].seconds) - TRANSITION;

export const POST02_DURATION = FINAL_START + s(FINAL_SECONDS);

const transition = (key: string) => (
  <TransitionSeries.Transition
    key={key}
    presentation={slide({ direction: "from-right" })}
    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION })}
  />
);

export const Post02Reels: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: color.green950, fontFamily: font.sans }}>
      <style>{fontFaceCss}</style>
      <TransitionSeries>
        {segments.flatMap((seg) => [
          <TransitionSeries.Sequence key={seg.id} durationInFrames={s(seg.seconds)}>
            <FullPanel side={seg.side} badge={seg.badge} badgeFrom={s(seg.badgeAt ?? 0)} bleed={seg.bleed}>
              {seg.content}
            </FullPanel>
          </TransitionSeries.Sequence>,
          transition(`${seg.id}-t`),
        ])}
        <TransitionSeries.Sequence durationInFrames={s(FINAL_SECONDS)}>
          <FinalCard />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Band />
    </AbsoluteFill>
  );
};

/** Faixa de texto fixa no topo. O texto troca quando muda a cena, não entre antigo e novo. */
const Band: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame >= FINAL_START + TRANSITION / 2) return null;
  // segmento visível (troca no meio da transição)
  let i = 0;
  for (let k = 0; k < starts.length; k++) if (frame >= starts[k] + (k ? TRANSITION / 2 : 0)) i = k;
  // primeiro segmento da mesma cena: é dele que conta a entrada do texto
  let first = i;
  while (first > 0 && segments[first - 1].band === segments[i].band) first--;
  const since = frame - (starts[first] + (first ? TRANSITION / 2 : 0));
  const textIn = interpolate(since, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const out = interpolate(frame, [FINAL_START, FINAL_START + TRANSITION / 2], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: PANEL_TOP,
        paddingTop: BAND_TOP,
        backgroundColor: color.green950,
        display: "flex",
        alignItems: "flex-end",
        padding: `${BAND_TOP}px 88px 56px`,
        opacity: out,
      }}
    >
      <div
        style={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: 76,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: color.white,
          opacity: textIn,
          transform: `translateY(${(1 - textIn) * 20}px)`,
        }}
      >
        {segments[i].band}
      </div>
    </div>
  );
};

/** Cartão final: o texto entra com zoom in (em duas partes) e o logo com fade in. */
const FinalCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // a cena começa durante a transição: espera ela terminar
  const start = Math.round(TRANSITION * 0.6); // começa no fim do slide
  const zoom = (delay: number) => spring({ frame: frame - start - delay, fps, config: { damping: 18, stiffness: 120 } });
  const z1 = zoom(0);
  const z2 = zoom(10);
  const logoIn = interpolate(frame, [start + 24, start + 42], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const zoomStyle = (p: number): React.CSSProperties => ({
    display: "inline-block",
    opacity: interpolate(p, [0, 0.4], [0, 1], { extrapolateRight: "clamp" }),
    transform: `scale(${interpolate(p, [0, 1], [0.6, 1])})`,
    transformOrigin: "left center",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: color.green950,
        justifyContent: "center",
        padding: "0 88px",
        gap: 48,
      }}
    >
      <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 104, lineHeight: 1.04, letterSpacing: "-0.025em", color: color.white }}>
        <span style={zoomStyle(z1)}>Orçamento em minutos.</span>{" "}
        <span style={{ ...zoomStyle(z2), color: color.youngGreen }}>Agende sua demo.</span>
      </div>
      <Img src={logo.branca} style={{ height: 64, alignSelf: "flex-start", opacity: logoIn }} />
    </AbsoluteFill>
  );
};
