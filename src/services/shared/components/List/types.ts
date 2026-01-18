import { NativeViewGestureHandlerProperties } from "react-native-gesture-handler"
import { FlatListPropsWithLayout } from "react-native-reanimated"
import { ViewProps } from "../View/types"

export type ListProps<T> = FlatListPropsWithLayout<T> & {
  children?: React.ReactNode
  contentProps?: ViewProps
  columnWrapperProps?: ViewProps
} & NativeViewGestureHandlerProperties &
  ViewProps
