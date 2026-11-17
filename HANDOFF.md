# Handoff — Landing page do MaqGest (Astro)

> **Prompt sugerido para o Claude Code**
>
> Leia `HANDOFF.md` inteiro, abra `reference/landing.html` no navegador e compare com `reference/landing-desktop.png` e `reference/landing-mobile.png`. Implemente a landing page em Astro seguindo a estrutura, os tokens e os critérios de aceite deste documento. A referência é a fonte da verdade para textos, ordem das seções e aparência; o código dela (estilos inline) não deve ser copiado como está.

---

## 1. O que é

Landing page de vendas, em português do Brasil, do **MaqGest**: software web de catálogo e cotações para concessionárias e revendas de máquinas agrícolas (tratores, colheitadeiras, pulverizadores, plantadeiras e implementos).

- **Quem compra:** donos e gerentes comerciais de concessionárias e revendas.
- **Quem usa:** consultores de vendas, muitas vezes em campo.
- **Objetivo da página:** levar o visitante a falar com a equipe pelo **WhatsApp** para agendar uma demonstração.
- **CTAs:**
  - "Agendar demonstração": no header e no hero, rola até `#demonstracao`.
  - "Ver como funciona": no hero, rola até `#como-funciona`.
  - "Chamar no WhatsApp": no bloco final, abre o WhatsApp.

Não há formulário: o contato é só pelo botão do WhatsApp (e um `mailto:` secundário).

## 2. Conteúdo do pacote

```
HANDOFF.md                     este documento
reference/landing.html         referência visual exportada do canvas (abrir no navegador)
reference/landing-desktop.png  captura em 1440 px
reference/landing-mobile.png   captura em 390 px
assets/screenshots/*.webp      telas do produto, já recortadas para cada seção
assets/brand/*.png             logos (M branco, M laranja, wordmarks)
assets/fonts/*.woff2           Nunito Sans variável (normal e itálico)
design-system/tokens.json      tokens do design system Magest (cores, tipo, raios, sombras, espaçamento)
design-system/README.md        diretrizes do design system (tom, cor, tipografia, ícones, logo)
```

Design de origem (canvas): https://claude.ai/code/artifact/74616144-5b1e-4132-8428-4a9c37da0cc0

## 3. Stack e arquitetura

- **Astro**, versão estável mais recente (`npm create astro@latest`, template mínimo, TypeScript strict).
- **Saída estática** (`output: 'static'`). **Zero JavaScript no cliente**: o acordeão usa `<details>`/`<summary>` nativos e a rolagem usa âncoras + `scroll-behavior: smooth`.
- **CSS:** variáveis CSS globais geradas a partir de `design-system/tokens.json` + estilos com escopo nos componentes `.astro`. Não adicionar Tailwind nem framework de UI, a menos que o repositório já use.
- **Imagens:** `astro:assets` (`<Image>`) com `width`/`height` definidos, `loading="eager"` + `fetchpriority="high"` só na imagem do hero; o resto `lazy`.
- **Fonte:** auto-hospedar `assets/fonts/NunitoSans-Variable*.woff2` com `@font-face` (`font-weight: 200 1000`, `font-display: swap`) e `<link rel="preload">` só da normal. Não usar Google Fonts.
- **Ícones:** Lucide, traço 2 px, pontas arredondadas, sempre em `currentColor`. Use `@lucide/astro` se estiver disponível; senão, copie os SVGs inline de `reference/landing.html` para um componente `Icon.astro`. Ícones decorativos com `aria-hidden="true"`.

Estrutura sugerida:

```
src/
  config/site.ts            WHATSAPP_NUMBER, WHATSAPP_MESSAGE, CONTACT_EMAIL, SITE_URL
  styles/tokens.css         variáveis CSS (seção 4)
  styles/global.css         reset, @font-face, base tipográfica, foco, reduced-motion
  layouts/Base.astro        <html lang="pt-BR">, <head> com SEO/OG, slot
  components/
    Header.astro
    Hero.astro
    PainSection.astro       antes × depois
    HowItWorks.astro        3 passos
    QuoteFile.astro         arquivo da cotação + termo fiscal
    Features.astro          grade de 6 cards
    Audience.astro          para quem é + bloco de depoimento [placeholder]
    Faq.astro
    FinalCta.astro          bloco verde + botão WhatsApp
    Footer.astro
    ui/BrowserFrame.astro   moldura de navegador (prop: barra com URL ou só os 3 pontos)
    ui/PhoneFrame.astro     moldura de celular
    ui/SectionHeading.astro eyebrow + h2 (+ parágrafo opcional)
    ui/Button.astro         variantes primary / secondary, renderiza <a>
    ui/Icon.astro
  assets/                   screenshots/, brand/, fonts/ (copiados do pacote)
  pages/index.astro
public/favicon.png          gerar a partir de assets/brand/magest-mark-orange.png
```

