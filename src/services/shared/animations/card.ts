import { useIsFocused } from "@react-navigation/native"
import { useEffect } from "react"
import {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated"

export type AnimationCardProps = {
  animationIndex?: number
  animationDelay?: number
  animationDisabled?: boolean
}

export const useAnimationCard = (props: AnimationCardProps) => {
  const { animationIndex = 0, animationDelay = 60, animationDisabled } = props
  const opacity = useSharedValue(0)
  const scale = useSharedValue(0.8)
  const delay = animationIndex * animationDelay

  const isFocused = useIsFocused()

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(isFocused ? 1 : 0, { duration: 350 }))
    scale.value = withDelay(
      delay,
      withSpring(isFocused ? 1 : 0.8, {
        stiffness: 600,
        damping: 120,
        mass: 2,
        reduceMotion: ReduceMotion.System,
      })
    )
    return () => {
      opacity.value = withTiming(0, { duration: 150 })
      scale.value = withTiming(0.8, { duration: 150 })
    }
  }, [isFocused])

  const animation = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }))

  return { animation: animationDisabled ? {} : animation }
}
