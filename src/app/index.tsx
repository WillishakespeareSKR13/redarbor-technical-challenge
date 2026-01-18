import { useTheme } from "@/src/services/shared/hooks/theme"
import { ActionButton, Button, InputText, Text } from "@components"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StyleSheetTheme } from "../services/shared/utils/stylesheet"

const Screen = () => {
  const styles = Style()
  const theme = useTheme()
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text fz="h4" ta="center">
          Redarbor Technical Challenge
        </Text>
        <Text fz="h4" ta="center" c="gray.700">
          Expo 54 + React Native + TypeScript + Zustand
        </Text>
        <Text c="gray.700">Current Theme: {theme.key}</Text>
        <InputText />
        <ActionButton icon={<FontAwesome6 name="thumbs-up" />} />
        <Button
          onPress={() => {
            theme.toggle?.()
          }}
        >
          Toggle Theme
        </Button>
      </View>
    </GestureHandlerRootView>
  )
}

export default Screen

const Style = StyleSheetTheme((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background[100],
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spaces.lg,
  },
}))