Coloque textos repetitivos (itens de lista, cards de funcionalidades, perguntas) em arrays dentro do próprio componente ou em `src/data/*.ts` e renderize com `.map()`.

## 4. Tokens (do design system Magest)

| Token | Valor | Uso |
|---|---|---|
| `--green-950` | `#0A3D16` | Fundo do header, do footer e do bloco CTA final |
| `--green-800` | `#0F6321` | Hover do botão primário |
| `--green-700` | `#127726` | Cor de ação: botões, links, eyebrows, ícones de check |
| `--green-100` | `#E5F1E8` | Círculos de ícone, destaque suave, texto claro sobre verde-escuro |
| `--green-50` | `#F3F8F4` | Fundo das faixas "Como funciona" e "Perguntas", metade de baixo do hero |
| `--gray-900` | `#1F2723` | Texto principal, moldura do celular |
| `--gray-600` | `#5C6762` | Texto secundário |
| `--gray-400` | `#858F89` | Borda do botão secundário, borda tracejada do placeholder |
| `--gray-200` | `#E2E7E4` | Bordas de cards e divisórias |
| `--gray-100` | `#F3F5F4` | Fundo da faixa "Funcionalidades", barra da moldura de navegador, card "antes" |
| `--nav-ink-muted` | `#A9C9B1` | Texto secundário no footer |
| `--nav-line` | `#1D5A2B` | Borda inferior do header |
| Pontos da moldura | `#CDD4D0` | Os 3 pontos da barra do navegador |

- **Tipografia:** só Nunito Sans, pesos 400 / 600 / 700 / 800. Corpo 17 px / 1.6. Números com `font-variant-numeric: tabular-nums`.
  - H1: `clamp(36px, 5.2vw, 60px)`, 800, line-height 1.08, letter-spacing −0.02em.
  - H2: `clamp(28px, 3.4vw, 40px)`, 800, line-height 1.15, letter-spacing −0.015em.
  - H3: 19–26 px, 700/800.
  - Eyebrow: 14 px, 700, verde.
  - Use `text-wrap: balance` nos títulos.
- **Raios:** 6 px (imagens dentro de cards, páginas da cotação), 10 px (botões), 14 px (cards, seções em bloco), 999 px (pílulas, círculos).
- **Sombras:**
  - `sm`: `0 1px 2px rgba(31,39,35,.05)`
  - `md`: `0 6px 16px rgba(31,39,35,.08)`
  - `lg`: `0 16px 40px rgba(31,39,35,.14)`
- **Layout:**
  - Conteúdo com `max-width` de 1120 px, e 1200 px no header, no footer e no bloco CTA.
  - Gutter lateral de 24 px.
  - Seções com 96–112 px de padding vertical no desktop (reduzir para ~64 px no celular).
- **Grades:** `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))` para colapsar sozinhas. Os valores de N estão na referência: 420 no antes/depois, 320 nas funcionalidades, 300 no "para quem é".

**Regras de marca (não quebrar):**
- **Sem laranja na interface.** O laranja existe só dentro do arquivo de logo.
- **Uma cor de ação:** o verde.
- **Sem gradientes decorativos, emoji ou pontos de exclamação.**
- **Texto em sentence case.**

## 5. Seções (na ordem)

Os textos estão em `reference/landing.html`; copie-os **literalmente**. O que segue é estrutura e comportamento.

1. **Header** (`<header>`, sticky, `z-index: 20`)
   - Fundo `--green-950` com borda inferior `--nav-line`, altura 72 px.
   - Conteúdo: M branco (`magest-mark-white.png`, 36 px de altura) linkando para `#inicio`; nav com 4 âncoras (Funcionalidades, Como funciona, Para quem é, Perguntas) em `--green-100`, hover branco; botão primário "Agendar demonstração" → `#demonstracao`.
   - Abaixo de 900 px a nav some e fica só logo + botão. Não precisa de menu hambúrguer.
