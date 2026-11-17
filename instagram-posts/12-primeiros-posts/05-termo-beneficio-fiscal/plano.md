# Post 5 · O termo de benefício fiscal

| Data | Formato | Pilar | Tamanho |
| --- | --- | --- | --- |
| Qua 02/12/2026 | Carrossel, 6 telas | Educativo | 1080 × 1350 |

**Objetivo:** educar sobre um tema técnico e mostrar autoridade.

**Bloqueio:** antes de publicar, um contador ou despachante revisa o texto das telas 2 a 4.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Texto, layout, recortes da página 2 da cotação, renderização |
| Nano Banana | 1 imagem: máquina agrícola em um porto, entre contêineres (capa) |
| Equipe | Revisão técnica do texto |

**Por que a imagem na capa:** "máquina importada" é abstrato para quem rola o feed. Um trator ao lado de contêineres comunica o tema antes de qualquer leitura. As demais telas são explicativas e funcionam melhor com o documento real.

## Telas

| # | Texto | Visual | Fonte da imagem |
| --- | --- | --- | --- |
| 1 | Vende máquina importada com benefício fiscal? **Sua proposta precisa disto.** | Foto do porto ocupando a tela, faixa `green-950` na parte de cima com o título | Nano Banana |
| 2 | O **Termo de Aplicação de Benefício Fiscal** acompanha a proposta de máquinas importadas com benefício. | `cotacao-pagina-2-anonimizada` reduzida, inteira | Print real |
| 3 | O que entra nele: **marca, modelo, código NCM, resolução GECEX e as fontes oficiais de consulta.** | Lista de 5 itens com ícones (`tag`, `tractor`, `hash`, `file-text`, `link`), cada item com o recorte do campo na página 2 | Print real |
| 4 | **O problema:** montar esse documento à parte, copiando e colando cada código. | Ícones `copy` → `clipboard` com selo `danger` "Um dígito errado" | Sem imagem |
| 5 | **No MaqGest:** você marca a máquina como importada com benefício no cadastro, e a cotação ganha a 2ª página sozinha. | Recorte do cadastro em `produto-editar` com o campo destacado + seta para a página 2 | Print real |
| 6 | **Quer ver na prática?** Agende uma demonstração. | Fundo Emerald Fall (`slide--brand`), botão branco com texto verde, logo branco | Sem imagem |

## Prompt do Nano Banana

**`imagens/capa-porto.png`** · `--pro --size 2K --aspect 4:5`

> Photograph of a large modern red farm tractor without any brand logo or lettering, parked on the concrete quay of a Brazilian cargo port, three-quarter front view facing right, stacked shipping containers in muted colors behind it and a gantry crane in the distance. Clear late-afternoon light, realistic and documentary in tone. The upper quarter of the frame is open sky for a headline. No text, no letters, no logos, no brand names on the tractor or containers.

Se o trator sair com cara de marca conhecida, refazer passando `assets/screenshots/login-tratores.webp` com `-i` como referência de formato (ele é do catálogo de exemplo).

## Checklist de revisão

- [ ] Texto validado pelo contador (registrar nome e data aqui).
- [ ] Nenhum logo ou nome nos contêineres e no trator.
- [ ] Os recortes da página 2 estão nítidos em 1080 px.

## Legenda

> NCM, resolução GECEX, link de consulta. Cada código copiado à mão é uma chance de erro.
>
> No MaqGest, os dados fiscais ficam no cadastro da máquina. Quando ela é importada com benefício fiscal, o termo sai automaticamente como 2ª página da proposta.
>
> Salve para consultar depois e mande para quem monta as propostas na sua equipe.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #concessionaria #revendaagricola #vendasagro #tratores #implementosagricolas #propostacomercial
