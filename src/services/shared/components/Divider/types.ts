import { ViewProps } from "../View/types"

export type DividerProps = Omit<ViewProps, "children"> & {
  orientation?: "horizontal" | "vertical"
}
