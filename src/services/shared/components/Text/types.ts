import { TextProps as RNTextProps, StyleProp, TextStyle } from "react-native"
import { AnimatedProps } from "react-native-reanimated"
import { PropsColor, PropsFlex, PropsSize, PropsSpace, PropsText } from "../../types/props"

type PropsAddicional = PropsSpace & PropsSize & PropsFlex & PropsText & PropsColor

export type TextProps = Omit<AnimatedProps<RNTextProps>, "style" | "children"> & {
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
} & PropsAddicional
