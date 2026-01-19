import { StyleSheetTheme } from "../../utils/stylesheet"
import { ErrorProps } from "./types"

export const Styles = StyleSheetTheme((theme, _: ErrorProps) => ({
  error: {
    fontSize: theme.fontSizes.body2,
    fontWeight: "bold",
    color: theme.colors.red[500],
    variants: {
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
    color: theme.colors.blue[500],
    variants: {
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
}))
