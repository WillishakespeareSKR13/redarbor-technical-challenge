import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useTheme } from "../../hooks/theme"
import { GetColorTheme } from "../../utils/theme"
import { Text } from "../Text"
import { View } from "../View"
import { TagProps } from "./types"

export const Tag = (props: TagProps) => {
  const { color, label, icon, textProps, shrink, iconPosition = "left", ...rest } = props
  const { theme } = useTheme()

  const c = (GetColorTheme(theme, color) ?? theme.colors.gray[600]) as `#${string}`

  return (
    <View w="auto" direction="row" align="center" gap="xs" shrink={shrink ?? 1} {...rest}>
      {icon && iconPosition === "left" && <FontAwesome6 name={icon} size={12} solid color={c} />}
      <Text fz="body2" c={c} numberOfLines={1} shrink={shrink ?? 1} {...textProps}>
        {label}
      </Text>
      {icon && iconPosition === "right" && <FontAwesome6 name={icon} size={12} solid color={c} />}
    </View>
  )
}
