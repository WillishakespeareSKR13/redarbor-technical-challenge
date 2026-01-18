import { ActivityIndicator, Text, TouchableHighlight } from "react-native"
import { GestureDetector } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { useAnimationButtonTouch } from "../../animations/button"
import { CloneElement } from "../../utils/components"
import { Conditional } from "../Conditional"
import { Styles } from "./styles"
import { ButtonProps } from "./types"

export const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight)

export const Button = (props: ButtonProps) => {
  const { isLoading, children, spinnerProps, textProps, leftSection, rightSection, onPress, disabled, ...rest } = props

  const animatedTouch = useAnimationButtonTouch()
  const styles = Styles(props)

  return (
    <GestureDetector gesture={animatedTouch.gesture}>
      <AnimatedTouchableHighlight
        {...rest}
        style={[styles.button, rest.style, animatedTouch.animation]}
        disabled={isLoading || disabled}
        underlayColor={styles.underlay.color}
        onPress={isLoading || disabled ? undefined : onPress}
      >
        <Conditional conditional={isLoading}>
          <ActivityIndicator
            size="small"
            color={styles.spinner.color}
            {...spinnerProps}
            style={[spinnerProps?.style]}
          />
          <>
            {leftSection &&
              CloneElement(leftSection, {
                color: styles.text.color,
              })}
            <Text {...textProps} style={[styles.text, textProps?.style]}>
              {children}
            </Text>
            {rightSection &&
              CloneElement(rightSection, {
                color: styles.text.color,
              })}
          </>
        </Conditional>
      </AnimatedTouchableHighlight>
    </GestureDetector>
  )
}
