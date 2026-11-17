# Post 9 · Da porteira ao PDF

| Data | Formato | Pilar | Tamanho | Duração |
| --- | --- | --- | --- | --- |
| Sex 11/12/2026 | Reels | Rotina | 1080 × 1920 | 25 a 35 s |

> **Decisão pendente.** Este post mostra a cotação feita na fazenda, mas quem gera a cotação é o vendedor, no ambiente dele. Proposta para substituir o tema, mantendo data e formato:
>
> **"Do pedido ao PDF"** (25 a 35 s). 1) O telefone do vendedor toca na mesa da revenda: "Cliente pedindo preço, 9h." 2) Ele abre o MaqGest no computador ou no celular, escolhe o cliente, inclui a plantadeira, define Finame. 3) "Proposta enviada em 4 minutos." 4) O cliente recebe o PDF no WhatsApp (só o close do celular, sem mostrar a fazenda). 5) "Orçamento em minutos, onde você estiver."
>
> Legenda sugerida: "O cliente pediu preço. A proposta chegou antes de ele desligar o trator. Com o MaqGest, o vendedor monta a cotação em minutos e manda o PDF no WhatsApp, enquanto o interesse está quente." O plano abaixo é o original e só deve ser produzido depois dessa decisão.

**Objetivo:** encenar o uso real em campo. Funciona melhor gravado com um cliente ou parceiro de verdade.

**Começar cedo:** a gravação em campo depende de agenda. O storyboard precisa estar pronto até 27/11.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Storyboard, lista de planos para a gravação, overlays de texto, capa, composição das telas do celular |
| Nano Banana | 5 quadros do storyboard, com o mesmo consultor em todos |
| Equipe | Gravar em uma propriedade real e montar |

**Duas formas de usar as imagens geradas:**
1. **Plano A (preferido):** os quadros são só referência. A equipe grava as cenas reais seguindo o storyboard.
2. **Plano B:** se a gravação não acontecer até 08/12, os 5 quadros em versão final (Pro, 2K) viram o próprio Reels, com movimento lento de câmera e os overlays do Claude.

## Storyboard

| # | Tempo | Cena | Overlay | Arquivo |
| --- | --- | --- | --- | --- |
| 1 | 0–4 s | Caminhonete chegando na porteira da fazenda, plano aberto | "Visita ao cliente, 9h." | `quadro-1-porteira.png` |
| 2 | 4–10 s | Consultor conversando com o produtor ao lado de uma plantadeira | | `quadro-2-conversa.png` |
| 3 | 10–20 s | Close no celular: escolhe o cliente, inclui a plantadeira, define Finame | Pílulas "Cliente", "Máquina", "Finame" | `quadro-3-celular.png` + `mobile-nova-cotacao-generico` |
| 4 | 20–27 s | Consultor mostra a tela ao produtor | "Proposta enviada antes de sair da propriedade." | `quadro-4-mostra.png` |
| 5 | 27–32 s | Celular do produtor recebe o PDF no WhatsApp | "Orçamento em minutos, onde você estiver." + logo | `quadro-5-recebe.png` |

## Prompts do Nano Banana

Todos com `--aspect 9:16`. Rascunho no Flash; Plano B no `--pro --size 2K`. Personagem: usar a imagem aprovada do post 6 como referência (`-i ../06-escritorio-no-bolso/imagens/consultor-lavoura.png`) nos quadros 2, 3 e 4. Se o post 6 ainda não existir, gerar o quadro 2 primeiro e usá-lo como referência nos seguintes.

**`imagens/quadro-1-porteira.png`**

> Wide cinematic photograph of a white pickup truck without logos driving on a red dirt road toward an open wooden farm gate (porteira) in rural Brazil, early morning, soft mist over green soybean fields on both sides, warm low sunlight. Vertical frame, the truck in the lower half, open sky above. Realistic, documentary tone. No text, no letters, no logos, no license plate characters.

**`imagens/quadro-2-conversa.png`**

> Vertical photograph of the same sales consultant from the reference image, in a plain navy polo, talking with an older Brazilian farmer in a plaid shirt and straw hat, both standing beside a red row-crop planter without any logo, on a farmyard with red earth. Natural conversation, the consultant gesturing toward the machine. Morning light, realistic, documentary. No text, no letters, no logos.

**`imagens/quadro-3-celular.png`**

> Vertical close-up over the shoulder of the consultant from the reference image, holding a smartphone in both hands, screen facing the camera straight on and filling a large part of the frame. The screen is flat solid pure green (#00FF00) without reflections. Blurred farm and planter in the background, morning light. No text, no letters, no logos.

**`imagens/quadro-4-mostra.png`**

> Vertical photograph of the consultant from the reference image turning his smartphone to show the screen to an older farmer in a plaid shirt and straw hat, who leans in with interest. The phone screen is flat solid pure green (#00FF00). Farmyard with a red planter behind them, warm light. Realistic, documentary. No text, no letters, no logos.

**`imagens/quadro-5-recebe.png`**

> Vertical close-up of an older farmer's weathered hand holding a smartphone, screen facing the camera straight on, flat solid pure green (#00FF00) without reflections. Background softly blurred: a farmhouse porch and fields. Warm light. No text, no letters, no logos.

## Telas compostas pelo Claude

- Quadro 3: `mobile-nova-cotacao-generico.png` na tela verde.
- Quadro 4: `mobile-nova-cotacao-generico.png` (tela pequena; aceitar perspectiva).
- Quadro 5: o Claude monta em HTML uma conversa de WhatsApp genérica (sem a marca do WhatsApp, só balão com ícone de PDF e o nome "Proposta Q-2026-0418.pdf") e compõe na tela.

## Lista de planos para a gravação real (Plano A)

1. Drone ou tripé: caminhonete chegando na porteira (5 s de sobra antes e depois).
2. Plano médio: consultor e produtor ao lado da máquina, conversa natural.
3. Close no celular com gravação de tela do MaqGest em paralelo (gravar a tela no próprio celular).
4. Consultor vira o celular para o produtor.
5. Celular do produtor recebe o PDF (usar um número de teste).

## Checklist de revisão

- [ ] Mesmo rosto e roupa do consultor nos quadros 2, 3 e 4.
- [ ] Máquinas e caminhonete sem logo.
- [ ] Prints compostos idênticos aos originais.
- [ ] Overlays fora da área ocupada pela interface do Reels.

## Legenda

> A proposta não precisa esperar você voltar para o escritório.
>
> Com o MaqGest no celular, o consultor monta a cotação na propriedade do cliente e envia o PDF na hora, enquanto o interesse está quente.
>
> Agende sua demonstração pelo link da bio.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #agro #consultoragricola #plantadeira #finame #vendasagro #orcamento #propostacomercial
