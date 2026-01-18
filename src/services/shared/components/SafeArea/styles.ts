import { StyleSheetTheme } from "../../utils/stylesheet"
import { SafeAreaProps } from "./types"

export const Styles = StyleSheetTheme((_, __: SafeAreaProps) => ({
  safeArea: {
    gap: 0,
  },
}))
