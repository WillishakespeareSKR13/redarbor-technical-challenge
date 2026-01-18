import type { ViewProps as RNViewProps } from "react-native"
import type { AnimatedProps } from "react-native-reanimated"
import { PropsColor, PropsFlex, PropsSize, PropsSpace } from "../../types/props"

type PropsAddicional = PropsSpace & PropsSize & PropsFlex & PropsColor

export type ViewProps = Omit<AnimatedProps<RNViewProps>, "children"> & {
  children?: React.ReactNode
} & PropsAddicional
