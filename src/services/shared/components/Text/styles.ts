import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetFontFamilyTheme, GetFontSizeTheme, GetSpaceTheme } from "../../utils/theme"
import { TextProps } from "./types"

export const Styles = StyleSheetTheme<TextProps>((theme, props) => {
  const fontFamily = GetFontFamilyTheme(theme, props.ff, theme.fontFamily.regular)
  const fontSize = GetFontSizeTheme(theme, props.fz) ?? theme.fontSizes.body1
  const color = GetColorTheme(theme, props.c, theme.colors.foreground[100])
  const styles = {
    text: {
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
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: props.fw ?? "500",
      lineHeight: props.lh ?? 1.3 * fontSize,
      color: color,
      textAlign: props.ta,
    },
  }
  return styles
})
