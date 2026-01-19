import { DimensionValue, TextStyle, ViewStyle } from "react-native"
import { ColorScheme, FontFamilyKeys, FontSizeKeys, RadiusSchema, SpaceSchema } from "../theme/types"

export type PropsSpace = {
  r?: RadiusSchema
  p?: SpaceSchema
  pt?: SpaceSchema
  pb?: SpaceSchema
  pl?: SpaceSchema
  pr?: SpaceSchema
  px?: SpaceSchema
  py?: SpaceSchema
  m?: SpaceSchema
  mt?: SpaceSchema
  mb?: SpaceSchema
  ml?: SpaceSchema
  mr?: SpaceSchema
  mx?: SpaceSchema
  my?: SpaceSchema
  gap?: SpaceSchema
}

export type PropsSize = {
  w?: DimensionValue
  miw?: DimensionValue
  maw?: DimensionValue
  h?: DimensionValue
  mih?: DimensionValue
  mah?: DimensionValue
}

export type PropsFlex = {
  flex?: number
  grow?: number
  shrink?: number
  overflow?: ViewStyle["overflow"]
  basis?: DimensionValue
  self?: ViewStyle["alignSelf"]
  justify?: ViewStyle["justifyContent"]
  align?: ViewStyle["alignItems"]
  content?: ViewStyle["alignContent"]
  direction?: ViewStyle["flexDirection"]
  wrap?: ViewStyle["flexWrap"]
}

export type PropsText = {
  ta?: TextStyle["textAlign"]
  ff?: FontFamilyKeys
  fw?: TextStyle["fontWeight"]
  lh?: TextStyle["lineHeight"]
  fz?: FontSizeKeys
}

export type PropsColor = {
  c?: ColorScheme
  bg?: ColorScheme
}
