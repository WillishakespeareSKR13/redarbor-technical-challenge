import { StyleSheetTheme } from "../../utils/stylesheet"
import { ErrorProps } from "./types"

export const Styles = StyleSheetTheme((theme, _: ErrorProps) => ({
  error: {
    fontSize: theme.fontSizes.body2,
    color: theme.colors.red[100],
    variants: {
      status: {
        validating: {
          color: theme.colors.blue[100],
        },
        valid: {
          color: theme.colors.green[100],
        },
        invalid: {
          color: theme.colors.red[100],
        },
      },
    },
  },
  validating: {
    fontSize: theme.fontSizes.body2,
    color: theme.colors.blue[100],
    variants: {
      status: {
        validating: {
          color: theme.colors.blue[100],
        },
        valid: {
          color: theme.colors.green[100],
        },
        invalid: {
          color: theme.colors.red[100],
        },
      },
    },
  },
}))