2. **Hero** (`#inicio`)
   - Pílula de eyebrow com ícone `building-2`, H1, parágrafo e os dois botões (primário com `arrow-right`, secundário com `arrow-down`).
   - Linha com 3 checks.
   - Abaixo: `BrowserFrame` com `hero-dashboard.webp`; a barra do navegador tem um pill central com cadeado e o texto "MaqGest · Painel".
   - `PhoneFrame` com `mobile-nova-cotacao.webp` sobreposto no canto inferior direito: `position: absolute; right: 0; bottom: -64px; width: clamp(112px, 21%, 236px)`. Moldura `#1F2723`, padding 7 px, raio 34 px, imagem com raio 27 px.
   - Uma faixa `--green-50` cobre os 46 % de baixo da seção, atrás das imagens.
3. **Antes × depois:** eyebrow + H2 (`max-width: 644px`); dois cards lado a lado.
   - "Hoje, na planilha e no Word": fundo `--gray-100`, ícones `x` em círculo branco.
   - "Com o MaqGest": borda 1 px verde, sombra `md`, ícones `check` em círculo `--green-100`.
4. **Como funciona** (`#como-funciona`, fundo `--green-50`)
   - Cabeçalho, depois 3 linhas alternadas, cada uma com texto + `BrowserFrame` só com os 3 pontos. A linha 2 inverte a ordem; no celular a imagem vem **depois** do texto (`flex-wrap: wrap-reverse` na referência).
   - Número do passo em círculo de 40 px com borda verde de 2 px.
   - Passo 2: a imagem `passo-2-produtos.webp` fica num contêiner de 520 px de altura, com `object-fit: cover; object-position: top left`.
   - Passo 3: tem 5 pílulas de modalidade de pagamento.
   - Fecha com um link-pílula "E o arquivo da cotação sai pronto" → `#arquivo`.
5. **Arquivo da cotação** (`#arquivo`)
   - Coluna de texto: H2, parágrafo, lista em 2 colunas com 6 checks, e um callout `--green-100` com ícone `landmark` sobre o termo de benefício fiscal.
   - Coluna de imagens: `cotacao-pagina-1.webp` e `cotacao-pagina-2.webp` lado a lado; a segunda desce 48 px. Raio 6 px, sombra `lg`, legenda "Página 1 · Proposta" / "Página 2 · Termo de benefício fiscal".
6. **Funcionalidades** (`#funcionalidades`, fundo `--gray-100`)
   - 6 cards, cada um com uma imagem de 200 px de altura (`object-fit: cover; object-position: top left`), um ícone em círculo de 40 px, H3 e texto. Ícones: `layout-dashboard`, `package`, `users`, `tag`, `user`, `smartphone`.
   - O card "Funciona no celular" mostra **dois** celulares cortados (`mobile-dashboard.webp`, `mobile-nova-cotacao.webp`) sobre fundo `--green-100`.
7. **Para quem é** (`#para-quem`)
   - 3 cards com ícone de 48 px: `building-2`, `store`, `map-pin`.
   - Depois um bloco de depoimento com borda tracejada, marcado `[placeholder]`. Manter visível e marcado até haver um depoimento real; **não inventar**.
8. **Perguntas frequentes** (`#perguntas`, fundo `--green-50`)
   - Título à esquerda; à direita 3 `<details>` (o primeiro `open`).
   - `summary` com no mínimo 64 px de altura e `chevron-down` girando 180° quando aberto. Esconder o marcador nativo.
9. **CTA final** (`#demonstracao`)
   - Bloco com raio 14 px e fundo `--green-950`, com textura de pontos e dois conjuntos de círculos concêntricos decorativos. Os SVGs estão na referência; manter `aria-hidden` e `pointer-events: none`. Os pontos são feitos com:
     ```css
     background-image: radial-gradient(rgba(229,241,232,.16) 1.2px, transparent 1.5px);
     background-size: 28px 28px;
     ```
   - Esquerda: H2 branco, parágrafo `--green-100`, imagem `login-tratores.webp` (raio 10 px).
   - Direita: card branco com ícone `message-circle`, H3 "Fale com a gente no WhatsApp", texto, botão primário de 56 px "Chamar no WhatsApp" e a linha "Prefere e-mail? contato@maqgest.com.br" com `mailto:`.
