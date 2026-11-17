# 12 primeiros posts · fluxo Claude + Nano Banana

Cada pasta tem um `plano.md` com o post pronto para produzir. O conteúdo (temas, datas, legendas) vem do [roteiro](../../roteiro-posts-instagram.md); este arquivo define **como** os posts são produzidos.

| # | Pasta | Data | Formato | Nano Banana |
| --- | --- | --- | --- | --- |
| 1 | [01-prazer-maqgest](01-prazer-maqgest/plano.md) | Seg 23/11 | Carrossel 7 | 2 imagens (mockups de dispositivo) |
| 2 | [02-planilha-x-maqgest](02-planilha-x-maqgest/plano.md) | Qua 25/11 | Reels | 3 imagens (lado "jeito antigo") |
| 3 | [03-4-coisas-que-atrasam](03-4-coisas-que-atrasam/plano.md) | Sex 27/11 | Carrossel 7 | 1 imagem (capa) |
| 4 | [04-cotacao-em-3-passos](04-cotacao-em-3-passos/plano.md) | Seg 30/11 | Reels | nenhuma |
| 5 | [05-termo-beneficio-fiscal](05-termo-beneficio-fiscal/plano.md) | Qua 02/12 | Carrossel 6 | 1 imagem (capa) |
| 6 | [06-escritorio-no-bolso](06-escritorio-no-bolso/plano.md) | Sex 04/12 | Estático | 1 imagem (foto principal) |
| 7 | [07-anatomia-da-proposta](07-anatomia-da-proposta/plano.md) | Seg 07/12 | Carrossel 7 | 1 imagem (fundo da capa) |
| 8 | [08-formas-de-pagamento](08-formas-de-pagamento/plano.md) | Qua 09/12 | Carrossel 7 | 1 imagem (capa) |
| 9 | [09-da-porteira-ao-pdf](09-da-porteira-ao-pdf/plano.md) | Sex 11/12 | Reels | 5 imagens (storyboard ou versão foto) |
| 10 | [10-um-maqgest-para-cada-venda](10-um-maqgest-para-cada-venda/plano.md) | Seg 14/12 | Carrossel 6 | 3 imagens (uma por perfil) |
| 11 | [11-4-numeros-da-segunda](11-4-numeros-da-segunda/plano.md) | Qua 16/12 | Carrossel 7 | nenhuma |
| 12 | [12-comece-2027-sem-planilha](12-comece-2027-sem-planilha/plano.md) | Sex 18/12 | Reels | 1 imagem (opcional) |

## Quem faz o quê

**Claude (planejamento, texto e composição)**
- Ajusta o texto final de cada tela a partir do roteiro, seguindo o tom do [design system](../../design-system/README.md): sem emoji, sem exclamação, caixa de frase, números em pt-BR.
- Decide em quais telas uma imagem gerada ajuda e escreve os prompts do Nano Banana.
- Monta cada tela em HTML (1080 × 1350 no feed, 1080 × 1920 no Reels) com as fontes, as cores e os logos do manual da marca e os prints reais de `assets/screenshots/`.
- Renderiza as telas em PNG com o Chrome headless e confere cada uma antes de entregar.
- Gera os overlays de texto e as capas dos Reels.

**Nano Banana (só o que não existe nos assets)**
- Cenas fotográficas: vendedor no escritório da revenda, na mesa, no showroom ou no pátio de máquinas, no carro estacionado, num café.
- Mockups de dispositivo (notebook e celular), que depois recebem os prints reais.
- Fundos e imagens conceituais para capas.

**Pessoa da equipe**
- Gravar a tela do sistema (Reels 2, 4, 9 e 12) e as cenas reais do Reels 9.
- Montar os Reels no CapCut ou editor equivalente, usando os overlays e as capas.
- Validar os textos dos posts 5 e 8 (contador e parceiro financeiro).

## Regras para as imagens geradas

1. **O Nano Banana nunca desenha a tela do MaqGest.** Tela de produto é sempre print real. Quando um dispositivo aparece na cena, usamos um destes métodos:
   - **Método A, tela verde:** pedir a tela em verde chapado `#00FF00`, de frente e sem reflexo. O Claude sobrepõe o print real em HTML/CSS na área da tela (com `transform` de perspectiva se o aparelho estiver inclinado). É o método preferido para telas grandes e legíveis.
   - **Método B, referência:** passar o print com `-i` e `--pro` e pedir para colocá-lo na tela. Só serve para telas pequenas ou distantes. O Claude confere se a interface saiu igual ao original; se o modelo alterou números ou textos, volta para o Método A.
