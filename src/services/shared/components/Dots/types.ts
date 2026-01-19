import { PropsColor, PropsSize, PropsSpace } from "../../types/props"
import { ViewProps } from "../View/types"

export type DotsProps = ViewProps & {
  dotSize?: number
  dots?: number
  duration?: number
} & PropsSpace &
  PropsSize &
  PropsColor
