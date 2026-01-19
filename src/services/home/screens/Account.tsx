import { Button, Divider, Header, Main, Text, Theme, View } from "../../shared/components"
import { useSession } from "../../shared/hooks/session"
import { useTheme } from "../../shared/hooks/theme"

export const ScreenAccount = () => {
  const theme = useTheme()
  const { session, closeSession } = useSession()
  return (
    <Main
      edges={["top", "right", "left"]}
      bg="background.400"
      headerBG="background.100"
      header={<Header withBack bg="background.100" title="Cuenta" size="xxl" p="md" />}
    >
      <View flex={1} p="md" direction="column" align="center" justify="center">
        <View direction="column" gap="xxs">
          <Text fz="h1" fw="bold" ta="center">
            Bienvenido a tu cuenta
          </Text>
          <Text fz="h4" ta="center" c="gray.700">
            Aquí puedes gestionar tu información personal y preferencias
          </Text>
        </View>
        <View direction="column" gap={0}>
          <Text c="gray.700">Current Theme: {theme.key}</Text>
          <Text c="gray.700">Current Session: {session}</Text>
        </View>
        <Theme />
      </View>
      <Divider />
      <View p="md" bg="background.100">
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
