import { FlatList } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { StylesColumn, StylesContent, StylesList } from "./styles"
import { ListProps } from "./types"

const AnimatedList = Animated.createAnimatedComponent(FlatList) as any

export const List = <T extends object>(props: ListProps<T>) => {
  const { children, style, contentContainerStyle, contentProps, columnWrapperStyle, columnWrapperProps, ...rest } =
    props

  const stylesList = StylesList(props)
  const stylesContent = StylesContent(contentProps ?? {})
  const stylesColumn = StylesColumn(columnWrapperProps ?? {})

  return (
    <AnimatedList
      {...rest}
      style={[stylesList.list, style]}
      contentContainerStyle={[stylesContent.content, contentContainerStyle]}
      columnWrapperStyle={rest.numColumns ?? 0 > 1 ? [stylesColumn.column, columnWrapperStyle] : undefined}
    >
      {children}
    </AnimatedList>
  )
}
