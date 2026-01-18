import { themeDark, themeLight, themes } from "..";
import { Colors } from "../tokens/colors";
import { FontFamily } from "../tokens/font-family";
import { FontSizes } from "../tokens/font-sizes";
import { Radius } from "../tokens/radius";
import { Spaces } from "../tokens/spaces";
import { Strokes } from "../tokens/strokes";

export type ColorKeys = keyof typeof Colors;
export type ColorShades = keyof (typeof Colors)[ColorKeys];
export type ColorScheme =
  | ColorKeys
  | `${ColorKeys}.${ColorShades}`
  | `#${string}`
  | `rgb(${string})`
  | `rgba(${string})`
  | "transparent";

export type FontSizeKeys = keyof typeof FontSizes | number;

export type FontFamilyKeys = keyof typeof FontFamily;

export type SpaceKeys = keyof typeof Spaces;
export type SpaceSchema = `${SpaceKeys}` | number;

export type RadiusKeys = keyof typeof Radius;
export type RadiusSchema = RadiusKeys | number;

export type StrokeKeys = keyof typeof Strokes;

export type Theme = typeof themeLight | typeof themeDark;
export type ThemeKeys = keyof typeof themes;
