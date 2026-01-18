import { Colors } from "./tokens/colors";
import { FontFamily } from "./tokens/font-family";
import { FontSizes } from "./tokens/font-sizes";
import { Radius } from "./tokens/radius";
import { Spaces } from "./tokens/spaces";
import { Strokes } from "./tokens/strokes";

export const themeBase = {
  colors: Colors,
  radius: Radius,
  spaces: Spaces,
  stroke: Strokes,
  fontSizes: FontSizes,
  fontFamily: FontFamily,
} as const;

export const themeDark = {
  ...themeBase,
  colors: {
    ...themeBase.colors,
    gray: Colors.gray_dark,
    foreground: Colors.light,
    background: Colors.dark,
  },
} as const;

export const themeLight = {
  ...themeBase,
  colors: {
    ...themeBase.colors,
    gray: Colors.gray_light,
    foreground: Colors.dark,
    background: Colors.light,
  },
} as const;

export const themes = {
  dark: themeDark,
  light: themeLight,
} as const;