2. **O texto do post não vai na imagem gerada.** Todo texto é sobreposto pelo Claude em HTML, com a fonte da marca. Nos prompts, peça sempre "no text, no letters, no logos".
3. **Sem marcas reais nas máquinas.** Máquinas geradas não podem ter logo nem cor de marca conhecida (nada de verde e amarelo, por exemplo). Quando o post mostra uma máquina específica, use a foto real do catálogo (`login-tratores.webp`, `passo-2-produtos-generico.png`).
4. **Ambiente: onde o vendedor trabalha.** Quem monta a cotação é o vendedor, então a cena nunca é a fazenda ou a lavoura. Use o escritório da concessionária, a mesa de trabalho, o showroom ou o pátio de máquinas, o carro estacionado ou um café. Máquinas podem aparecer ao fundo, no pátio da revenda.
5. **Paleta e luz.** Luz natural de escritório ou de pátio, tons que combinem com o verde da marca `#108652` e o verde profundo `#0A3D27`. Nada de saturação exagerada, aspecto de banco de imagem ou HDR.
6. **Pessoas.** Vendedores brasileiros com roupa de trabalho comum de revenda (camisa polo ou social, calça jeans ou social), mãos limpas. Para manter a mesma pessoa em várias imagens, passe a primeira imagem aprovada com `-i` nas seguintes.
7. **Rascunho no Flash, final no Pro.** Explore com o modelo padrão e gere a versão final com `--pro --size 2K`.
8. **Foto real substitui a gerada.** Quando houver foto real de cliente (com autorização), ela entra no lugar da imagem gerada.

## Dados de terceiros: sempre desfocados

Nenhum post mostra dados reais de empresas ou pessoas: razão social, logo de concessionária, CNPJ, endereço, e-mail, telefone e dados bancários.

- **Cotação em PDF:** use sempre `assets/screenshots/cotacao-pagina-1-anonimizada.png` e `cotacao-pagina-2-anonimizada.png`. Nelas ficam desfocados os logos da concessionária e do grupo, os valores de faturamento, o parágrafo da declarante e o rodapé. Continuam visíveis o logo da marca da máquina (YTO), o equipamento, o NCM e a GECEX, as condições e o vendedor de exemplo. Os originais `cotacao-pagina-*.webp` não entram em post.
- **Recortes ampliados:** depois de ampliar, confira se o desfoque continua ilegível. Se não estiver, aumente o desfoque.
- **Gravações de tela:** grave com a conta de demonstração. Se algum dado real aparecer, desfoque o trecho na edição antes de publicar.
- **Nomes genéricos nos prints:** use as versões `*-generico.png` de `assets/screenshots/`. Nelas o vendedor é "José da Silva" (o nome de exemplo do manual da marca, iniciais JS) e os clientes são "Agro Exemplo Ltda.", "Fazenda Exemplo", "Coop. Exemplo", "Grupo Exemplo" e "Sítio Exemplo". As páginas da cotação anonimizadas já trazem os mesmos nomes. Os CNPJs de demonstração (11.111.111/0001-11 etc.) e as cidades podem aparecer.
- **Como foram feitas:** `_base/trocar_nomes.py` recorta cada nome, pede a troca ao Nano Banana Pro e cola de volta só aquele trecho, então o resto do print fica idêntico ao original. Os trechos estão em `_base/trocar_nomes.jobs.json`. Para refazer as páginas da cotação, rode primeiro o desfoque (`_base/anonimizar.html`) e depois a troca de nomes.

Comando base (rodar da raiz do projeto):

```bash
python3 ~/.claude/skills/nano-banana/scripts/generate.py "<prompt>" \
  -o instagram-posts/12-primeiros-posts/<pasta>/imagens/<nome>.png \
  --aspect 4:5 [--pro --size 2K] [-i <referência>]
```

## Identidade visual das telas

A fonte da verdade é o [manual da marca 2026](../../Manual-Marca-MaqGest.pptx.pdf), aplicado no [design system](../../design-system/README.md) e nos [tokens](../../design-system/tokens.json). O `_base/base.css` dos posts traduz esses tokens para o feed.

**Formato**
- Feed 1080 × 1350 (4:5). Reels 1080 × 1920; a capa do Reels mantém o conteúdo importante no recorte central 1080 × 1350, que é o que aparece na grade do perfil.
- Margem lateral de 88 px. Espaçamentos em múltiplos de 4 px.

**Cor (manual da marca)**
- Primárias: **Emerald Fall** `#108652` e **Pure Black** `#000000`. Secundárias: **Young Green** `#97DF67` e **Full White** `#FFFFFF`.
- Fundos escuros possíveis: `slide--brand` (Emerald Fall, "fundo na cor da marca"), `slide--dark` (verde profundo `#0A3D27`) e `slide--black` (preto). Em todos, o título é branco e o logo é o branco.
- Capa: `slide--dark` ou `slide--black`, com a palavra de destaque em Young Green, como na apresentação de palco do manual. CTA final: `slide--brand`, com botão branco e texto `green-800` `#0C6941`.
- **Young Green só sobre fundo escuro** (preto ou `#0A3D27`). Nunca em texto sobre branco (1,6:1) nem sobre Emerald Fall (2,9:1).
- Telas de conteúdo: fundo branco ou `green-50` `#F2F9F6`; título `ink` `#1F2723`; texto secundário `ink-muted` `#5C6762`; destaque em Emerald Fall `#108652`. Caixas suaves em `green-100` `#E3F3EC`, com texto em `green-800` `#0C6941`.
- Âmbar (`warning` `#8A5A00` sobre `#FDF1D6`) e vermelho (`danger` `#B42318` sobre `#FDE8E6`) só como selo de status, igual no app.
- Gráficos com `chart-1` `#108652`, `chart-2` `#5FB08A`, `chart-3` `#B5DCC9` e `chart-4` `#A6AFAA`, com o rótulo direto na série.

