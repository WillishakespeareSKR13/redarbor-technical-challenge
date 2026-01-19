import { RefreshControl } from "react-native"
import Animated from "react-native-reanimated"
import { Styles } from "./styles"
import { RefreshProps } from "./types"

const AnimatedRefresh = Animated.createAnimatedComponent(RefreshControl)

export const Refresh = (props: RefreshProps) => {
  const styles = Styles(props)
  return <AnimatedRefresh tintColor={styles.refresh.color} {...props} />
}
