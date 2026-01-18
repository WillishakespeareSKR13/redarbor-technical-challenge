import { useEffect } from "react"
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export const useAnimationMain = () => {
  const animatedValue = useSharedValue(0)

  const animation = useAnimatedStyle(() => ({
    opacity: animatedValue.value,
  }))

  useEffect(() => {
    animatedValue.value = withTiming(1, { duration: 300 })
    return () => {
      animatedValue.value = withTiming(0, { duration: 150 })
    }
  }, [])

  return { animation }
}
