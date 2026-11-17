# Post 2 · Planilha e Word x MaqGest

| Data | Formato | Pilar | Tamanho | Duração |
| --- | --- | --- | --- | --- |
| Qua 25/11/2026 | Reels, tela dividida em cima e embaixo | Dor x solução | 1080 × 1920 | 20 a 25 s |

**Objetivo:** gerar identificação com a dor e mostrar o contraste em segundos. Em cima, como o orçamento era feito antigamente; embaixo, como é feito agora com o MaqGest.

## Material na pasta

| Arquivo | Duração | Conteúdo | Uso |
| --- | --- | --- | --- |
| `vendedor-gerando-orcamento-a-moda-antiga.mp4` | 30 s, 1280 × 720 | 0–10 s: vendedor no escritório digitando, mesa com papéis e post-its. 10–17 s: close nos óculos refletindo a tela. 17–22 s: tira os óculos e esfrega os olhos, cansado. 22–30 s: na cozinha, com café e celular. | Painel de cima, trecho 0–22 s praticamente sem cortes |
| `cliente-recebendo-orcamento.mp4` | 10 s, 1280 × 720 | 0–3 s: cliente na varanda da fazenda pega o celular. 4–10 s: close no celular com a proposta, cliente sorri. | Painel de baixo, fechamento da cena "Enviar a proposta" |

Os dois vídeos são horizontais. Cada painel tem cerca de 1080 × 860 a 920, então o vídeo é escalado pela altura e recortado nas laterais (ver "Recortes").

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Storyboard frame a frame, capa do Reels, overlays de texto em PNG transparente, frames estáticos do painel de baixo a partir dos prints reais |
| Equipe | Gravar a tela real do MaqGest para o painel de baixo e montar no editor com os vídeos e os overlays |

Não há mais imagens do Nano Banana neste post: o vídeo do vendedor cobre todo o "jeito antigo".

## Layout

> **Atualização (17/11):** a montagem no Remotion (`remotion/src/post02/`) não divide mais a tela. Em cada cena, "Do jeito antigo" ocupa a tela inteira e depois um `slide` vindo da direita mostra "Com o MaqGest", também em tela cheia; entre as cenas, o mesmo slide. A faixa de texto do topo fica fixa. Trechos do vendedor: 0–3, 3–6,5, 10–13,5 e 17–20,3 s (este em câmera lenta; o arquivo corta para a cozinha em 20,3 s). O cliente entra no fim, a partir de 5 s do arquivo, com o selo "Proposta recebida". O lado MaqGest usa prints como provisório até a gravação de tela. A tabela abaixo descreve o layout anterior.


Tela dividida na horizontal, com a faixa de texto no meio, entre os dois painéis:

| Faixa vertical | Altura | Conteúdo |
| --- | --- | --- |
| 0–860 px | 860 px | **Painel de cima, "Antigamente":** vídeo do vendedor. Pílula cinza `info-soft` "Antigamente" em y ≈ 250 px (abaixo da área do topo coberta pelo Reels). |
| 860–1000 px | 140 px | **Faixa central** em `green-950` com o texto da cena, branco, centralizado. É o ponto onde o olho cai primeiro. |
| 1000–1920 px | 920 px | **Painel de baixo, "Agora, com o MaqGest":** gravação de tela e vídeo do cliente. Pílula `green-100` "Agora, com o MaqGest" em y ≈ 1030 px. |

A base de 380 px (1540–1920) fica coberta pela legenda e pelos botões do Reels. No painel de baixo, a ação importante (campo de busca, card da máquina, botão "Baixar PDF", celular do cliente) precisa ficar entre 1000 e 1540 px. O que estiver abaixo disso é só continuação da tela.

Selos do painel de cima usam `danger-soft`/`danger`, como os selos de status do app. O selo do painel de baixo usa `green-100`/`green-700`.

## Storyboard

