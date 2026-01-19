import { useEffect } from "react"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated"
import { View } from "../View"
import { Styles } from "./styles"
import { DotsProps } from "./types"

export const Dots = (props: DotsProps) => {
  const { dots = 3, duration = 550, style, ...rest } = props

  const styles = Styles(props)
  const dotArray = Array.from({ length: dots })

  return (
    <View gap={4} {...rest} style={[styles.container, style]}>
      {dotArray.map((_, index) => (
        <Dot key={index} index={index} duration={duration} />
      ))}
    </View>
  )
}

type DotComponentProps = DotsProps & {
  index: number
  duration: number
}

const Dot = (props: DotComponentProps) => {
  const { index, duration } = props
  const opacity = useSharedValue(0.3)
  const scale = useSharedValue(1)

  const styles = Styles(props)

  useEffect(() => {
    const delay = index * (duration / 3)

    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(withTiming(1, { duration: duration / 2 }), withTiming(0.3, { duration: duration / 2 })),
        -1,
        false
      )
    )

    scale.value = withDelay(
      delay,
      withRepeat(
        withSequence(withTiming(1.2, { duration: duration / 2 }), withTiming(1, { duration: duration / 2 })),
        -1,
        false
      )
    )
  }, [duration, index])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }))

  return <Animated.View style={[styles.dot, animatedStyle]} />
}
