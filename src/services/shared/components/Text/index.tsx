import Animated from "react-native-reanimated"

import { Styles } from "./styles"
import { TextProps } from "./types"

export const Text = (props: TextProps) => {
  const { children, ...rest } = props
  const styles = Styles(props)
  return (
    <Animated.Text {...rest} style={[styles.text, rest.style]}>
      {children}
    </Animated.Text>
  )
}
