import { useIsFocused } from "@react-navigation/native"
import { useEffect } from "react"
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export const useAnimationMain = () => {
  const isFocused = useIsFocused()
  const animatedValue = useSharedValue(0)

  const animation = useAnimatedStyle(() => ({
    opacity: animatedValue.value,
  }))

  useEffect(() => {
    animatedValue.value = withTiming(isFocused ? 1 : 0, { duration: 300 })
  }, [isFocused])

  return { animation }
}
