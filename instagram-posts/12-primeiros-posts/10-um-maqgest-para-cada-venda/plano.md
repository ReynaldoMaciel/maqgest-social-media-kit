# Post 10 · Um MaqGest para cada tipo de venda

| Data | Formato | Pilar | Tamanho |
| --- | --- | --- | --- |
| Seg 14/12/2026 | Carrossel, 6 telas | Produto | 1080 × 1350 |

**Objetivo:** fazer cada segmento se reconhecer e entender o que ganha.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Texto, layout, combinação de foto + print em cada tela de perfil, renderização |
| Nano Banana | 3 imagens, uma por perfil: concessionária, revenda multimarcas e consultor de campo |
| Equipe | Revisão |

**Por que três imagens:** o post depende de o leitor se ver na tela. Um ambiente reconhecível (showroom, pátio com máquinas variadas, carro do consultor) faz isso melhor que ícone. Cada foto ocupa a metade superior da tela e o print real ocupa a inferior, então o produto continua presente.

## Telas

| # | Texto | Visual | Fonte da imagem |
| --- | --- | --- | --- |
| 1 | **Concessionária, multimarcas ou consultor?** Arrasta para ver o seu. | Fundo `green-950`, as 3 fotos em tiras verticais com cantos de 14 px, numeradas 1, 2 e 3 | Nano Banana (as 3) |
| 2 | **1 · Concessionária:** catálogo das marcas que você representa e propostas padronizadas com o timbre da casa. | `perfil-concessionaria.png` em cima, recorte do timbre de `cotacao-pagina-1-anonimizada` embaixo | Nano Banana + print real |
| 3 | **2 · Revenda multimarcas:** todas as marcas cadastradas. Cada proposta sai com o logo da marca da máquina cotada. | `perfil-multimarcas.png` em cima, recorte de `marca-editar` embaixo | Nano Banana + print real |
| 4 | **3 · Consultor de campo:** cotação no celular, de onde estiver, enviada sem voltar ao escritório. | `perfil-consultor.png` em cima, `mobile-nova-cotacao-generico` embaixo | Nano Banana + print real |
| 5 | **Para todos:** cliente final ou revenda já marcado na cotação, e painel de vendas. | Recorte de `cliente-criar` + recorte dos indicadores de `hero-dashboard-generico` | Print real |
| 6 | **Marque quem precisa ver isso.** | Fundo `green-950`, ícone `at-sign`, logo branco, linha "Agende uma demo pelo link da bio" | Sem imagem |

## Prompts do Nano Banana

Todas com `--pro --size 2K --aspect 4:3`, mesma luz e tratamento de cor para formarem um conjunto.

**`imagens/perfil-concessionaria.png`**

> Photograph of a clean, modern agricultural machinery dealership showroom in Brazil, polished concrete floor, two large red tractors of the same unbranded model displayed side by side, a glass façade with daylight, a salesman in a plain navy polo talking with a customer at a desk in the background. Bright, orderly, professional. No text, no letters, no logos, no brand names, no signage.

**`imagens/perfil-multimarcas.png`**

> Photograph of an outdoor yard of a multi-brand used and new agricultural machinery dealer in Brazil, rows of different machines in different colors and sizes: tractors, a combine harvester, a sprayer and a planter, none with visible logos or lettering. Red earth, clear sky, mid-morning light. Busy but organized. No text, no letters, no logos, no signage.

**`imagens/perfil-consultor.png`**

> Photograph of an independent agricultural machinery sales consultant in a plain navy polo, sitting in the driver's seat of a white pickup truck parked in a town street, door open, checking his smartphone between client meetings. Clean hands, warm morning light. No text, no letters, no logos, no license plate characters.

Para o perfil consultor, passar a imagem aprovada do post 6 com `-i` para manter o mesmo personagem.

## Checklist de revisão

- [ ] As 3 fotos parecem da mesma sessão (luz e cor coerentes).
- [ ] Nenhum logo ou placa legível.
- [ ] Recortes de print nítidos.

## Legenda

> Feito para quem vende trator, colheitadeira, pulverizador, plantadeira e implemento.
>
> Seja concessionária de uma marca, revenda multimarcas ou consultor independente, o MaqGest se ajusta ao jeito que você vende.
>
> Qual desses é você? Responde com 1, 2 ou 3.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #concessionaria #revendaagricola #consultoragricola #vendasagro #tratores #colheitadeira #pulverizador
