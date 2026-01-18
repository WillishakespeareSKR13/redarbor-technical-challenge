import { Href } from "expo-router"
import { TouchableHighlightProps } from "react-native"
import { PropsColor, PropsSpace } from "../../types/props"

type PropsAddicional = PropsSpace & PropsColor

export type ActionButtonProps = TouchableHighlightProps & {
  icon?: React.ReactNode
  size?: number
  variant?: "filled" | "outline" | "light" | "ghost"
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  href?: Href
} & PropsAddicional
