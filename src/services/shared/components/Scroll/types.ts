import { ScrollViewProps } from "react-native"
import { AnimatedProps } from "react-native-reanimated"
import { ViewProps } from "../View/types"

export type ScrollProps = AnimatedProps<ScrollViewProps> &
  ViewProps & {
    children?: React.ReactNode
  }
