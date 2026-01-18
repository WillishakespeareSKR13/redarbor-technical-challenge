import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { ActionButton, Button, InputText, Main, Text, View } from "../../shared/components"
import { useSession } from "../../shared/hooks/session"
import { useTheme } from "../../shared/hooks/theme"

export const ScreenHome = () => {
  const theme = useTheme()
  const { session, closeSession } = useSession()
  return (
    <Main bg="background.100" edges={["top", "bottom", "right", "left"]}>
      <View flex={1} p="md" direction="column" align="center" justify="center">
        <Text fz="h4" ta="center">
          Redarbor Technical Challenge
        </Text>
        <Text fz="h4" ta="center" c="gray.700">
          Expo 54 + React Native + TypeScript + Zustand
        </Text>
        <Text c="gray.700">Current Theme: {theme.key}</Text>
        <Text c="gray.700">Current Session: {session}</Text>
        <InputText />
        <ActionButton icon={<FontAwesome6 name="thumbs-up" />} />
        <Button
          onPress={() => {
            theme.toggle?.()
          }}
        >
          Toggle Theme
        </Button>
        <Button
          onPress={() => {
            closeSession()
          }}
        >
          Cerrar Sesión
        </Button>
      </View>
    </Main>
  )
}
