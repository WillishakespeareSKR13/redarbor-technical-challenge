import { View } from "../View"
import { Styles } from "./styles"
import { DividerProps } from "./types"

export const Divider = (props: DividerProps) => {
  const { orientation = "horizontal", ...rest } = props
  const styles = Styles({ orientation })
  return <View bg="background.400" {...rest} style={[styles.divider, rest.style]} />
}
