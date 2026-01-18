import { useTheme } from "@/src/services/shared/hooks/theme"
import { Text } from "@components"
import { Button, View } from "react-native"
import { StyleSheetTheme } from "../services/shared/utils/stylesheet"

const ChangeTheme = () => {
  const theme = useTheme()
  const styles = useStyles()
  return (
    <>
      <Text>Current Theme: {theme.key}</Text>
      <Button
        onPress={() => {
          theme.toggle?.()
        }}
        title="Toggle Theme"
      />
    </>
  )
}

const Screen = () => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <Text>Redarbor Technical Challenge</Text>
      <Text>Expo 54 + React Native + TypeScript + Zustand</Text>
      <ChangeTheme />
    </View>
  )
}

export default Screen

const useStyles = StyleSheetTheme((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background[100],
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spaces.lg,
  },
}))
