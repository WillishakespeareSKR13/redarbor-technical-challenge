import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetRadiusTheme, GetSpaceTheme } from "../../utils/theme"
import { ViewProps } from "../View/types"
import { ListProps } from "./types"

export const StylesList = StyleSheetTheme((theme, props: ListProps<any>) => ({
  list: {
    width: props.w,
    height: props.h,
    maxWidth: props.maw,
    maxHeight: props.mah,
    minWidth: props.miw,
    minHeight: props.mih,
    padding: GetSpaceTheme(theme, props.p),
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
    backgroundColor: GetColorTheme(theme, props.bg) ?? "transparent",
    borderRadius: GetRadiusTheme(theme, props.r) ?? theme.radius.none,
    gap: GetSpaceTheme(theme, props.gap),
  },
}))

export const StylesContent = StyleSheetTheme((theme, props: ViewProps) => ({
  content: {
    width: props.w,
    height: props.h,
    maxWidth: props.maw,
    maxHeight: props.mah,
    minWidth: props.miw,
    minHeight: props.mih,
    padding: GetSpaceTheme(theme, props.p),
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
    backgroundColor: GetColorTheme(theme, props.bg) ?? "transparent",
    borderRadius: GetRadiusTheme(theme, props.r) ?? theme.radius.none,
    gap: GetSpaceTheme(theme, props.gap),
  },
}))

export const StylesColumn = StyleSheetTheme((theme, props: ViewProps) => ({
  column: {
    width: props.w,
    height: props.h,
    maxWidth: props.maw,
    maxHeight: props.mah,
    minWidth: props.miw,
    minHeight: props.mih,
    padding: GetSpaceTheme(theme, props.p),
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
    backgroundColor: GetColorTheme(theme, props.bg) ?? "transparent",
    borderRadius: GetRadiusTheme(theme, props.r) ?? theme.radius.none,
    gap: GetSpaceTheme(theme, props.gap),
  },
}))
