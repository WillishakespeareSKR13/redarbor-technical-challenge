import { TextProps as RNTextProps, StyleProp, TextStyle } from "react-native"
import { AnimatedProps } from "react-native-reanimated"
import { PropsAll } from "../../types/props"

export type TextProps = Omit<AnimatedProps<RNTextProps>, "style" | "children"> & {
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
} & PropsAll
