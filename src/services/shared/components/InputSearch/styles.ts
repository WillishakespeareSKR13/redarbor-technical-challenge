import { StyleSheetTheme } from "../../utils/stylesheet"

export const Styles = StyleSheetTheme((theme) => ({
  action_icon: {
    color: theme.colors.foreground[100],
  },
  icon: {
    color: theme.colors.gray[700],
  },
  icon_active: {
    color: theme.colors.foreground[100],
  },
  input_container: {
    backgroundColor: theme.colors.background[100],
    borderColor: theme.colors.background[400],
    borderRadius: theme.radius.xs,
  },
  input_section_left: {
    paddingRight: theme.spaces.xxs,
  },
  input: {
    paddingLeft: theme.spaces.xxs,
  },
}))
