import { ActivityIndicator } from "react-native"
import { FadeInUp, FadeOutUp } from "react-native-reanimated"
import { useFieldError } from "../../utils/field"
import { Text } from "../Text"
import { Styles } from "./styles"
import { ErrorProps } from "./types"

export const Error = (props: ErrorProps) => {
  const { field, children, style, activityIndicatorProps, ...rest } = props
  const { errors, state } = useFieldError(field)
  const isValidating = state.validateStatus === "validating"
  const message = children ?? errors?.[0]

  const styles = Styles({ status: state.validateStatus })

  if (state.validateStatus === "valid") return null

  return (
    <Text
      entering={FadeInUp.mass(0.5).stiffness(900).damping(20).duration(200)}
      exiting={FadeOutUp.mass(0.5).stiffness(900).damping(20).duration(200)}
      {...rest}
      style={[styles.error, style]}
    >
      {isValidating && <ActivityIndicator size={14} color={styles.validating.color} {...activityIndicatorProps} />}
      {isValidating ? "Validando..." : message}
    </Text>
  )
}
