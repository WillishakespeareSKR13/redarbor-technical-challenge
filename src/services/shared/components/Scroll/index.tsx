import { ScrollView } from "react-native"
import Animated from "react-native-reanimated"
import { Styles } from "./styles"
import { ScrollProps } from "./types"

export const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export const Scroll = (props: ScrollProps) => {
  const { children, style, contentContainerStyle, ...rest } = props
  const styles = Styles(props)
  return (
    <AnimatedScrollView
      {...rest}
      style={[styles.scroll, style]}
      contentContainerStyle={[styles.container, contentContainerStyle]}
    >
      {children}
    </AnimatedScrollView>
  )
}
