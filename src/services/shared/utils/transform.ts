import { RGB } from "../types/color"
import { NumberOrPercentage } from "../types/transform"
import { MapRange } from "./map"

export const NPNumber = (percentage?: NumberOrPercentage) => {
  if (typeof percentage === "string" && percentage.endsWith("%")) {
    const num = parseFloat(percentage.slice(0, -1))
    return num / 100
  }
  if (typeof percentage === "number") {
    return percentage
  }
  return 0
}

export const HexToByte = (hex: string) => parseInt(hex, 16)

export const HexToRGB = (hex = "#ffffff") => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
    hex.replace(shorthandRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a ? a + a : "")
    })
  ) ?? ["", "0", "0", "0"]

  return {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
  } as RGB
}

export const NumberWithZero = (num: number, base = 10) => {
  const str = num.toString(base)
  if (str.length === 1) return `0${str}`
  return str
}

export const RGBToHex = (rgb: RGB) => {
  const { r, g, b } = rgb
  const red = Math.round(r * 255)
  const green = Math.round(g * 255)
  const blue = Math.round(b * 255)
  const redHex = NumberWithZero(red, 16)
  const greenHex = NumberWithZero(green, 16)
  const blueHex = NumberWithZero(blue, 16)
  return `#${redHex}${greenHex}${blueHex}`
}

export const StringRGBToRGB = (rgb = "rgb(255, 255, 255)") => {
  const result = rgb.match(/\d+/g) ?? ["0", "0", "0"]
  return {
    r: parseInt(result[0], 10) / 255,
    g: parseInt(result[1], 10) / 255,
    b: parseInt(result[2], 10) / 255,
  }
}

export const HexToHSL = (hex = "#ffffff") => {
  const { r, g, b } = HexToRGB(hex)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const d = max - min
  let h = 0
  let s = 0

  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

type HSL = { h: number; s: number; l: number }

export const HSLToHex = (HSL: HSL) => {
  const { h, s, l } = HSL
  const hue = h / 360
  const sat = s / 100
  const lum = l / 100
  let r = lum
  let g = lum
  let b = lum

  if (sat !== 0) {
    const t2 = lum < 0.5 ? lum * (1 + sat) : lum + sat - lum * sat
    const t1 = 2 * lum - t2
    const t3 = [hue + 1 / 3, hue, hue - 1 / 3]
    ;[r, g, b] = t3.map((t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return t1 + (t2 - t1) * 6 * t
      if (t < 1 / 2) return t2
      if (t < 2 / 3) return t1 + (t2 - t1) * (2 / 3 - t) * 6
      return t1
    })
  }

  return RGBToHex({ r, g, b })
}

export const Opacity = (hex?: string, alpha = 0.5) => {
  if (!hex) return hex
  const isHex = /^#([0-9A-F]{3}){1,2}$/i.test(hex)
  const isRGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.test(hex)
  if (!isHex && !isRGB) return hex
  const color = isHex ? hex : RGBToHex(StringRGBToRGB(hex))

  const value = Math.min(Math.max(0, alpha * 100), 100)
  const hexAlpha = Math.round(value * 2.55).toString(16)
  return color + hexAlpha
}

export const Brightness = (hex?: string, alpha = 0) => {
  if (!hex) return hex
  const isHex = /^#([0-9A-F]{3}){1,2}$/i.test(hex)
  const isRGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.test(hex)
  if (!isHex && !isRGB) return hex
  const color = isHex ? hex : RGBToHex(StringRGBToRGB(hex))
  const { h, s, l } = HexToHSL(color)

  const same = alpha === 0
  const moreBright = alpha > 0
  const moreDark = alpha < 0

  if (same) return color
  if (moreBright) {
    const newL = MapRange(alpha, 0, 1, l, 100)
    return HSLToHex({ h, s, l: newL })
  }
  if (moreDark) {
    const newL = MapRange(alpha, -1, 0, 0, l)
    return HSLToHex({ h, s, l: newL })
  }
  return color
}

export const CT = Object.assign(
  {},
  {
    HexToRGB,
    RGBToHex,
    StringRGBToRGB,
    HexToHSL,
    HSLToHex,
    Opacity,
    Brightness,
  }
)
