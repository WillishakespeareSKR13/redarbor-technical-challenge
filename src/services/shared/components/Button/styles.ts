import { ColorTransparent, ContrastColor, DarkerColor } from "../../utils/luminance"
import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetFontSizeTheme, GetRadiusTheme, GetSpaceTheme } from "../../utils/theme"
import { ButtonProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: ButtonProps) => {
  const color = GetColorTheme(theme, props.c) ?? theme.colors.foreground[100]
  const invert = ContrastColor(color)
  const color_alt = GetColorTheme(theme, props.c) ?? theme.colors.background[100]
  const fontSize = GetFontSizeTheme(theme, props.fz) ?? theme.fontSizes.body1
  const radius = GetRadiusTheme(theme, props.r) ?? theme.radius.full

  return {
    button: {
      alignSelf: props.self,
      width: props.fullWidth ? "auto" : props.w,
      height: props.h,
      maxWidth: props.maw,
      maxHeight: props.mah,
      minWidth: props.miw,
      minHeight: props.mih ?? 40,
      padding: GetSpaceTheme(theme, props.p),
      paddingTop: GetSpaceTheme(theme, props.pt),
      paddingBottom: GetSpaceTheme(theme, props.pb),
      paddingLeft: GetSpaceTheme(theme, props.pl),
      paddingRight: GetSpaceTheme(theme, props.pr),
      paddingVertical: GetSpaceTheme(theme, props.py) ?? 12,
      paddingHorizontal: GetSpaceTheme(theme, props.px) ?? 20,
      margin: GetSpaceTheme(theme, props.m),
      marginTop: GetSpaceTheme(theme, props.mt),
      marginBottom: GetSpaceTheme(theme, props.mb),
      marginLeft: GetSpaceTheme(theme, props.ml),
      marginRight: GetSpaceTheme(theme, props.mr),
      marginVertical: GetSpaceTheme(theme, props.my),
      marginHorizontal: GetSpaceTheme(theme, props.mx),

      fontWeight: props.fw,
      flexDirection: "row",
      gap: GetSpaceTheme(theme, props.gap) ?? theme.spaces.xs,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius,
      backgroundColor: color,
      variants: {
        variant: {
          filled: {},
          light: {
            backgroundColor: props.c ? ColorTransparent(color, 0.1) : color_alt,
          },
          outline: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: color,
          },
          link: {
            backgroundColor: "transparent",
          },
        },
        disabled: {
          true: {
            opacity: 0.6,
            backgroundColor: theme.colors.gray[300],
            borderColor: theme.colors.gray[500],
          },
          false: {},
        },
        fullWidth: {
          true: {
            width: "100%",
          },
          false: {},
        },
      },
    },
    spinner: {
      color: invert,
      variants: {
        variant: {
          filled: {},
          light: {
            fontWeight: "700",
            color,
          },
          outline: {
            color,
          },
          link: {
            color,
          },
        },
        disabled: {
          true: {
            color: theme.colors.gray[700],
          },
          false: {},
        },
      },
    },
    text: {
      fontSize,
      lineHeight: 1.3 * fontSize,
      fontWeight: 500,
      color: invert,
      variants: {
        variant: {
          filled: {},
          light: {
            fontWeight: 800,
            color,
          },
          outline: {
            color,
          },
          link: {
            color,
          },
        },
        disabled: {
          true: {
            color: theme.colors.gray[700],
          },
          false: {},
        },
      },
    },
    underlay: {
      color: DarkerColor(color, 0.05),
      variants: {
        variant: {
          filled: {},
          light: {
            color: props.c ? ColorTransparent(color, 0.2) : theme.colors.background[200],
          },
          outline: {
            color: ColorTransparent(color, 0.1),
          },
          link: {
            color: "transparent",
          },
        },
        disabled: {
          true: {
            color: theme.colors.gray[700],
          },
          false: {},
        },
      },
    },
  }
})
