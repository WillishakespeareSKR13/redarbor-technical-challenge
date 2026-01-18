import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme } from "../../utils/theme"
import { MainProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: MainProps) => ({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: GetColorTheme(theme, props.bg) ?? "transparent",
    gap: 0,
  },
  keyboard: {
    flex: 1,
    width: "100%",
    height: "100%",
    gap: 0,
  },
  safeArea: {
    flex: 1,
    width: "100%",
    height: "100%",
    gap: 0,
    backgroundColor: "transparent",
  },
  content: {
    flex: 1,
    gap: 0,
    backgroundColor: "transparent",
  },
  background_header: {
    position: "absolute",
    top: 0,
    zIndex: -1,
    backgroundColor: GetColorTheme(theme, props.headerBG ?? props?.bg) ?? "transparent",
  },
  background_footer: {
    position: "absolute",
    bottom: 0,
    zIndex: -1,
    backgroundColor: GetColorTheme(theme, props.footerBG ?? props?.bg) ?? "transparent",
  },
}))
