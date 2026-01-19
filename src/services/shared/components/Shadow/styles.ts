import { DarkerColor } from "../../utils/luminance"
import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetRadiusTheme, GetSpaceTheme } from "../../utils/theme"
import { ShadowProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: ShadowProps) => ({
  view: {
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
    backgroundColor: GetColorTheme(theme, props.bg) ?? theme.colors.background[100],
    borderRadius: GetRadiusTheme(theme, props.r) ?? theme.radius.xs,
    flexDirection: props.direction ?? "column",
    alignItems: props.align ?? "stretch",
    justifyContent: props.justify ?? "flex-start",
    gap: GetSpaceTheme(theme, props.gap) ?? theme.spaces.xs,
  },
  underlay_color: {
    color: DarkerColor(GetColorTheme(theme, props.bg) ?? theme.colors.background[100], 0.002),
  },
  border: {
    borderWidth: 1,
    borderColor: theme.colors.background[500],
    borderStyle: "solid",
  },
  shadow: {
    shadowColor: "#00000010",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
  },
  selected: {
    borderColor: theme.colors.foreground[100],
  },
  flat: {
    padding: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
}))
