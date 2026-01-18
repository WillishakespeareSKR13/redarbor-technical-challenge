import { FieldAtom } from "form-atoms"
import type { TextInputProps } from "react-native"
import { HeaderProps } from "../Header/types"
import { ViewProps } from "../View/types"

export type InputTextProps = TextInputProps & {
  title?: HeaderProps["title"]
  subtitle?: HeaderProps["subtitle"]
  headerProps?: HeaderProps
  field?: FieldAtom<any>
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
  leftSectionProps?: ViewProps
  rightSectionProps?: ViewProps
  sectionProps?: ViewProps
  containerProps?: ViewProps
  separator?: boolean
  status?: "validating" | "valid" | "invalid"
}
