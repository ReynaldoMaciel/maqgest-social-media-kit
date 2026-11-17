# Post 4 · Uma cotação em 3 passos

| Data | Formato | Pilar | Tamanho | Duração |
| --- | --- | --- | --- | --- |
| Seg 30/11/2026 | Reels, gravação de tela | Produto | 1080 × 1920 | 30 a 40 s |

**Objetivo:** provar o "em minutos" com gravação de tela real, sem cortes escondidos.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Roteiro de gravação, capa, overlays (cronômetro, rótulos de passo, frase final) e o enquadramento da tela no formato vertical |
| Nano Banana | Nenhuma imagem |
| Equipe | Gravar a cotação inteira de uma vez, com cronômetro real, e montar com os overlays |

**Por que sem Nano Banana:** a promessa do post é "sem truque". Qualquer imagem gerada enfraquece a prova. Tudo o que aparece é tela real.

## Roteiro de gravação

Gravar o navegador em 1500 px de largura (a mesma dos prints `passo-*`), dados de exemplo, de uma vez só.

| Tempo | Overlay | Tela |
| --- | --- | --- |
| 0–3 s | "Cronometrei uma cotação no MaqGest." + cronômetro 00:00 | Painel |
| Passo 1 | Pílula "1 · Cliente" | Buscar pelo CNPJ ou escolher cliente recente (`passo-1-cliente-generico`) |
| Passo 2 | Pílula "2 · Máquinas" | Filtrar por marca, buscar modelo, clicar nos cards; subtotal mudando (`passo-2-produtos-generico`) |
| Passo 3 | Pílula "3 · Condições" | Finame, validade, prazo e local de entrega, garantia; total calculado (`passo-3-proposta-generico`) |
| Final | Cronômetro para. "Quanto tempo leva aí?" | PDF aberto (`cotacao-pagina-1-anonimizada`) |

O vídeo é acelerado de forma visível (com o cronômetro real no canto mostrando o tempo verdadeiro) para caber em 40 s. A aceleração não esconde nenhum corte.

## Entregáveis do Claude

- `export/capa.png`: fundo `green-950`, "Uma cotação em 3 passos", cronômetro grande em `tabular-nums` e recorte do stepper do `passo-2-produtos-generico`.
- `export/overlays/`: pílulas de passo no estilo do stepper do app (círculo numerado verde), cronômetro em PNG por segundo ou como especificação para o editor, frase final.
- `export/storyboard.png` com as 5 cenas.

## Checklist de revisão

- [ ] Gravação contínua, sem corte.
- [ ] Cronômetro do overlay bate com o tempo real.
- [ ] Nenhum dado real de cliente ou de empresa na tela. Gravar com a conta de demonstração; se aparecer razão social, CNPJ, endereço, e-mail, telefone ou dados bancários reais (no PDF final, por exemplo), desfocar esses trechos na edição, como em `cotacao-pagina-1-anonimizada`.

## Legenda

> Cliente, máquinas e condições. É isso.
>
> O resumo com quantidades, subtotal e total fica sempre à vista, e dá para salvar como rascunho e terminar depois.
>
> Quanto tempo você leva hoje para montar uma proposta? Responde aqui embaixo.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #vendasagro #gestaocomercial #finame #tratores #orcamento #propostacomercial
