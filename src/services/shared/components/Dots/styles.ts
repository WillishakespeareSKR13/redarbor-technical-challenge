import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme } from "../../utils/theme"
import { DotsProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: DotsProps) => {
  const color = GetColorTheme(theme, props.c) ?? theme.colors.foreground[100]
  const size = props.dotSize ?? 5

  return {
    container: {
      flexDirection: "row",
      alignItems: "center",
      width: "auto",
    },

    dot: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
    },
  }
})
