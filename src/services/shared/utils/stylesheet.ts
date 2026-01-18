import { StyleProp, StyleSheet } from "react-native"
import { useTheme } from "../hooks/theme"
import { Theme } from "../theme/types"

export const StyleSheetTheme =
  <T = {}, D = {}>(callback: (theme: Theme, props: T) => Record<keyof D, StyleProp<any>>) =>
  (props = {} as T) => {
    const { theme } = useTheme()
    const styles = callback(theme, props)
    return StyleSheet.create(styles)
  }