**Logo**
- Arquivos em `assets/brand/`: `maqgest-logo-verde.svg` no fundo claro e `maqgest-logo-branca.svg` nos fundos escuros e no Emerald Fall. O símbolo (`maqgest-icone-*.svg`) serve para avatar, selo e uso gráfico grande.
- Não recolorir fora das três versões (verde, branca, preta), não esticar e não aplicar efeito. Nunca digitar "Maqgest" numa fonte no lugar do logo.
- O logo laranja antigo está aposentado em `assets/brand/obsoleto/`.

**Tipografia (manual da marca)**
- **Helvetica Now Display** nos títulos, destaques e chamadas, em 700 com tracking levemente fechado. É uma fonte paga; enquanto não estiver instalada, o `base.css` usa Helvetica Neue.
- **Be Vietnam Pro** nos textos de apoio, parágrafos, legendas, rótulos e botões, em 400, 500 e 600 (arquivos em `assets/fonts/`).
- Escala para o feed: título de capa entre 88 e 104 px, título de tela entre 56 e 64 px, texto entre 32 e 36 px, apoio em 26 px.
- Caixa de frase em tudo, inclusive nos botões. Sem emoji e sem exclamação.
- Números com `font-variant-numeric: tabular-nums` e formato pt-BR (`R$ 1.249.900,00`, `20/10/2026`). Em destaque podem ser abreviados (`R$ 38,6 mi`).
- Escreva como um bom consultor: comece pela máquina e pelo número, não pelo adjetivo.

**Forma**
- Cantos generosos: 14 px (`radius-lg`) em cards e prints, 10 px em botões, pílula (`radius-full`) em selos.
- Elevação quase invisível: borda `line` + `shadow-md` (`0 6px 16px rgba(31,39,35,.08)`); `shadow-lg` só no print principal da tela.
- Sem degradê, sem padrão de fundo, sem efeito de vidro. Deixe o espaço em branco separar os blocos.

**Ícones e imagens**
- Lucide com traço de 2 px e pontas arredondadas, na cor do texto ao lado. Em destaque, o ícone fica num círculo `green-100` com traço `green-800`, como nos cards de indicador do app.
- Ícones fixos por categoria: trator `tractor`, colheitadeira `wheat`, pulverizador `droplets`, plantadeira `sprout`, implemento `package`, logística `truck`.
- Fotos de máquina são de produto: máquina inteira, três quartos de frente virada para a direita, fundo claro e liso. Não use cena de fazenda genérica no lugar da foto de uma máquina. Cenas do Nano Banana mostram pessoas e contexto, nunca substituem o produto.

**Rodapé de carrossel:** logo pequeno à esquerda e contador `2/7` à direita, em `ink-muted`.

## Estrutura de cada pasta

```
NN-nome/
  plano.md       plano do post (este documento)
  imagens/       saídas do Nano Banana (rascunhos e finais)
  slides/        HTML de cada tela + base.css compartilhado
  export/        PNGs finais, prontos para subir (01.png, 02.png...)
  legenda.txt    legenda + hashtags para copiar
```

Renderização de uma tela:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --screenshot=export/01.png --window-size=1080,1350 --hide-scrollbars \
  --force-device-scale-factor=1 "file://$PWD/slides/01.html"
```

No primeiro post, o Claude cria `instagram-posts/12-primeiros-posts/_base/` com o `base.css` (tokens, `@font-face` e componentes de tela) e um modelo de slide. Os outros posts reutilizam essa base.

## Ordem de produção sugerida

1. Post 1 primeiro: ele define a base visual e os mockups de dispositivo, que são reaproveitados nos posts 6, 9 e 12.
2. Posts sem Nano Banana (4 e 11) a qualquer momento.
3. Reels 9 depende de uma decisão sobre o tema (veja o plano dele).

## Pendências gerais

- Definir o @ do perfil e o domínio único da bio (maqgest.com ou maqgest.com.br) para o rodapé e o CTA.
- Não há print do catálogo isolado; o `passo-2-produtos-generico.png` mostra os cards de máquinas e cobre esse papel.
- Instalar o `ffmpeg` (`brew install ffmpeg`) se quiser que o Claude monte prévias dos Reels (animatic) a partir dos frames.
