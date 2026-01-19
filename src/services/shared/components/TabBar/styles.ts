import { StyleSheetTheme } from "../../utils/stylesheet"

export const Styles = StyleSheetTheme((theme, _: { active: boolean }) => ({
  tabs: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    alignContent: "center",
  },
  tab: {
    width: "auto",
    height: "auto",
    minHeight: 48,
    minWidth: 64,
    paddingHorizontal: theme.spaces.xs,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.xxs,
    gap: 0,
    variants: {
      active: {
        true: {
          backgroundColor: theme.colors.background[300],
        },
        false: {},
      },
    },
  },
  container: {
    paddingHorizontal: theme.spaces.md,
    paddingTop: theme.spaces.xs,
    width: "100%",
    height: "auto",
    borderWidth: 1,
    backgroundColor: theme.colors.background[100],
    borderColor: theme.colors.background[100],
    borderTopColor: theme.colors.background[400],
    gap: theme.spaces.xs,
  },
  content: {
    width: "auto",
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  tabLeft: {
    justifyContent: "flex-start",
  },
  tabRight: {
    justifyContent: "flex-end",
  },
  icon: {
    color: theme.colors.gray[700],
    variants: {
      active: {
        true: {
          color: theme.colors.foreground[100],
        },
        false: {},
      },
    },
  },
  label: {
    color: theme.colors.gray[700],
    fontSize: theme.fontSizes.body2,
    variants: {
      active: {
        true: {
          color: theme.colors.foreground[100],
          fontWeight: "700",
        },
        false: {
          fontWeight: "400",
        },
      },
    },
  },
  underlay: {
    color: theme.colors.background[300],
    variants: {
      active: {
        true: {
          color: theme.colors.background[400],
        },
        false: {},
      },
    },
  },
}))
