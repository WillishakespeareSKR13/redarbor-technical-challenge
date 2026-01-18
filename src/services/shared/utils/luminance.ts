import { ThemeKeys } from "../theme/types"
import { HexToByte } from "./transform"

const RGBA_PATTERN = /rgba?\(([0-9]+),([0-9]+),([0-9]+)(?:,(1|0|0?\.[0-9]*))?\)/
export const LUMINANCE_DARK_THRESHOLD = 0.7
export const AA_THRESHOLD_CONTRAST = 4.5
export const AAA_THRESHOLD_CONTRAST = 7.0
export const AA_LARGE_SIZE_THRESHOLD_CONTRAST = 3.0
export const AAA_LARGE_SIZE_THRESHOLD_CONTRAST = 4.5

const CACHE = new Map()

const ColorLuminance = (color: string) => {
  const isInCache = CACHE.has(color)
  if (isInCache) return CACHE.get(color)
  const luminance = ColorLuminanceCalc(color)
  CACHE.set(color, luminance)
  return luminance
}

export const Contrast = (color: string, background: string) => {
  const la = ColorLuminance(color)
  const lb = ColorLuminance(background)
  const [l1, l2] = [la, lb].sort()
  return (l1 + 0.05) / (l2 + 0.05)
}

export const ContrastLight = (color: string) => Contrast(color, "#ffffff")
export const ContrastDark = (color: string) => Contrast(color, "#000000")

type InputCompare = { black?: string; white?: string }

export const HexaToHex = (color?: string) => {
  if (!color) return undefined
  if (color.length === 9) return color.slice(0, 7)
  if (color.length === 5) return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
  return color
}

export const ContrastCompare = (color?: string) => {
  if (!color) return false
  const hex = HexaToHex(color)
  if (!hex) return false
  const luminance = ColorLuminance(hex)
  const isDark = luminance < LUMINANCE_DARK_THRESHOLD
  return isDark
}

export const ContrastColor = (color?: string, opt?: InputCompare) => {
  const black = opt?.black ?? "#000000"
  const white = opt?.white ?? "#ffffff"
  return ContrastCompare(color) ? white : black
}

export const DarkerColor = (color?: string, factor = 0.1) => {
  if (!color) return undefined
  const rgb = color.replace(/ /g, "").match(RGBA_PATTERN)
  const r = rgb ? Number(rgb[1]) : HexToByte(color.slice(1, 3))
  const g = rgb ? Number(rgb[2]) : HexToByte(color.slice(3, 5))
  const b = rgb ? Number(rgb[3]) : HexToByte(color.slice(5, 7))
  const rDarker = Math.max(Math.min(Math.round(r * (1 - factor)), 255), 0)
  const gDarker = Math.max(Math.min(Math.round(g * (1 - factor)), 255), 0)
  const bDarker = Math.max(Math.min(Math.round(b * (1 - factor)), 255), 0)
  return `#${((1 << 24) + (rDarker << 16) + (gDarker << 8) + bDarker).toString(16).slice(1)}`
}

export const LighterColor = (color?: string, factor = 0.1) => {
  if (!color) return undefined
  const rgb = color.replace(/ /g, "").match(RGBA_PATTERN)
  const r = rgb ? Number(rgb[1]) : HexToByte(color.slice(1, 3))
  const g = rgb ? Number(rgb[2]) : HexToByte(color.slice(3, 5))
  const b = rgb ? Number(rgb[3]) : HexToByte(color.slice(5, 7))
  const rLighter = Math.max(Math.min(Math.round(r + (255 - r) * factor), 255), 0)
  const gLighter = Math.max(Math.min(Math.round(g + (255 - g) * factor), 255), 0)
  const bLighter = Math.max(Math.min(Math.round(b + (255 - b) * factor), 255), 0)
  return `#${((1 << 24) + (rLighter << 16) + (gLighter << 8) + bLighter).toString(16).slice(1)}`
}

export const DarkerLighterColor = (key?: ThemeKeys, color?: string, factor = 0.1) => {
  if (!key) return color
  const c = key.startsWith("light") ? DarkerColor(color, factor) : LighterColor(color, factor)
  return c
}

export const ColorLuminanceCalc = (color: string | number[]): number => {
  if (typeof color === "string") {
    if (color[0] === "#") {
      const rgb = color.slice(1)
      if (rgb.length === 3) {
        return ColorLuminanceCalc([HexToByte(rgb[0] + rgb[0]), HexToByte(rgb[1] + rgb[1]), HexToByte(rgb[2] + rgb[2])])
      }
      if (rgb.length === 8) {
        const alpha = HexToByte(rgb.slice(6, 8))
        if (alpha !== 255) {
          throw new NeedsAlphaBlending(color, alpha)
        }
      }
      if (rgb.length === 6 || rgb.length === 8) {
        return ColorLuminanceCalc([HexToByte(rgb.slice(0, 2)), HexToByte(rgb.slice(2, 4)), HexToByte(rgb.slice(4, 6))])
      }
      return ColorLuminanceCalc([0, 0, 0])
    }
    const matches = color.replace(/ /g, "").match(RGBA_PATTERN)
    if (matches) {
      if (matches[4] && matches[4] !== "1") {
        throw new NeedsAlphaBlending(color, Number(matches[4]))
      }
      return ColorLuminanceCalc([Number(matches[1]), Number(matches[2]), Number(matches[3])])
    }
    return ColorLuminanceCalc([0, 0, 0])
  }
  AssertRgbColor(color)
  return ComponentsToLuminance(color[0] / 255, color[1] / 255, color[2] / 255)
}

const ComponentsToLuminance = (r: number, g: number, b: number) => {
  const rl = r > 0.03928 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92
  const gl = g > 0.03928 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92
  const bl = b > 0.03928 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl
}

const AssertRgbColor = (color: number[]) => {
  if (color.length < 3 || color.length > 4 || color.some((d) => d < 0 || d > 255)) {
    throw new UnsupportedFormat(`[${color.join(", ")}]`)
  }
  if (color.length === 4 && color[3] !== 1) {
    throw new NeedsAlphaBlending(`[${color.join(", ")}]`, color[3])
  }
}

class UnsupportedFormat {
  constructor(color: string) {
    return `Expected color to be in a supported format, actual: ${color}. Supported formats for string input are: - #rgb - #rrggbb - #rrggbbFF - rgb(r, g, b) (0 <= rgb <= 255) - rgba(r, g, b, 1) (0 <= rgb <= 255) Supported formats for array input are: - [r, g, b] (0 <= rgb <= 255) - [r, g, b, 1] (0 <= rgb <= 255) Keyword/system colors are not supported (nor consistent across environments).`.trim()
  }
}

class NeedsAlphaBlending {
  constructor(color: string, alpha: number) {
    return `Expected a fully opaque color, actual: ${color}, with alpha: ${alpha}. Colors with that are (semi-)translucent need to be alpha-blended, which means that you need to know the background color(s) in order to calculate the color that will show on screen. The package use-alpha-blended-color has both a React hook as well as a general utility function to premultiply colors. import { useAlphaBlendedColor } from 'use-alpha-blended-color' const prepared = useAlphaBlendedColor(${color}, '#<background-color>') const luminance = useColorLuminance(prepared)`.trim()
  }
}

export const ColorTransparent = (color?: string, opacity?: number) => {
  const hex = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255)
  return `${color}${hex.toString(16)}` as `#${string}`
}
