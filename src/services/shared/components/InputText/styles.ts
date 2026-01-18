import { StyleSheetTheme } from "../../utils/stylesheet"
import { InputTextProps } from "./types"

export const Styles = StyleSheetTheme((theme, _: InputTextProps) => ({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.radius.xs,
    borderWidth: 1,
    borderColor: theme.colors.background[400],
    backgroundColor: theme.colors.background[100],
    fontSize: theme.fontSizes.body1,
    color: theme.colors.foreground[100],
    borderStyle: "solid",
    gap: 0,
    variants: {
      status: {
        validating: {
          borderColor: theme.colors.blue[500],
        },
        valid: {},
        invalid: {
          borderColor: theme.colors.red[500],
        },
      },
    },
  },
  input: {
    width: "100%",
    flexShrink: 1,
    paddingVertical: theme.spaces.sm,
    paddingHorizontal: theme.spaces.md,
    borderRadius: theme.radius.xxs,
    color: theme.colors.foreground[100],
  },
  input_hide: {
    display: "none",
  },
  section: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 48,
    flex: 0,
    padding: theme.spaces.sm,
  },
  sectionLeft: {
    borderRightWidth: 1,
    borderRightColor: theme.colors.background[300],
    borderStyle: "solid",
    borderTopLeftRadius: theme.radius.xxs,
    borderBottomLeftRadius: theme.radius.xxs,
  },
  sectionRight: {
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.background[300],
    borderStyle: "solid",
    borderTopRightRadius: theme.radius.xxs,
    borderBottomRightRadius: theme.radius.xxs,
  },
  eye: {
    color: theme.colors.foreground[100],
  },
  placeholder: {
    color: theme.colors.gray[500],
  },
}))
