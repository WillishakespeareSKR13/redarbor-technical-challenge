import { ColorScheme } from "../../theme/types"
import { TextProps } from "../Text/types"
import { ViewProps } from "../View/types"

export type TagProps = ViewProps & {
  color?: ColorScheme
  label: string
  icon?: string
  textProps?: TextProps
  iconPosition?: "left" | "right"
}
