import { Text, TouchableHighlight } from "react-native"
import { CloneElement } from "../../utils/components"
import { View } from "../View"
import { Styles } from "./styles"
import { BadgeProps } from "./types"

export const Badge = (props: BadgeProps) => {
  const {
    show = true,
    isLoading,
    label,
    spinnerProps,
    textProps,
    leftSection,
    rightSection,
    onPress,
    disabled,
    icon,
    iconPosition = "right",
    iconSize,
    ...rest
  } = props

  const styles = Styles(props)

  if (!show) return null

  return (
    <TouchableHighlight
      {...rest}
      style={[styles.badge, rest.style]}
      disabled={isLoading || disabled}
      underlayColor={styles.underlay.color}
      onPress={isLoading || disabled ? undefined : onPress}
    >
      <View w="auto" direction="row">
        {leftSection}
        {icon &&
          iconPosition === "left" &&
          CloneElement(icon, {
            size: iconSize ?? styles.icon.width,
            color: styles.icon.color,
          })}
        {label && (
          <Text numberOfLines={1} {...textProps} style={[styles.text, textProps?.style]}>
            {label}
          </Text>
        )}
        {icon &&
          iconPosition === "right" &&
          CloneElement(icon, {
            size: iconSize ?? styles.icon.width,
            color: styles.icon.color,
          })}
        {rightSection}
      </View>
    </TouchableHighlight>
  )
}
