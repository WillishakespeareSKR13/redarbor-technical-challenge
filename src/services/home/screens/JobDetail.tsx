import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Image } from "react-native"
import RenderHtml from "react-native-render-html"
import { ActionButton, Button, Divider, Header, Main, Scroll, Shadow, Tag, Text, View } from "../../shared/components"
import { useSession } from "../../shared/hooks/session"
import { useTheme } from "../../shared/hooks/theme"
import { FormatCurrency, FormatDate } from "../../shared/utils/format"
import { JobShare } from "../components/Share"
import { JOB_TYPES_STATUS } from "../constants/jobs"
import { useFavorites } from "../hooks/favorites"
import { useJobDetails } from "../hooks/jobs"

export const ScreenJobDetail = () => {
  const { theme } = useTheme()
  const params = useLocalSearchParams()
  const { data, isLoading, error } = useJobDetails(Number(params.jobId))
  const { session } = useSession()
  const { getFavorite, toggleFavorite } = useFavorites()
  const isFavorite = getFavorite(session!, data?.id ?? 0)
  const jobType = JOB_TYPES_STATUS.find((jt) => jt.id === data?.job_type)

  if (error) return <ScreenJobDetailError />
  if (isLoading) return <ScreenJobDetailSkeleton />

  return (
    <Main
      edges={["top", "right", "left"]}
      bg="background.100"
      header={
        <Header
          bg="background.100"
          p="md"
          withBack
          size="xxl"
          title={data?.title || "Detalle del Trabajo"}
          subtitle={data?.company_name || ""}
          rightSection={
            <ActionButton
              c={isFavorite ? "red.600" : "gray.500"}
              variant="light"
              size={40}
              icon={<FontAwesome6 name="heart" solid size={18} />}
              onPress={() => toggleFavorite(session!, data?.id ?? 0)}
            />
          }
        />
      }
    >
      <Divider />
      <Scroll showsVerticalScrollIndicator={false} direction="column">
        <View w="100%" direction="row" align="flex-start" gap="md">
          <Image
            style={{
              width: 64,
              height: 64,
              backgroundColor: theme.colors.background[400],
              borderRadius: 12,
              borderColor: theme.colors.background[600],
              borderWidth: 1,
            }}
            source={{
              uri: data?.company_logo_url || "https://via.placeholder.com/64x64.png?text=No+Logo",
            }}
          />
          <View w="100%" direction="column" gap="xs">
            <Tag icon="location-dot" label={data?.candidate_required_location || "N/A"} />
            <Tag icon="building" label={data?.company_name || "N/A"} />
            <Tag icon="briefcase" label={jobType?.name || "N/A"} />
            {data?.salary && <Tag icon="money-bill" label={FormatCurrency(data.salary)} />}
          </View>
        </View>
        <Tag icon="calendar" label={FormatDate(data?.publication_date)} />
        <Divider />
        <JobShare job={data} />
        <Divider />
        <View w="100%" direction="column" gap="md">
          <Header
            size="xl"
            title="Detalle del empleo"
            leftSection={<FontAwesome6 name="file-lines" size={20} color={theme.colors.blue[500]} />}
          />
          <RenderHtml
            tagsStyles={{
              p: { color: theme.colors.foreground[100] },
              ul: { color: theme.colors.foreground[100] },
              ol: { color: theme.colors.foreground[100] },
              li: { color: theme.colors.foreground[100] },
              strong: { color: theme.colors.foreground[100], fontWeight: "bold" },
              em: { color: theme.colors.foreground[100], fontStyle: "italic" },
              h1: { color: theme.colors.foreground[100], fontSize: 24, fontWeight: "bold" },
              h2: { color: theme.colors.foreground[100], fontSize: 22, fontWeight: "bold" },
              h3: { color: theme.colors.foreground[100], fontSize: 20, fontWeight: "bold" },
              h4: { color: theme.colors.foreground[100], fontSize: 18, fontWeight: "bold" },
              h5: { color: theme.colors.foreground[100], fontSize: 16, fontWeight: "bold" },
              h6: { color: theme.colors.foreground[100], fontSize: 14, fontWeight: "bold" },
              span: { color: theme.colors.foreground[100] },
            }}
            source={{ html: data?.description || "" }}
          />
        </View>
        <Divider />
        <JobShare job={data} />
      </Scroll>
    </Main>
  )
}

const ScreenJobDetailSkeleton = () => {
  return (
    <Main edges={["top", "right", "left"]} bg="background.100">
      <Scroll showsVerticalScrollIndicator={false} direction="column" p="md" gap="md">
        <Shadow h={32} w={200} r="sm" bg="background.400" />
        <Shadow h={64} w={64} r="lg" bg="background.400" />
        <Shadow h={20} w={150} r="sm" bg="background.400" />
        <Shadow h={20} w={100} r="sm" bg="background.400" />
        <Shadow h={20} w={120} r="sm" bg="background.400" />
        <Shadow h={20} w={80} r="sm" bg="background.400" />
        <Divider />
        <Shadow h={20} w={120} r="sm" bg="background.400" />
        <Divider />
        <Shadow h={24} w={180} r="sm" bg="background.400" />
        <Shadow h={200} w={"100%"} r="sm" bg="background.400" />
        <Divider />
        <Shadow h={24} w={180} r="sm" bg="background.400" />
      </Scroll>
    </Main>
  )
}

const ScreenJobDetailError = () => {
  const { theme } = useTheme()
  const router = useRouter()
  return (
    <View flex={1} justify="center" align="center" p="md">
      <View flex={1} justify="center" align="center" bg="background.100" r="xs" p="md" gap="md">
        <View w="100%" pt="xs" pb="xs" gap="xs" align="center">
          <FontAwesome6 name="triangle-exclamation" size={54} color={theme.colors.red[500]} />
          <Text ta="center" c={theme.colors.gray[700]}>
            No se pudo cargar el detalle del trabajo. Por favor, intenta nuevamente.
          </Text>
        </View>
        <Button
          fullWidth
          variant="light"
          onPress={() => router.back()}
          leftSection={<FontAwesome6 name="arrow-left" />}
        >
          Volver
        </Button>
      </View>
    </View>
  )
}
