import { ColorTransparent, ContrastColor, DarkerColor } from "../../utils/luminance"
import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetColorTheme, GetRadiusTheme, GetSpaceTheme } from "../../utils/theme"
import { ActionButtonProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: ActionButtonProps) => {
  const color = GetColorTheme(theme, props.c) ?? theme.colors.foreground[100]
  const color_alt = GetColorTheme(theme, props.c) ?? theme.colors.background[100]
  const radius = GetRadiusTheme(theme, props.r) ?? theme.radius.full
  const size = props.size ?? 42
  const icon_size = Math.round((props.size ?? 42) * 0.42)
  const icon_color = GetColorTheme(theme, props.c) ?? theme.colors.foreground[100]
  const icon_invert = ContrastColor(icon_color)
  return {
    container: {
      width: "auto",
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: GetSpaceTheme(theme, props.gap) ?? theme.spaces.xs,
    },
    action: {
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: radius,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: color,
      variants: {
        variant: {
          filled: {},
          light: {
            backgroundColor: props.c ? ColorTransparent(color, 0.1) : color_alt,
            borderColor: props.c ? ColorTransparent(color, 0.1) : color_alt,
          },
          ghost: {
            backgroundColor: props.c ? ColorTransparent(color, 0.1) : color_alt,
            borderColor: props.c ? DarkerColor(color, 0.5) : DarkerColor(color_alt, 0.02),
          },
          outline: {
            backgroundColor: "transparent",
          },
        },
        disabled: {
          true: {
            backgroundColor: theme.colors.gray[200],
            borderColor: theme.colors.gray[500],
          },
          false: {},
        },
      },
    },
    icon: {
      width: icon_size,
      color: icon_invert,
      variants: {
        variant: {
          filled: {},
          light: {
            fontWeight: "700",
            color: icon_color,
          },
          ghost: {
            fontWeight: "700",
            color: DarkerColor(icon_color, 0.5),
          },
          outline: {
            color: icon_color,
          },
        },
        disabled: {
          true: {
            color: theme.colors.gray[500],
          },
          false: {},
        },
      },
    },
    underlay: {
      color: DarkerColor(color, 0.02),
      variants: {
        variant: {
          filled: {},
          light: {
            color: props.c ? ColorTransparent(DarkerColor(color, 0.2), 0.1) : DarkerColor(color_alt, 0.1),
          },
          ghost: {
            color: props.c ? ColorTransparent(DarkerColor(color, 0.2), 0.1) : DarkerColor(color_alt, 0.1),
          },
          outline: {
            color: props.c ? ColorTransparent(color, 0.1) : color_alt,
          },
        },
        disabled: {
          true: {
            color: theme.colors.gray[300],
          },
          false: {},
        },
      },
    },
  }
})
