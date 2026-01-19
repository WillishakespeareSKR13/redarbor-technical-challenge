import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme } from "../../utils/theme"
import { RefreshProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: RefreshProps) => ({
  refresh: {
    color: GetColorTheme(theme, props.c) ?? theme.colors.foreground[100],
  },
}))
