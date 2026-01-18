import { StatusBar } from "expo-status-bar"
import { KeyboardAvoidingView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAnimationMain } from "../../animations/main"
import { useBehavior } from "../../hooks/behavior"
import { useTheme } from "../../hooks/theme"
import { ContrastCompare } from "../../utils/luminance"
import { GetColorTheme } from "../../utils/theme"
import { SafeArea } from "../SafeArea"
import { View } from "../View"
import { Styles } from "./styles"
import { MainProps } from "./types"

export const Main = (props: MainProps) => {
  const { children, header, footer, background, headerBG, headerBGSize, footerBG, footerBGSize, edges, ...rest } = props
  const { theme } = useTheme()
  const insets = useSafeAreaInsets()
  const behaviour = useBehavior()
  const { animation } = useAnimationMain()

  const color = GetColorTheme(theme, headerBG ?? rest.bg) ?? theme.colors.background[100]
  const isDark = ContrastCompare(color)
  const statusBarStyle = isDark ? "light" : "dark"

  const styles = Styles(props)

  return (
    <View style={[styles.container, rest.style]}>
      <KeyboardAvoidingView behavior={behaviour} style={[styles.keyboard]}>
        {background}
        <StatusBar style={statusBarStyle} />
        {header && <View h={headerBGSize ?? insets.top} style={[styles.background_header]} />}
        <SafeArea style={[styles.safeArea]} edges={edges}>
          {header}
          {children && <View style={[styles.content, animation]}>{children}</View>}
          {footer}
        </SafeArea>
        {footer && <View h={footerBGSize ?? insets.bottom} style={[styles.background_footer]} />}
      </KeyboardAvoidingView>
    </View>
  )
}
