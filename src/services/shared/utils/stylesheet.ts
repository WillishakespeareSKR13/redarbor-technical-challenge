import { StyleProp, StyleSheet } from "react-native";
import { useTheme } from "../hooks/theme";
import { Theme } from "../theme/types";

export const StyleSheetTheme =
  (callback: (theme: Theme) => StyleProp<any>) => () => {
    const { theme } = useTheme();
    return StyleSheet.create(callback(theme));
  };
