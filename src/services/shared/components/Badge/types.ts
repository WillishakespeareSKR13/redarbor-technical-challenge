import { ActivityIndicatorProps, TextProps, TouchableHighlightProps } from "react-native"
import { PropsColor, PropsFlex, PropsSize, PropsSpace, PropsText } from "../../types/props"

type PropsAddicional = PropsSpace & PropsSize & PropsFlex & PropsColor & PropsText

export type BadgeProps = Omit<TouchableHighlightProps, "children"> & {
  show?: boolean
  fullWidth?: boolean
  variant?: "filled" | "outline" | "light" | "subtle"
  isLoading?: boolean
  spinnerProps?: ActivityIndicatorProps
  textProps?: TextProps
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
  label?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  iconSize?: number
} & PropsAddicional
