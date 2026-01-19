import { ColorTransparent, ContrastColor, DarkerColor } from "../../utils/luminance"
import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetFontSizeTheme, GetRadiusTheme, GetSpaceTheme } from "../../utils/theme"
import { BadgeProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: BadgeProps) => {
  const fontSize = GetFontSizeTheme(theme, props.fz) ?? theme.fontSizes.body1
  const color = GetColorTheme(theme, props.c) ?? theme.colors.foreground[100]
  const color_subtle = GetColorTheme(theme, props.c) ?? theme.colors.gray[700]
  const invert = ContrastColor(color)
  const color_light = GetColorTheme(theme, props.c) ?? theme.colors.background[100]
  const radius = GetRadiusTheme(theme, props.r) ?? theme.radius.full
  const px = fontSize * 1.3
  const py = fontSize * 0.6

  return {
    badge: {
      alignSelf: props.self,
      width: props.fullWidth ? "100%" : props.w ?? "auto",
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
      paddingVertical: GetSpaceTheme(theme, props.py) ?? py,
      paddingHorizontal: GetSpaceTheme(theme, props.px) ?? px,
      margin: GetSpaceTheme(theme, props.m),
      marginTop: GetSpaceTheme(theme, props.mt),
      marginBottom: GetSpaceTheme(theme, props.mb),
      marginLeft: GetSpaceTheme(theme, props.ml),
      marginRight: GetSpaceTheme(theme, props.mr),
      marginVertical: GetSpaceTheme(theme, props.my),
      marginHorizontal: GetSpaceTheme(theme, props.mx),

      fontSize: fontSize,
      fontWeight: props.fw,
      flexDirection: "row",
      gap: theme.spaces.xs,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius,
      backgroundColor: color,
      variants: {
        variant: {
          filled: {},
          subtle: {
            backgroundColor: ColorTransparent(color_subtle, 0.1),
            borderWidth: 0,
            borderColor: ColorTransparent(color_subtle, 0.1),
          },
          light: {
            backgroundColor: props.c ? ColorTransparent(color, 0.1) : color_light,
            borderWidth: 1,
            borderColor: props.c ? ColorTransparent(color, 0.2) : DarkerColor(color_light, 0.1),
          },
          outline: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: color,
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
            flexGrow: 1,
            flexShrink: 1,
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
          subtle: {
            color: color_subtle,
          },
          light: {
            fontWeight: "bold",
            color,
          },
          outline: {
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
      fontSize: fontSize,
      lineHeight: fontSize * 1.2,
      fontWeight: "600",
      color: invert,
      variants: {
        variant: {
          filled: {},
          subtle: {
            color: color_subtle,
            fontWeight: props.c ? "bold" : "regular",
          },
          light: {
            fontWeight: "bold",
            color,
          },
          outline: {
            color,
          },
        },
        disabled: {
          true: {
            color: theme.colors.gray[700],
          },
          false: {},
        },
        isLoading: {
          true: {
            color: theme.colors.background[300],
            backgroundColor: theme.colors.background[300],
          },
          false: {},
        },
      },
    },
    underlay: {
      color: DarkerColor(color, 0.2),
      variants: {
        variant: {
          filled: {},
          subtle: {
            color: ColorTransparent(color_subtle, 0.2),
          },
          light: {
            color: props.c ? ColorTransparent(color, 0.2) : theme.colors.background[200],
          },
          outline: {
            color: ColorTransparent(color, 0.1),
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
    icon: {
      width: fontSize * 1.1,
      fontWeight: "600",
      color: invert,
      variants: {
        variant: {
          filled: {},
          subtle: {
            color: color_subtle,
          },
          light: {
            color,
          },
          outline: {
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
  }
})
