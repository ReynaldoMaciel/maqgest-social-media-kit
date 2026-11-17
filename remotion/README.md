# Remotion · Reels da MaqGest

Projeto Remotion 4.0.544 (React 18, TypeScript) para editar os Reels dos 12 primeiros posts.

```bash
npm run dev            # abre o Remotion Studio no navegador
npm run render:post02  # gera out/post02-reels.mp4
```

## Estrutura

- `src/Root.tsx`: registra as composições (cada Reels é uma, 1080 × 1920, 30 fps).
- `src/brand.ts`: cores, fontes e logos do manual da marca, iguais aos de `instagram-posts/12-primeiros-posts/_base/base.css`.
- `src/post02/`: Reels do post 2, "Planilha e Word x MaqGest". Cada cena mostra primeiro "Do jeito antigo" em tela cheia (vídeo do vendedor) e, com uma transição `slide` vinda da direita (0,8 s), "Com o MaqGest" também em tela cheia. A faixa de texto do topo fica fixa e só troca quando muda a cena. Os segmentos (trecho do vídeo, print, selo e duração) ficam na lista `segments` de `Post02Reels.tsx`; o painel está em `FullPanel.tsx`. O lado "Com o MaqGest" usa prints como provisório até a gravação de tela.
- `public/`: arquivos acessados com `staticFile()`. Já tem a Be Vietnam Pro, os logos e os prints genéricos/anonimizados. Coloque aqui as gravações de tela (`public/gravacoes/`) e as imagens do Nano Banana (`public/imagens/`).

## Área segura do Reels

Todo conteúdo do painel (vídeo, print, selo) fica dentro de `SAFE` em `src/post02/FullPanel.tsx`: 60 px de margem à esquerda, 120 px à direita (coluna de botões do Instagram) e nada nos últimos 420 px da tela (legenda e perfil). Os vídeos entram inteiros, sem zoom (`objectFit: "contain"`), e ocupam 100% da largura (segmentos com `bleed: true`), porque o assunto deles está no centro. Prints com texto continuam dentro das margens laterais (`SafeBox`).

## Como trocar o conteúdo de um segmento

Em `segments`, troque o `content` do segmento, por exemplo pela gravação de tela:

```tsx
content: <OffthreadVideo src={staticFile("gravacoes/busca-cpf.mp4")} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
```

Outras transições prontas em `@remotion/transitions`: `slide`, `wipe`, `flip`, `clockWipe`.

## Observações

- A Helvetica Now Display (títulos) é paga e não está instalada; os títulos usam Helvetica Neue até o arquivo da fonte ser adicionado em `public/fonts/` e declarado em `src/brand.ts`.
- O npm deixou o script de pós-instalação do esbuild sem aprovação; não é necessário, o binário do esbuild já funciona.
