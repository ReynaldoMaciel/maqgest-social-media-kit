# Post 7 · Anatomia de uma proposta que fecha venda

| Data | Formato | Pilar | Tamanho |
| --- | --- | --- | --- |
| Seg 07/12/2026 | Carrossel, 7 telas | Produto | 1080 × 1350 |

**Objetivo:** mostrar o PDF final em detalhe. Cada tela é um recorte ampliado da página 1 da cotação.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Recortes da `cotacao-pagina-1-anonimizada`, anotações (linhas e marcadores numerados), texto, renderização |
| Nano Banana | 1 imagem: a mesa de madeira com caneta e café, fundo da capa |
| Equipe | Revisão |

**Por que só o fundo da capa:** o documento é a estrela e precisa estar 100% fiel. O Nano Banana entra só para dar um ambiente real à capa; a página em si é colocada pelo Claude por cima, inclinada com CSS.

## Telas

Cada tela de 2 a 6 mostra o recorte ampliado com um marcador numerado (círculo `green-700` com número branco, como o stepper do app) e uma miniatura da página inteira no canto, com a área recortada destacada.

| # | Texto | Recorte de `cotacao-pagina-1-anonimizada` |
| --- | --- | --- |
| 1 | **Anatomia de uma proposta que fecha venda.** | Página inteira, inclinada cerca de 6°, sobre `capa-mesa.png` |
| 2 | **Timbre** com o logo da marca da máquina. | Cabeçalho |
| 3 | **Dados completos do cliente**, sem redigitar. | Bloco do cliente |
| 4 | **Equipamento** com foto e características técnicas. | Bloco do equipamento |
| 5 | **Forma de pagamento**, faturamento e dados bancários. | Condições comerciais |
| 6 | **Prazos, garantia** e assinatura do vendedor. | Rodapé com assinatura |
| 7 | **Tudo isso sai sozinho.** Agende uma demo. | Sem recorte. Fundo Emerald Fall (`slide--brand`), botão branco com texto verde, logo branco |

## Prompt do Nano Banana

**`imagens/capa-mesa.png`** · `--pro --size 2K --aspect 4:5`

> Top-down photograph of a warm light wooden desk surface, with a dark fountain pen and a small cup of black coffee near the bottom right corner and a pair of reading glasses near the top left. The center of the frame is empty wood, leaving a large clear area for a document to be placed later. Soft natural window light from the left, gentle shadows, calm and professional mood. No paper, no text, no letters, no logos.

## Checklist de revisão

- [ ] Recortes nítidos (a página tem 1300 px de largura; ampliar no máximo 2x).
- [ ] Nada do documento foi redesenhado: só recorte do print anonimizado.
- [ ] Trechos desfocados continuam ilegíveis depois da ampliação (logos da concessionária, faturamento e rodapé). Na tela 2 o destaque é o logo da marca da máquina (YTO), que fica visível; na tela 5, os rótulos de faturamento aparecem e os valores ficam desfocados.
- [ ] Sombra da página na capa coerente com a luz da foto (vinda da esquerda).

## Legenda

> Uma proposta bem montada passa confiança antes mesmo do preço.
>
> No MaqGest, cada cotação sai com o timbre da marca, foto e ficha técnica da máquina, condições de pagamento, prazos e a assinatura do vendedor. Você só baixa o PDF e envia.
>
> Salve como referência para padronizar as propostas da sua equipe.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #concessionaria #revendaagricola #vendasagro #gestaocomercial #propostacomercial #orcamento