10. **Footer:** fundo `--green-950`. M branco (32 px) + "© 2026 MaqGest" em `--nav-ink-muted`; à direita o e-mail e o link "Agendar demonstração" (`--green-100`, hover branco).

## 6. Link do WhatsApp

Monte a URL em `src/config/site.ts`, nunca fixa no HTML:

```ts
export const WHATSAPP_NUMBER = '55XXXXXXXXXXX'; // TODO: número real, só dígitos, com DDI 55 + DDD
export const WHATSAPP_MESSAGE = 'Olá, quero agendar uma demonstração do MaqGest.';
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const CONTACT_EMAIL = 'contato@maqgest.com.br';
```

O botão é um `<a>` com `target="_blank" rel="noopener noreferrer"`. Opcional: se o produto quiser, os CTAs "Agendar demonstração" do header e do hero também podem apontar direto para `whatsappUrl` em vez da âncora. Hoje eles rolam até `#demonstracao`.

## 7. Comportamento e acessibilidade

- `html { scroll-behavior: smooth }` e `section[id] { scroll-margin-top: 88px }`, para o header fixo não cobrir o título.
- Foco visível em tudo que é interativo: `outline: 2px solid #127726; outline-offset: 2px`. Dentro do header e do footer, o contorno é `#E5F1E8`.
- `@media (prefers-reduced-motion: reduce)`: sem transições e com `scroll-behavior: auto`.
- Transições só de cor/transform, 150–200 ms.
- Alvos de toque ≥ 44 px. Os botões do hero têm 52 px; o do WhatsApp, 56 px.
- Toda imagem com `alt` descritivo (use os da referência). As decorativas com `alt=""`.
- Um único `h1`. `h2` por seção, `h3` nos cards.
- Contraste: os pares de cor acima já passam 4.5:1; não clarear o cinza secundário.

## 8. SEO e metadados

- `<title>MaqGest · Cotações de máquinas agrícolas</title>`.
- `meta description`, a partir do parágrafo do hero: "Catálogo, clientes e cotações no mesmo lugar. O MaqGest gera o arquivo da proposta pronto para enviar ao cliente, com NCM, GECEX e termo de benefício fiscal."
- `lang="pt-BR"`, `viewport`, `theme-color` `#0A3D16`, canonical a partir de `SITE_URL`.
- Open Graph / Twitter: título, descrição e imagem 1200×630. **TODO:** gerar a partir de `hero-dashboard.webp` sobre fundo `#0A3D16`, ou pedir a arte.
- Favicon a partir de `magest-mark-orange.png`.

## 9. Pendências (não inventar; deixar `TODO` visível no código)

1. **Número do WhatsApp:** hoje é `55XXXXXXXXXXX`.
2. **Depoimento:** o bloco está como `[placeholder]`; manter até haver texto real.
3. **Nome da marca:** a página usa "MaqGest". Os logos e alguns `alt` dizem "Magest". Confirmar a grafia oficial e padronizar (texto, `alt`, título, favicon).
4. **Dados reais nas imagens da cotação:** `cotacao-pagina-1.webp` e `cotacao-pagina-2.webp` mostram CNPJ, endereço, e-mails e dados bancários reais de uma concessionária. Confirmar a autorização ou trocar por uma cotação de demonstração antes de publicar.
5. **Domínio / `SITE_URL` e imagem OG.**
6. **Word:** não mencionar "Baixar Word"; ainda não existe. Só PDF.

## 10. Critérios de aceite

- [ ] `npm run build` sem erros nem avisos; saída 100 % estática, sem JS de cliente.
- [ ] Em 1440 px e 390 px, a página bate visualmente com `reference/landing-desktop.png` e `reference/landing-mobile.png` (ordem, textos, cores, espaçamentos aproximados).
- [ ] Sem rolagem horizontal entre 320 px e 1920 px.
- [ ] Todas as âncoras do header e do hero levam à seção certa, sem o título ficar escondido atrás do header.
- [ ] O botão "Chamar no WhatsApp" abre `wa.me` com a mensagem pré-preenchida, em nova aba.
- [ ] Lighthouse (mobile): Performance ≥ 95, Acessibilidade 100, Boas práticas ≥ 95, SEO 100. CLS ≈ 0 (todas as imagens com dimensões).
- [ ] Navegação completa por teclado, com foco sempre visível; o acordeão abre com Enter/Espaço.
- [ ] Nenhum laranja na interface, nenhum emoji, nenhum número de "resultado" inventado no texto.
