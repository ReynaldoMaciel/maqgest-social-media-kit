# Post 1 · Prazer, MaqGest

| Data | Formato | Pilar | Tamanho |
| --- | --- | --- | --- |
| Seg 23/11/2026 | Carrossel, 7 telas | Conversão | 1080 × 1350 |

**Objetivo:** apresentar a marca para quem chega ao perfil. É o post fixado no topo, então precisa funcionar sozinho e envelhecer bem.

**Também define a base visual do projeto:** o `_base/base.css` e os mockups de dispositivo criados aqui são reaproveitados nos posts 6, 9 e 12.

## Divisão de trabalho

| Quem | O que faz |
| --- | --- |
| Claude | Cria o `_base/` (tokens, fonte, modelo de slide), escreve e monta as 7 telas, compõe os prints reais nos mockups e renderiza os PNGs |
| Nano Banana | 2 imagens: notebook e celular sobre uma mesa (capa) e o celular sozinho na mão (tela 6) |
| Equipe | Revisar e fixar o post no topo |

## Telas

| # | Texto | Visual | Fonte da imagem |
| --- | --- | --- | --- |
| 1 | **Orçamento em minutos, onde você estiver.** | Fundo `green-950`, "onde você estiver." em Young Green. Mockup de notebook com `hero-dashboard-generico` e celular com `mobile-dashboard-generico` na metade inferior. Logo branco no topo | Nano Banana (mockup) + prints reais |
| 2 | Para quem vende: **Trator, Implementos, Peças, Pneus, Linha amarela.** | Fundo branco. Lista com 5 ícones Lucide em círculos `green-100` (`tractor`, `package`, `cog`, `disc-3`, `hard-hat`) | Sem imagem (ícones) |
| 3 | Catálogo, clientes e cotações **no mesmo lugar.** | Recorte de `passo-2-produtos-generico` mostrando os cards de máquina selecionados e o resumo | Print real |
| 4 | A proposta sai em PDF, com o seu timbre e a assinatura do vendedor. | `cotacao-pagina-1-anonimizada` inteira, levemente inclinada, com `shadow-lg` | Print real |
| 5 | Máquina importada com benefício fiscal? **O termo vem sozinho.** | `cotacao-pagina-2-anonimizada` atrás e deslocada da página 1, as duas como pilha de folhas | Print real |
| 6 | Funciona no computador **e no celular.** | Mão limpa segurando o celular com `mobile-nova-cotacao-generico` na tela, escritório da revenda desfocado ao fundo (refazer: a versão atual tem mão suja e fundo de lavoura) | Nano Banana (mockup) + print real |
| 7 | **Agende uma demonstração.** Montamos uma proposta com você, do cliente ao PDF. | Fundo Emerald Fall (`slide--brand`). Botão branco com texto verde "Chamar no WhatsApp", linha "Link na bio" abaixo, logo branco | Sem imagem |

## Prompts do Nano Banana

**`imagens/mockup-notebook-celular.png`** · `--pro --size 2K --aspect 4:5`

> A clean, modern product photograph of an open silver laptop and a smartphone lying next to it on a light oak wooden desk, shot from the front at a slight high angle. Both screens are turned straight toward the camera and display a perfectly flat, solid pure green color (#00FF00) with no reflections, glare or icons. Soft natural daylight from a window on the left, gentle shadows. The upper third of the frame is empty, plain deep dark green wall (#0A3D16) to leave room for a headline. Minimal composition, no other objects, no text, no letters, no logos.

**`imagens/mockup-celular-mao.png`** · `--pro --size 2K --aspect 4:5`

> A close-up photograph of a man's clean, well-groomed hand holding a modern smartphone upright, screen facing the camera straight on. The phone screen is a perfectly flat, solid pure green (#00FF00) with no reflections or icons. Background is the softly blurred interior of a bright, modern agricultural machinery dealership office: a desk with a laptop, a large window, and a red tractor visible out of focus on the showroom floor. Shallow depth of field, natural daylight, realistic skin texture. The phone fills about half of the frame height and sits in the lower center. No text, no letters, no logos, no watches or rings.

Composição (Método A do README): o Claude lê a imagem, mede a área verde e posiciona o print por cima em HTML, com `border-radius` igual ao da tela e `transform` se houver perspectiva.

## Passos

1. Criar `_base/base.css` e `_base/slide.html` a partir do `tokens.json` e das fontes em `assets/fonts/`.
2. Gerar os dois mockups no Flash, escolher, refazer no Pro.
3. Montar as 7 telas em `slides/01.html` a `slides/07.html`.
4. Renderizar em `export/` e revisar uma por uma.
5. Salvar `legenda.txt`.

## Checklist de revisão

- [ ] Os prints nas telas são idênticos aos originais (nenhum número inventado).
- [ ] Nenhum texto nas imagens geradas.
- [ ] Título da capa legível na miniatura da grade (testar em 360 px de largura).
- [ ] Logo do manual: verde no fundo claro, branco no escuro.
- [ ] Contador `n/7` em todas as telas, menos na capa.

## Legenda

> Sua venda não pode depender de planilha e Word.
>
> O MaqGest junta catálogo, clientes e cotações num lugar só. Você escolhe o cliente, inclui as máquinas, define as condições e a proposta sai pronta em PDF, com NCM, GECEX e termo de benefício fiscal.
>
> No escritório, no pátio ou na rua, direto do celular.
>
> Quer ver uma cotação sair pronta com as máquinas que você vende? Chame no WhatsApp pelo link da bio e agende sua demonstração.

**Hashtags:** #MaqGest #maquinasagricolas #agronegocio #agro #concessionaria #revendaagricola #vendasagro #gestaocomercial #orcamento #propostacomercial
