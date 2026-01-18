import { theme } from "@/src/services/shared/hooks/theme";
import { Link, Stack, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const NotFound = () => {
  const pathname = usePathname();
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <Text style={styles.title}>
          No match for <Text style={{ fontWeight: "normal" }}>{pathname}</Text>
        </Text>
        <Link href="/auth/login" style={styles.link}>
          <Text style={styles.linkText}>Go to login screen!</Text>
        </Link>
      </View>
    </>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spaces.lg,
    backgroundColor: theme.colors.background[100],
  },
  title: {
    fontSize: theme.fontSizes.h4,
    fontWeight: "bold",
    color: theme.colors.foreground[100],
  },
  link: {
    marginTop: theme.spaces.md,
    paddingVertical: theme.spaces.md,
  },
  linkText: {
    fontSize: theme.fontSizes.body1,
    color: "#2e78b7",
  },
});
