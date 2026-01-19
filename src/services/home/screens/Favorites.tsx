import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useRouter } from "expo-router"
import { Button, Conditional, Header, List, Main, Refresh, Text, View } from "../../shared/components"
import { useTheme } from "../../shared/hooks/theme"
import { CardJob } from "../components/Job"
import { SKELETON_JOBS } from "../constants/jobs"
import { useJobFavorites, useJobs } from "../hooks/jobs"

export const ScreenFavorites = () => {
  const { data, error, isLoading, isRefetching, refetch } = useJobFavorites()
  const router = useRouter()
  const isEmpty = data?.length === 0

  return (
    <Main
      bg="background.400"
      edges={["top", "right", "left"]}
      headerBG="background.100"
      header={<Header withBack bg="background.100" title="Favoritos" size="xxl" p="md" />}
    >
      <Conditional conditional={Boolean(error)}>
        <ScreenFavoritesError />
        <View flex={1} gap={0}>
          <Conditional conditional={isEmpty}>
            <ScreenFavoritesEmpty />
            <List
              data={isLoading ? SKELETON_JOBS : data ?? []}
              keyExtractor={(item) => `${item.id}`}
              refreshControl={<Refresh enabled={true} refreshing={isRefetching} onRefresh={refetch} />}
              renderItem={({ item, index }) => (
                <CardJob
                  client={item}
                  isLoading={isLoading}
                  animationIndex={index}
                  type="touchable"
                  onPress={() => {
                    router.navigate({
                      pathname: `/home/job-details`,
                      params: { jobId: item.id },
                    })
                  }}
                />
              )}
              initialNumToRender={6}
              contentProps={{
                p: "md",
                gap: "md",
              }}
            />
          </Conditional>
        </View>
      </Conditional>
    </Main>
  )
}

const ScreenFavoritesEmpty = () => {
  const router = useRouter()
  return (
    <View flex={1} justify="center" align="center" p="md">
      <View flex={1} justify="center" align="center" bg="background.100" r="xs" p="md">
        <Header
          size="lg"
          title="No tienes trabajos favoritos"
          subtitle="Agrega trabajos a tus favoritos para verlos aquí."
          ta="center"
        />
        <Button onPress={() => router.push("/home")} rightSection={<FontAwesome6 name="house" size={10} />}>
          Ir al inicio
        </Button>
      </View>
    </View>
  )
}

const ScreenFavoritesError = () => {
  const { theme } = useTheme()
  const { refetch } = useJobs()
  return (
    <View flex={1} justify="center" align="center" p="md">
      <View flex={1} justify="center" align="center" bg="background.100" r="xs" p="md" gap="md">
        <View w="100%" pt="xs" pb="xs" gap="xs" align="center">
          <FontAwesome6 name="triangle-exclamation" size={54} color={theme.colors.red[500]} />
          <Text ta="center" c={theme.colors.gray[700]}>
            Ocurrio un error al cargar los trabajos favoritos. Por favor, intenta de nuevo.
          </Text>
        </View>
        <Button fullWidth variant="light" onPress={() => refetch()} rightSection={<FontAwesome6 name="rotate-right" />}>
          Reintentar
        </Button>
      </View>
    </View>
  )
}
