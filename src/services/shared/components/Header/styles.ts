import { StyleSheetTheme } from "../../utils/stylesheet"
import { GetSpaceTheme } from "../../utils/theme"
import { HeaderProps } from "./types"

export const Styles = StyleSheetTheme((theme, props: HeaderProps) => {
  const gap = GetSpaceTheme(theme, props.gap) ?? theme.spaces.xs

  return {
    container: {
      flexShrink: 1,
      width: props?.w ?? "100%",
      gap: gap,
      flexDirection: "column",
      variants: {
        size: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {},
          xxl: {},
        },
      },
    },
    wrapper: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 38,
      gap: theme.spaces.lg,
      variants: {
        size: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {},
          xxl: {},
        },
      },
    },
    head: {
      width: "auto",
      flex: 1,
      flexDirection: "column",
      justifyContent: props.justify ?? "center",
      alignItems: props.align ?? "flex-start",
      gap: 2,
      variants: {
        size: {
          xs: {
            gap: 0,
          },
          sm: {
            gap: 1,
          },
          md: {},
          lg: {
            gap: 6,
          },
          xl: {
            gap: 5,
          },
          xxl: {
            gap: 4,
          },
          xxxl: {
            gap: 4,
          },
        },
      },
    },
    title: {
      width: "100%",
      textAlign: props.ta ?? "left",
      fontSize: theme.fontSizes.body1,
      lineHeight: 1 * theme.fontSizes.body1,
      color: theme.colors.foreground[100],
      variants: {
        size: {
          xs: {
            fontSize: theme.fontSizes.body5,
            lineHeight: 1 * theme.fontSizes.body5,
          },
          sm: {
            fontSize: theme.fontSizes.body2,
            lineHeight: 1 * theme.fontSizes.body2,
          },
          md: {},
          lg: {
            fontWeight: "700",
            fontSize: theme.fontSizes.h5,
            lineHeight: 1 * theme.fontSizes.h5,
          },
          xl: {
            fontWeight: "700",
            fontSize: theme.fontSizes.h4,
            lineHeight: 1 * theme.fontSizes.h4,
          },
          xxl: {
            fontWeight: "700",
            fontSize: theme.fontSizes.h3,
            lineHeight: 1 * theme.fontSizes.h3,
          },
          xxxl: {
            fontWeight: "700",
            fontSize: theme.fontSizes.h1,
            lineHeight: 1 * theme.fontSizes.h1,
          },
        },
      },
    },
    subtitle: {
      width: "100%",
      textAlign: props.ta ?? "left",
      fontSize: theme.fontSizes.body2,
      lineHeight: 1.3 * theme.fontSizes.body2,
      variants: {
        size: {
          xs: {
            fontSize: theme.fontSizes.body4,
            lineHeight: 1.3 * theme.fontSizes.body4,
          },
          sm: {
            fontSize: theme.fontSizes.body3,
            lineHeight: 1.3 * theme.fontSizes.body3,
          },
          md: {},
          lg: {
            fontSize: theme.fontSizes.body1,
            lineHeight: 1.3 * theme.fontSizes.body1,
          },
          xl: {
            fontSize: theme.fontSizes.body1,
            lineHeight: 1.3 * theme.fontSizes.body1,
          },
          xxl: {
            fontSize: theme.fontSizes.body1,
            lineHeight: 1.3 * theme.fontSizes.body1,
          },
          xxxl: {
            fontSize: theme.fontSizes.h3,
            lineHeight: 1.3 * theme.fontSizes.h3,
          },
        },
      },
    },
    error: {
      gap: theme.spaces.xs,
      fontSize: theme.fontSizes.body2,
      lineHeight: 1.3 * theme.fontSizes.body2,
      fontWeight: "600",
      variants: {
        size: {
          xs: {
            fontSize: theme.fontSizes.body4,
            lineHeight: 1.3 * theme.fontSizes.body4,
          },
          sm: {
            fontSize: theme.fontSizes.body3,
            lineHeight: 1.3 * theme.fontSizes.body3,
          },
          md: {},
          lg: {
            fontSize: theme.fontSizes.body1,
            lineHeight: 1.3 * theme.fontSizes.body1,
          },
          xl: {
            fontSize: theme.fontSizes.h5,
            lineHeight: 1.3 * theme.fontSizes.h5,
          },
          xxl: {
            fontSize: theme.fontSizes.h3,
            lineHeight: 1.3 * theme.fontSizes.h3,
          },
          xxxl: {
            fontSize: theme.fontSizes.h2,
            lineHeight: 1.3 * theme.fontSizes.h2,
          },
        },
        status: {
          validating: {
            color: theme.colors.blue[500],
          },
          valid: {
            color: theme.colors.green[500],
          },
          invalid: {
            color: theme.colors.red[500],
          },
        },
      },
    },
    validating: {
      fontSize: theme.fontSizes.body2,
      color: theme.colors.blue[100],
      paddingRight: theme.spaces.xs,
      variants: {
        size: {
          xs: {
            fontSize: theme.fontSizes.body4,
          },
          sm: {
            fontSize: theme.fontSizes.body3,
          },
          md: {},
          lg: {
            fontSize: theme.fontSizes.body1,
          },
          xl: {
            fontSize: theme.fontSizes.h5,
          },
          xxl: {
            fontSize: theme.fontSizes.h4,
          },
          xxxl: {
            fontSize: theme.fontSizes.h3,
          },
        },
      },
    },
  }
})
