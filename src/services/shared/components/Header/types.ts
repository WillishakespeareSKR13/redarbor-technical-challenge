import { FieldAtom, ValidateStatus } from "form-atoms"
import { DimensionValue, TextStyle } from "react-native"
import { SpaceSchema } from "../../theme/types"
import { ActionButtonProps } from "../ActionButton/types"
import { TextProps } from "../Text/types"
import { ViewProps } from "../View/types"

export type HeaderProps = ViewProps & {
  w?: DimensionValue
  gap?: SpaceSchema
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"

  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
  wrapperProps?: ViewProps
  headProps?: ViewProps
  titleProps?: TextProps
  subtitleProps?: TextProps
  error?: string
  errorProps?: TextProps
  field?: FieldAtom<any>

  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  status?: ValidateStatus
  withBack?: boolean
  onBack?: () => void
  backIcon?: React.ReactNode
  back?: React.ReactNode
  backProps?: ActionButtonProps
  top?: React.ReactNode
  middle?: React.ReactNode
  bottom?: React.ReactNode

  align?: TextStyle["alignItems"]
  justify?: TextStyle["justifyContent"]
  ta?: TextStyle["textAlign"]
}
