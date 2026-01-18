import { ViewProps } from "../View/types"

export type SafeAreaEdges = ("top" | "bottom" | "left" | "right")[]

export type SafeAreaProps = ViewProps & {
  edges?: SafeAreaEdges
}
