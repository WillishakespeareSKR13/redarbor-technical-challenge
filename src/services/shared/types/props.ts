import { DimensionValue, TextStyle, ViewStyle } from "react-native"
import { ColorScheme, FontFamilyKeys, FontSizeKeys, SpaceSchema } from "../theme/types"

export type PropsSpace = {
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
  flexGrow?: number
  flexShrink?: number
  flexBasis?: DimensionValue
  alignSelf?: ViewStyle["alignSelf"]
  justifyContent?: ViewStyle["justifyContent"]
  alignItems?: ViewStyle["alignItems"]
  alignContent?: ViewStyle["alignContent"]
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

export type PropsAll = PropsSpace & PropsSize & PropsFlex & PropsText & PropsColor
