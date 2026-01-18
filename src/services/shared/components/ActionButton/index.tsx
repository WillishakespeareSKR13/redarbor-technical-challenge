import { GestureDetector } from "react-native-gesture-handler"
import { useAnimationButtonTouch } from "../../animations/button"
import { CloneElement } from "../../utils/components"
import { AnimatedTouchableHighlight } from "../Button"
import { View } from "../View"
import { Styles } from "./styles"
import { ActionButtonProps } from "./types"

export const ActionButton = (props: ActionButtonProps) => {
  const { children, header, footer, icon, ...rest } = props

  const animatedTouch = useAnimationButtonTouch(0.08)

  const styles = Styles(props)

  return (
    <View style={styles.container}>
      {header}
      <GestureDetector gesture={animatedTouch.gesture}>
        <AnimatedTouchableHighlight
          underlayColor={styles.underlay.color}
          {...rest}
          style={[styles.action, rest.style, animatedTouch.animation]}
        >
          {CloneElement(icon, {
            size: styles.icon.width,
            color: styles.icon.color,
          })}
        </AnimatedTouchableHighlight>
      </GestureDetector>
      {children}
      {footer}
    </View>
  )
}
