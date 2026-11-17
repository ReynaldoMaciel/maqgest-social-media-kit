# Post 12 · Comece 2027 sem planilha

| Data | Formato | Pilar | Tamanho | Duração |
| --- | --- | --- | --- | --- |
| Sex 18/12/2026 | Reels | Conversão | 1080 × 1920 | 15 a 20 s |

**Objetivo:** fechar o ano com chamada forte para a demonstração, aproveitando o planejamento de janeiro.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Storyboard, capa, overlays, e a cena da planilha indo para a lixeira montada como animação em HTML (dispensa gravação) |
| Nano Banana | 1 imagem opcional: amanhecer no campo para o fechamento |
| Equipe | Gravar a abertura do painel do MaqGest e montar |

**Por que quase sem Nano Banana:** a cena central (planilha arrastada para a lixeira) é uma interface simples que o Claude monta em HTML com animação CSS, sem marca de software real. O amanhecer é opcional e dá o clima de "ano novo" no fechamento; sem ele, o fechamento é a tela verde da marca.

## Storyboard

| # | Tempo | Cena | Overlay | Fonte |
| --- | --- | --- | --- | --- |
| 1 | 0–4 s | Planilha de preços genérica aberta (grade de células, colunas "Modelo", "Preço", "NCM") | "Meta para 2027:" | HTML do Claude |
| 2 | 4–8 s | Ícone do arquivo `precos_FINAL_v7.xlsx` arrastado para a lixeira | | Animação HTML do Claude |
| 3 | 8–13 s | Painel do MaqGest abrindo | "Orçamento em minutos, onde você estiver." | Gravação de tela ou `hero-dashboard-generico` com zoom lento |
| 4 | 13–18 s | Amanhecer no campo (opcional) ou fundo `green-950` | **"Agende sua demonstração ainda em dezembro e comece janeiro com o catálogo pronto."** + logo branco | Nano Banana (opcional) |

A planilha das cenas 1 e 2 usa visual neutro (sem cores ou ícones do Excel), com dados de exemplo plausíveis: "Trator ELX-2404", "R$ 1.249.900,00".

## Prompt do Nano Banana (opcional)

**`imagens/amanhecer-campo.png`** · `--pro --size 2K --aspect 9:16`

> Vertical landscape photograph of a vast Brazilian soybean field at sunrise, rows of young green plants leading toward the horizon, soft warm light breaking over the horizon in the lower third, calm clear sky in deep tones fading to soft light. Peaceful, hopeful, new-beginning mood, natural colors, no dramatic HDR. The middle of the frame is calm sky with space for text. No people, no machines, no text, no letters, no logos.

Para garantir contraste com o texto branco, o Claude aplica uma camada `green-950` a 45% sobre a foto.

## Entregáveis do Claude

- `export/capa.png`: "Comece 2027 sem planilha" em Helvetica Now Display 700, fundo `green-950`.
- `export/cena-1-2.mp4` ou sequência de PNGs da animação (mp4 só com `ffmpeg` instalado).
- `export/overlays/` com os textos de cada cena.

## Checklist de revisão

- [ ] Planilha sem marca de software real.
- [ ] CTA final legível por pelo menos 4 s.
- [ ] Reels publicado até 18/12, para dar tempo de agendar demos antes do recesso.

## Legenda

> Que 2027 comece sem preço desatualizado, sem cliente digitado de novo e sem NCM copiado à mão.
>
> Agende uma demonstração ainda este mês. A gente monta uma proposta com você, do cliente ao PDF, com as máquinas que você vende.
>
> Link na bio ou comente "2027" que chamamos você no WhatsApp.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #agro #concessionaria #revendaagricola #vendasagro #gestaocomercial #orcamento #propostacomercial
