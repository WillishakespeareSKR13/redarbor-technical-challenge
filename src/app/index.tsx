import { useTheme } from "@/src/services/shared/hooks/theme";
import { Button, Text, View } from "react-native";
import { StyleSheetTheme } from "../services/shared/utils/stylesheet";

const ChangeTheme = () => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <>
      <Text style={styles.subtitle}>Current Theme: {theme.key}</Text>
      <Button
        onPress={() => {
          theme.toggle?.();
        }}
        title="Toggle Theme"
      />
    </>
  );
};

const Screen = () => {
  const styles = useStyles();
  console.log(styles);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redarbor Technical Challenge</Text>
      <Text style={styles.subtitle}>
        Expo 54 + React Native + TypeScript + Zustand
      </Text>
      <ChangeTheme />
    </View>
  );
};

export default Screen;

const useStyles = StyleSheetTheme((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background[100],
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spaces.lg,
  },
  title: {
    fontSize: theme.fontSizes.h1,
    fontWeight: "bold",
    color: theme.colors.foreground[100],
    marginBottom: theme.spaces.md,
    textAlign: "center",
  },
  subtitle: {
    fontSize: theme.fontSizes.body1,
    color: theme.colors.gray[700],
    textAlign: "center",
  },
}));
