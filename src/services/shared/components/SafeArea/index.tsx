export * from "./types"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View } from "../View"
import { Styles } from "./styles"
import { SafeAreaProps } from "./types"

export const SafeArea = (props: SafeAreaProps) => {
  const { children, style, edges, ...rest } = props
  const insets = useSafeAreaInsets()
  const styles = Styles(props)

  return (
    <View
      {...rest}
      style={[
        styles.safeArea,
        {
          paddingTop: edges?.includes("top") ? insets.top : 0,
          paddingBottom: edges?.includes("bottom") ? insets.bottom : 0,
          paddingLeft: edges?.includes("left") ? insets.left : 0,
          paddingRight: edges?.includes("right") ? insets.right : 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}
