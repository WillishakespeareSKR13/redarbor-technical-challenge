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
          <RenderHtml source={{ html: data?.description || "" }} />
        </View>
        <Divider />
        <JobShare job={data} />
      </Scroll>
    </Main>
  )
}

const ScreenJobDetailSkeleton = () => {
  return (
    <Scroll showsVerticalScrollIndicator={false}>
      <View flex={1} p="md" direction="column" gap="md">
        <Shadow>
          <View w="100%" direction="column" gap="md">
            <View w="100%" direction="row" align="flex-start" gap="md">
              <View w={64} h={64} bg="background.400" r={12} />
              <View flex={1} direction="column" gap="xxs">
                <View w="100%" h={20} bg="background.400" r={4} />
                <View w="70%" h={16} bg="background.400" r={4} />
              </View>
              <View w={40} h={40} bg="background.400" r={20} />
            </View>
            <Divider />
            <View w="100%" direction="column" gap="xs">
              <View w="80%" h={16} bg="background.400" r={4} />
              <View w="60%" h={16} bg="background.400" r={4} />
            </View>
            <Divider />
            <View w="100%" direction="row" gap="md">
              <View flex={1} h={40} bg="background.400" r={8} />
              <View flex={1} h={40} bg="background.400" r={8} />
            </View>
            <Divider />
            <View w="50%" h={16} bg="background.400" r={4} />
          </View>
        </Shadow>
        <Shadow>
          <View w="100%" direction="column" gap="md">
            <View w="60%" h={20} bg="background.400" r={4} />
            <Divider />
            <View w="100%" h={100} bg="background.400" r={4} />
          </View>
        </Shadow>
        <View w="100%" direction="column" gap="sm">
          <View w="100%" h={48} bg="background.400" r={8} />
          <View w="100%" direction="row" gap="sm">
            <View flex={1} h={48} bg="background.400" r={8} />
            <View flex={1} h={48} bg="background.400" r={8} />
          </View>
        </View>
      </View>
    </Scroll>
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
