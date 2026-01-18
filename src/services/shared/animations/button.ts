import { Gesture } from "react-native-gesture-handler"
import { ReduceMotion, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"

export const useAnimationButtonTouch = (factor = 0.04) => {
  const valueTouch = useSharedValue(0)

  const gesture = Gesture.Pan()
    .onBegin(() => {
      valueTouch.value = withSpring(1, { stiffness: 700, damping: 30, mass: 2.5, reduceMotion: ReduceMotion.System })
    })
    .onFinalize(() => {
      valueTouch.value = withSpring(0, { stiffness: 700, damping: 30, mass: 2.5, reduceMotion: ReduceMotion.System })
    })

  const animation = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - valueTouch.value * factor }],
  }))

  return {
    animation,
    gesture,
  }
}
