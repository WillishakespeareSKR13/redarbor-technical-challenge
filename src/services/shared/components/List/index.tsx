import { FlatList } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { Styles } from "./styles"
import { ListProps } from "./types"

const AnimatedList = Animated.createAnimatedComponent(FlatList) as any

export const List = <T extends object>(props: ListProps<T>) => {
  const { children, style, contentContainerStyle, contentProps, columnWrapperStyle, columnWrapperProps, ...rest } =
    props

  const styles = Styles(props)

  return (
    <AnimatedList
      {...rest}
      style={[styles.list, style]}
      contentContainerStyle={[styles.content, contentContainerStyle]}
      columnWrapperStyle={rest.numColumns ?? 0 > 1 ? [styles.column_wrapper, columnWrapperStyle] : undefined}
    >
      {children}
    </AnimatedList>
  )
}
