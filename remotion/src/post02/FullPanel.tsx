// Painel em tela cheia abaixo da faixa de texto: "Do jeito antigo" ou "Com o MaqGest".
// Áreas seguras do Reels: topo 220 px e base 380 px sem elementos importantes.
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { color } from "../brand";

export const BAND_TOP = 220;
export const BAND_HEIGHT = 260;
export const PANEL_TOP = BAND_TOP + BAND_HEIGHT;

export type Side = "antigo" | "novo";

// Área segura do Reels dentro do painel: botões do Instagram à direita e legenda/perfil embaixo.
export const SAFE = { left: 60, right: 120, top: 110, bottom: 520 };

type Props = {
  side: Side;
  badge?: string | null;
  /** Vídeo de borda a borda: ignora as margens laterais da área segura (o assunto do vídeo está no centro). */
  bleed?: boolean;
  /** Frame (dentro do segmento) em que o selo aparece. */
  badgeFrom?: number;
  children: React.ReactNode;
};

export const FullPanel: React.FC<Props> = ({ side, badge, badgeFrom = 0, bleed = false, children }) => {
  const frame = useCurrentFrame();
  const antigo = side === "antigo";
  return (
    <AbsoluteFill style={{ backgroundColor: color.green950 }}>
      <div
        style={{
          position: "absolute",
          top: PANEL_TOP,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          backgroundColor: antigo ? color.green950 : color.green50,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: bleed ? 0 : SAFE.left,
            right: bleed ? 0 : SAFE.right,
            top: SAFE.top,
            bottom: SAFE.bottom,
            overflow: "hidden",
            borderRadius: bleed ? 0 : 14,
          }}
        >
          {children}
        </div>
        <Pill
          text={antigo ? "Do jeito antigo" : "Com o MaqGest"}
          bg={antigo ? color.white : color.green100}
          fg={antigo ? color.info : color.green800}
        />
        {badge && frame >= badgeFrom ? (
          <Badge text={badge} bg={antigo ? color.dangerSoft : color.green100} fg={antigo ? color.danger : color.green800} />
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

/** Caixa na área segura lateral, para prints com texto dentro de um painel `bleed`. */
export const SafeBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ position: "absolute", top: 0, bottom: 0, left: SAFE.left, right: SAFE.right, overflow: "hidden", borderRadius: 14 }}>
    {children}
  </div>
);

const Pill: React.FC<{ text: string; bg: string; fg: string }> = ({ text, bg, fg }) => (
  <div
    style={{
      position: "absolute",
      top: 32,
      left: SAFE.left,
      padding: "14px 30px",
      borderRadius: 999,
      backgroundColor: bg,
      color: fg,
      fontSize: 36,
      fontWeight: 600,
      boxShadow: "0 6px 16px rgba(31, 39, 35, 0.12)",
    }}
  >
    {text}
  </div>
);

// Fica acima da base de 380 px coberta pela interface do Reels.
const Badge: React.FC<{ text: string; bg: string; fg: string }> = ({ text, bg, fg }) => (
  <div
    style={{
      position: "absolute",
      bottom: 430,
      left: SAFE.left,
      padding: "16px 32px",
      borderRadius: 999,
      backgroundColor: bg,
      color: fg,
      fontSize: 40,
      fontWeight: 600,
      boxShadow: "0 6px 16px rgba(31, 39, 35, 0.12)",
    }}
  >
    {text}
  </div>
);
