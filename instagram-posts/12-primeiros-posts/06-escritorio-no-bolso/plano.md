# Post 6 · O escritório cabe no bolso

| Data | Formato | Pilar | Tamanho |
| --- | --- | --- | --- |
| Sex 04/12/2026 | Estático | Rotina | 1080 × 1350 |

**Objetivo:** post leve e humano, gerando identificação com o vendedor que passa o dia fora da mesa: no pátio, no showroom, entre um cliente e outro.

**Atenção à legenda:** a do roteiro fala em "estrada, porteira e sinal fraco". Com a regra de não usar a fazenda como ambiente, a sugestão é: "Vendedor de máquina não fica parado na mesa. Fica no pátio, no showroom e no telefone." Confirmar antes de publicar.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Escolher a melhor variação, compor o print real na tela do celular, sobrepor o texto, renderizar |
| Nano Banana | A foto principal: vendedor no pátio da revenda com o celular |
| Equipe | Se conseguir foto real de cliente (com autorização), ela substitui a gerada |

**Por que Nano Banana:** é o post em que a imagem é o conteúdo. Até haver foto real de um cliente, a cena gerada permite publicar na data. É a primeira imagem de "consultor" do projeto: a versão aprovada vira a referência de personagem do Reels 9.

## Composição

- Foto em tela cheia. Vendedor de meio corpo, do lado esquerdo, olhando para o celular, no pátio de máquinas da revenda; tratores ao fundo, desfocados.
- O celular aparece grande o suficiente para a tela ser reconhecida, com `mobile-dashboard-generico` composto pelo Claude.
- Texto sobreposto no terço superior, branco em Helvetica Now Display 700: **"Meu escritório hoje."** Sem caixa atrás; se faltar contraste, escurecer só o céu com uma camada `green-950` a 35%, sem degradê.
- Logo branco pequeno no canto inferior direito.

## Prompt do Nano Banana

**`imagens/vendedor-patio.png`** · `--pro --size 2K --aspect 4:5`

Gerar 3 variações (rodar 3 vezes) e escolher.

> Natural documentary-style photograph of a Brazilian agricultural machinery salesman in his forties, wearing a plain navy polo shirt and dark trousers, standing in the outdoor yard of a machinery dealership, between rows of parked red tractors without any logo. He holds a smartphone in his right hand at chest height, looking at it with a calm, focused expression; the phone screen faces the camera at a slight angle and shows a flat solid pure green (#00FF00) with no reflections. Clean hands. Paved yard, dealership building with large glass windows behind, soft morning light, clear sky in the upper third. Realistic skin and fabric, no stock-photo smile. No text, no letters, no logos, no signage.

Composição pelo Método A (tela verde com `transform` de perspectiva). Se a tela sair pequena demais para compor bem, testar o Método B com `-i assets/screenshots/mobile-dashboard-generico.png` e conferir se os números do painel continuam iguais.

## Checklist de revisão

- [ ] Mãos, dedos e celular sem deformação.
- [ ] Trator e roupa sem logo.
- [ ] Print do painel idêntico ao original.

## Legenda

> Consultor de campo não tem mesa. Tem estrada, porteira e sinal fraco.
>
> Com o MaqGest, dá para consultar o painel, escolher o cliente, incluir as máquinas e mandar a proposta em PDF sem voltar para o escritório.
>
> Marque aquele consultor que vive na estrada.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #agro #consultoragricola #vendasagro #revendaagricola #tratores #orcamento
