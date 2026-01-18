import { ActivityIndicator, Dimensions, Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTheme } from "../../hooks/theme"
import { StyleSheetTheme } from "../../utils/stylesheet"
import { View } from "../View"

export const Splash = () => {
  const { key } = useTheme()
  const insets = useSafeAreaInsets()
  const screen = Dimensions.get("window")
  const styles = Styles()
  return (
    <View style={styles.splash}>
      {key === "dark" && (
        <Image source={require("../../../../assets/splash-icon-white.png")} alt="Splash Image" style={styles.image} />
      )}
      {key === "light" && (
        <Image source={require("../../../../assets/splash-icon.png")} alt="Splash Image" style={styles.image} />
      )}
      <ActivityIndicator
        size="large"
        color={styles.loader.color}
        style={[
          styles.loader,
          {
            bottom: insets.bottom + screen.height * 0.15,
          },
        ]}
      />
    </View>
  )
}

const Styles = StyleSheetTheme((theme, rt) => ({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background[100],
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  loader: {
    position: "absolute",
    color: theme.colors.foreground[100],
  },
}))
