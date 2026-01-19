import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetRadiusTheme, GetSpaceTheme } from "../../utils/theme"
import { ScrollProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: ScrollProps) => ({
  scroll: { flex: 1 },
  container: {
    width: props.w ?? "100%",
    height: props.h ?? "auto",
    maxWidth: props.maw,
    maxHeight: props.mah,
    minWidth: props.miw,
    minHeight: props.mih,
    padding: GetSpaceTheme(theme, props.p) ?? theme.spaces.md,
    paddingTop: GetSpaceTheme(theme, props.pt),
    paddingBottom: GetSpaceTheme(theme, props.pb),
    paddingLeft: GetSpaceTheme(theme, props.pl),
    paddingRight: GetSpaceTheme(theme, props.pr),
    paddingVertical: GetSpaceTheme(theme, props.py),
    paddingHorizontal: GetSpaceTheme(theme, props.px),
    margin: GetSpaceTheme(theme, props.m),
    marginTop: GetSpaceTheme(theme, props.mt),
    marginBottom: GetSpaceTheme(theme, props.mb),
    marginLeft: GetSpaceTheme(theme, props.ml),
    marginRight: GetSpaceTheme(theme, props.mr),
    marginVertical: GetSpaceTheme(theme, props.my),
    marginHorizontal: GetSpaceTheme(theme, props.mx),

    flex: props.flex,
    flexWrap: props.wrap,
    flexGrow: props.grow,
    flexShrink: props.shrink,
    backgroundColor: GetColorTheme(theme, props.bg) ?? "transparent",
    borderRadius: GetRadiusTheme(theme, props.r) ?? theme.radius.none,
    flexDirection: props.direction ?? "column",
    alignItems: props.align ?? "stretch",
    justifyContent: props.justify ?? "flex-start",
    gap: GetSpaceTheme(theme, props.gap) ?? theme.spaces.md,
  },
}))