| Tempo | Texto na faixa central | Em cima (antigamente) | Embaixo (com o MaqGest) |
| --- | --- | --- | --- |
| 0–3 s | Fazer uma proposta de trator em 2026: | Vendedor 0–3 s: plano aberto do escritório | `passo-2-produtos-generico` parado |
| 3–10 s | Achar o cliente | Vendedor 3–10 s: digitando; selo "Digitando o CPF de novo" | Gravação: busca pelo CPF em `passo-1-cliente-generico`, cliente aparece |
| 10–17 s | Incluir a máquina | Vendedor 10–17 s: close nos óculos com a tela refletida; selo "Procurando NCM no Google" | Gravação: clique no card, NCM já preenchido |
| 17–22 s | Enviar a proposta | Vendedor 17–22 s: tira os óculos e esfrega os olhos; selo "Ainda formatando" | 17–19,5 s: gravação de "Baixar PDF" e envio no WhatsApp. 19,5–22 s: cliente 5,5–8 s, sorrindo com a proposta no celular; selo "Proposta recebida" |
| 22–25 s | **Orçamento em minutos.** Agende sua demo. | Tela cheia `green-950`, logo branco (os dois painéis somem) | |

O painel de cima roda o trecho 0–22 s do vídeo do vendedor quase sem cortes, o que mantém o ritmo arrastado. O painel de baixo tem cortes secos a cada ação, para o contraste lento x rápido ficar visível.

**Alternativa para a cena 4:** trocar a gravação do envio no WhatsApp pelo trecho 23–26 s do vídeo do vendedor (ele na cozinha, tranquilo, mexendo no celular) antes do corte para o cliente. Isso mostra o mesmo vendedor resolvendo pelo celular, mas tira tela real do MaqGest; decidir na montagem.

## Recortes

- **Vendedor (painel de cima, 1080 × 860):** escalar para 860 px de altura (≈ 1529 × 860) e recortar 1080 px. 0–10 s: centralizar no vendedor (levemente à esquerda do centro no início). 10–22 s: centralizar no rosto.
- **Cliente (painel de baixo, 1080 × 920):** escalar para 920 px de altura (≈ 1636 × 920) e recortar 1080 px puxando para a esquerda, de modo que o celular e o rosto apareçam juntos. O celular deve ficar acima de y = 1540 px.
- **Gravação do MaqGest (painel de baixo, 1080 × 920):** gravar já numa janela quase quadrada (ex.: navegador em 1080 × 920 ou modo responsivo) com zoom de 125 a 150% para a interface ficar legível no celular. Uma tela de desktop 16:9 recortada perde informação demais.

Os vídeos de origem são 720p; ao escalar ~1,2× a qualidade ainda é aceitável para o Reels. Se houver versão em 1080p, usar.

## Entregáveis do Claude

- `export/capa.png` (1080 × 1920; título "Planilha e Word x MaqGest" dentro do recorte central 4:5, com um quadro do vendedor em cima e um do cliente embaixo).
- `export/overlays/` com a faixa central, as duas pílulas e os selos de cada cena em PNG transparente, já posicionados em 1080 × 1920.
- `export/storyboard.png`: as 5 cenas lado a lado, cada uma com os dois painéis empilhados, para a equipe gravar e montar.

## Gravação (equipe)

Gravar a tela do MaqGest com dados de exemplo, na janela quase quadrada descrita em "Recortes": busca de cliente pelo CPF, inclusão de máquina, botão "Baixar PDF", envio no WhatsApp Web. Sem cortes escondidos dentro de cada ação.

**Áudio:** trilha em alta no momento. Se possível, som ambiente de escritório (teclado, relógio) baixo nas cenas 2 a 4, e a trilha subindo no corte para o cliente.

## Checklist de revisão

- [ ] Faixa central e pílulas fora das áreas cobertas pelo Reels (topo 220 px e base 380 px).
- [ ] Ação do painel de baixo sempre entre 1000 e 1540 px.
- [ ] Recorte do vendedor e do cliente sem cortar rosto nem celular.
- [ ] Interface do MaqGest legível na tela do celular.
- [ ] Nenhum dado real de cliente na gravação.

## Legenda

> Em cima ou embaixo: qual é a sua segunda-feira?
>
> Antigamente: preço copiado de uma planilha para outra, cliente digitado de novo, NCM procurado à mão e a noite indo embora. Agora: cliente achado pelo CPF, máquina incluída com um clique e a proposta chegando no celular do cliente, lá na fazenda.
>
> Comenta "DEMO" que a gente te chama.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #agro #concessionaria #vendasagro #gestaocomercial #tratores #orcamento #propostacomercial
