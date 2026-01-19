import { Header, Main, Text, View } from "../../shared/components"

export const ScreenJobDetail = () => {
  return (
    <Main
      edges={["top", "right", "left"]}
      bg="background.400"
      headerBG="background.100"
      header={<Header withBack bg="background.100" title="Detalle del Trabajo" size="xxl" p="md" />}
    >
      <View flex={1} p="md" direction="column" align="center" justify="center">
        <View direction="column" gap="xxs">
          <Text fz="h1" fw="bold" ta="center">
            Estás viendo los detalles del trabajo
          </Text>
        </View>
      </View>
    </Main>
  )
}
