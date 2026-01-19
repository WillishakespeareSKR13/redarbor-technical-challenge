import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useRouter } from "expo-router"
import { Button, Conditional, Header, List, Main, Refresh, Text, View } from "../../shared/components"
import { useTheme } from "../../shared/hooks/theme"
import { FiltersJob } from "../components/Filter"
import { CardJob } from "../components/Job"
import { SKELETON_JOBS } from "../constants/jobs"
import { useFilter } from "../hooks/filters"
import { useJobs } from "../hooks/jobs"

export const ScreenHome = () => {
  const { data, error, isLoading, isRefetching, refetch } = useJobs()
  const router = useRouter()
  const isEmpty = data?.length === 0

  return (
    <Main bg="background.400" edges={["top", "right", "left"]} headerBG="background.100">
      <Conditional conditional={Boolean(error)}>
        <ScreenHomeError />
        <View flex={1} gap={0}>
          <FiltersJob />
          <Conditional conditional={isEmpty}>
            <ScreenHomeEmpty />
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
                pt: 0,
              }}
            />
          </Conditional>
        </View>
      </Conditional>
    </Main>
  )
}

const ScreenHomeEmpty = () => {
  const { refetch } = useJobs()
  const { getQueryParams, clear } = useFilter()
  const queryParams = getQueryParams()
  const hasParams = Boolean(queryParams.length)
  return (
    <View flex={1} justify="center" align="center" p="md">
      <View flex={1} justify="center" align="center" bg="background.100" r="xs" p="md">
        <Header
          size="lg"
          title="No hay trabajos disponibles en este momento."
          subtitle="Por favor, intenta nuevamente más tarde."
          ta="center"
        />

        <Button
          onPress={() => (hasParams ? clear() : refetch())}
          rightSection={<FontAwesome6 name={hasParams ? "broom" : "rotate-right"} size={10} />}
        >
          {hasParams ? "Limpiar filtros" : "Reintentar"}
        </Button>
      </View>
    </View>
  )
}

const ScreenHomeError = () => {
  const { theme } = useTheme()
  const { refetch } = useJobs()
  return (
    <View flex={1} justify="center" align="center" p="md">
      <View flex={1} justify="center" align="center" bg="background.100" r="xs" p="md" gap="md">
        <View w="100%" pt="xs" pb="xs" gap="xs" align="center">
          <FontAwesome6 name="triangle-exclamation" size={54} color={theme.colors.red[500]} />
          <Text ta="center" c={theme.colors.gray[700]}>
            Ocurrió un error al cargar el producto seleccionado.
          </Text>
        </View>
        <Button fullWidth variant="light" onPress={() => refetch()} rightSection={<FontAwesome6 name="rotate-right" />}>
          Reintentar
        </Button>
      </View>
    </View>
  )
}
