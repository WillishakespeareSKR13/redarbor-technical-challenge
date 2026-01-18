import { FieldAtom, ValidateStatus } from "form-atoms"
import { ActivityIndicatorProps } from "react-native"
import { TextProps } from "../Text/types"

export type ErrorProps = TextProps & {
  field?: FieldAtom<any>
  status?: ValidateStatus
  activityIndicatorProps?: ActivityIndicatorProps
}
