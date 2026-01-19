import { TouchableHighlightProps } from "react-native"
import { AnimatedProps } from "react-native-reanimated"
import { AnimationCardProps } from "../../animations/card"
import { ViewProps } from "../View/types"

export type ShadowProps = ViewProps &
  AnimatedProps<TouchableHighlightProps> & {
    type?: "view" | "touchable"
    isSelected?: boolean
    isLoading?: boolean
    flat?: boolean
    shadowless?: boolean
  } & AnimationCardProps
