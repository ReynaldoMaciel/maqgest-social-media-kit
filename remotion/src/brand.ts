// Marca MaqGest (manual 2026 + design-system/tokens.json)
import { staticFile } from "remotion";

export const color = {
  emerald: "#108652", // Emerald Fall · primária
  black: "#000000", // Pure Black · primária
  youngGreen: "#97DF67", // Young Green · só sobre fundo escuro
  white: "#FFFFFF",
  green950: "#0A3D27",
  green800: "#0C6941",
  green100: "#E3F3EC",
  green50: "#F2F9F6",
  ink: "#1F2723",
  inkMuted: "#5C6762",
  onDarkMuted: "#B4D3C2",
  line: "#E2E7E4",
  info: "#5C6762",
  infoSoft: "#EEF1EF",
  danger: "#B42318",
  dangerSoft: "#FDE8E6",
};

export const font = {
  display: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  sans: '"Be Vietnam Pro", "Segoe UI", system-ui, sans-serif',
};

export const logo = {
  branca: staticFile("brand/maqgest-logo-branca.svg"),
  verde: staticFile("brand/maqgest-logo-verde.svg"),
  icone: staticFile("brand/maqgest-icone-branca.svg"),
};

export const screenshot = (name: string) => staticFile(`screenshots/${name}`);

// Carrega a Be Vietnam Pro de public/fonts
const weights = [400, 500, 600, 700, 800];
export const fontFaceCss = weights
  .map(
    (w) =>
      `@font-face{font-family:"Be Vietnam Pro";src:url(${staticFile(
        `fonts/BeVietnamPro-${w}.woff2`,
      )}) format("woff2");font-weight:${w};}`,
  )
  .join("\n");
