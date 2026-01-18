import { ActivityIndicatorProps, TextProps, TouchableHighlightProps } from "react-native"
import { PropsColor, PropsFlex, PropsSize, PropsSpace, PropsText } from "../../types/props"

type PropsAddicional = PropsSpace & PropsSize & PropsFlex & PropsColor & PropsText

export type ButtonProps = TouchableHighlightProps & {
  fullWidth?: boolean
  variant?: "filled" | "outline" | "light" | "link"
  isLoading?: boolean
  spinnerProps?: ActivityIndicatorProps
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
  textProps?: TextProps
} & PropsAddicional
