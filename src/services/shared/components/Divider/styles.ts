import { StyleSheetTheme } from "../../utils/stylesheet"
import { DividerProps } from "./types"

export const Styles = StyleSheetTheme((theme, _: DividerProps) => ({
  divider: {
    gap: 0,
    variants: {
      orientation: {
        horizontal: {
          width: "100%",
          height: 1,
        },
        vertical: {
          width: 1,
          height: "100%",
        },
      },
    },
  },
}))
