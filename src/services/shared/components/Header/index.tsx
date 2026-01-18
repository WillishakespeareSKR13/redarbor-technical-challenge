import Feather from "@expo/vector-icons/Feather"
import { useRouter } from "expo-router"
import { useTheme } from "../../hooks/theme"
import { ContrastColor, DarkerLighterColor } from "../../utils/luminance"
import { GetColorTheme } from "../../utils/theme"
import { ActionButton } from "../ActionButton"
import { Error } from "../Error"
import { Text } from "../Text"
import { View } from "../View"
import { Styles } from "./styles"
import { HeaderProps } from "./types"

export const Header = (props: HeaderProps) => {
  const {
    children,
    header,
    footer,
    leftSection,
    rightSection,
    title,
    subtitle,
    wrapperProps,
    headProps,
    titleProps,
    subtitleProps,
    error,
    errorProps,
    field,
    withBack,
    back,
    top,
    middle,
    bottom,
    ...rest
  } = props

  const hasTitle = Boolean(title)
  const hasSubtitle = Boolean(subtitle)
  const hasHead = hasTitle || hasSubtitle || Boolean(top) || Boolean(middle) || Boolean(bottom)
  const hasTop = hasHead || withBack || Boolean(leftSection) || Boolean(rightSection)
  const hasHeader = Boolean(header) || hasTop || Boolean(children)
  const hasError = Boolean(error) || Boolean(field)

  const styles = Styles(props)

  if (!hasHeader && !hasError && !footer && !children) return null

  return (
    <View {...rest} style={[styles.container, rest.style]}>
      {header}
      {hasTop && (
        <View {...wrapperProps} style={[styles.wrapper, wrapperProps?.style]}>
          {leftSection}
          <HeaderBack {...props} />
          {hasHead && (
            <View {...headProps} style={[styles.head, headProps?.style]}>
              {top}
              {hasTitle && (
                <Text {...titleProps} style={[styles.title, titleProps?.style]}>
                  {title}
                </Text>
              )}
              {middle}
              {hasSubtitle && (
                <Text c="gray.600" {...subtitleProps} style={[styles.subtitle, subtitleProps?.style]}>
                  {subtitle}
                </Text>
              )}
              {bottom}
            </View>
          )}
          {rightSection}
        </View>
      )}
      {children}
      {hasError && (
        <Error
          field={field}
          style={styles.error}
          activityIndicatorProps={{
            style: styles.validating,
            size: styles.validating.fontSize,
            color: styles.validating.color,
          }}
          {...errorProps}
        >
          {error}
        </Error>
      )}
      {footer}
    </View>
  )
}

const HeaderBack = (props: HeaderProps) => {
  const { withBack, back, onBack, backIcon, backProps } = props
  const router = useRouter()
  const canBack = router.canGoBack()
  const { theme, key } = useTheme()

  const bg = DarkerLighterColor(
    key,
    GetColorTheme(theme, props.bg) ?? theme.colors.background[100],
    0.05
  ) as `#${string}`
  const c = ContrastColor(bg)

  if (!withBack) return null
  if (!canBack && !onBack) return null
  if (back) return back

  return (
    <ActionButton
      c={bg}
      size={38}
      icon={backIcon ?? <Feather name="arrow-left" size={18} color={c} />}
      onPress={onBack ?? router.back}
      {...backProps}
    />
  )
}
