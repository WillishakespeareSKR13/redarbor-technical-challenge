import { Main, Text, View } from "../../shared/components"

export const ScreenFavorites = () => {
  return (
    <Main bg="background.100" edges={["top", "bottom", "right", "left"]}>
      <View flex={1} p="md" direction="column" align="center" justify="center">
        <Text fz="h2" ta="center">
          Redarbor Technical Challenge
          {`\n`}
          (FAVORITES)
        </Text>
        <Text fz="h4" ta="center" c="gray.700">
          Expo 54 + React Native + TypeScript + Zustand
        </Text>
      </View>
    </Main>
  )
}
