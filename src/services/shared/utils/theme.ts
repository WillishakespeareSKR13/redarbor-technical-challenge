import { ColorScheme, FontSizeKeys, RadiusSchema, SpaceSchema, Theme } from "../theme/types"
import { get } from "./lodash"

export const GetColorTheme = (theme: Theme, color?: ColorScheme) => {
  if (color === "transparent") return "transparent"
  if (color === undefined) return undefined
  const isHexOrHexRGB = /^#([0-9A-F]{3}){1,2}$/i.test(color) || /^#([0-9A-F]{8})$/i.test(color)
  if (isHexOrHexRGB) return color
  const color_get = get(theme.colors as any, color)
  const color_find = color_get ? (typeof color_get === "string" ? color_get : color_get[300]) : undefined
  const color_found = (color_find ?? theme.colors.foreground[100]) as string
  return color_found
}

export const GetFontSizeTheme = (theme: Theme, size?: FontSizeKeys) => {
  if (size === undefined) return undefined
  if (typeof size === "number") return size
  const size_get = get(theme.fontSizes as any, size)
  const size_found = (size_get ?? theme.fontSizes.body1) as number
  return size_found
}

export const GetFontFamilyTheme = (theme: Theme, family?: keyof typeof theme.fontFamily) => {
  if (family === undefined) return undefined
  const family_get = get(theme.fontFamily as any, family)
  const family_found = (family_get ?? theme.fontFamily.regular) as string
  return family_found
}

export const GetSpaceTheme = (theme: Theme, size?: SpaceSchema) => {
  if (size === undefined) return undefined
  const size_get = typeof size === "number" ? size : get(theme.spaces as any, size)
  const size_found = (size_get ?? theme.spaces.md) as number
  return size_found
}

export const GetRadiusTheme = (theme: Theme, radius?: RadiusSchema) => {
  if (radius === undefined) return undefined
  const radius_get = get(theme.radius as any, `${radius}`)
  const radius_found = (radius_get ?? theme.radius.md) as number
  return radius_found
}
