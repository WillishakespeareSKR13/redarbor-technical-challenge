import Animated from "react-native-reanimated"

import { Styles } from "./styles"
import { ViewProps } from "./types"

export const View = (props: ViewProps) => {
  const { children, style, ...rest } = props

  const styles = Styles(props)

  return (
    <Animated.View {...rest} style={[styles.view, style]}>
      {children}
    </Animated.View>
  )
}
