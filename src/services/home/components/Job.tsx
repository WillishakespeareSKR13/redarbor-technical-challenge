import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { Image } from "react-native"
import { ActionButton, Shadow, ShadowProps, Tag, Text, View } from "../../shared/components"
import { useSession } from "../../shared/hooks/session"
import { useTheme } from "../../shared/hooks/theme"
import { Sanitize } from "../../shared/utils/sanitize"
import { JOB_TYPES_STATUS } from "../constants/jobs"
import { useFavorites } from "../hooks/favorites"
import { Job } from "../types/job"

type CardJobProps = ShadowProps & {
  client?: Job
}

const MAX_LENGTH = 200

export const CardJob = (props: CardJobProps) => {
  const { client, isLoading, ...rest } = props
  const { session } = useSession()
  const { theme } = useTheme()
  const description = client?.description ?? ""
  const subtitle = `${Sanitize(description)}`.slice(0, MAX_LENGTH).trim().replace(/\n/g, " ")
  const jobType = JOB_TYPES_STATUS.find((jt) => jt.id === client?.job_type)
  const { getFavorite, toggleFavorite } = useFavorites()
  const isFavorite = getFavorite(session!, client?.id ?? 0)

  if (isLoading) return <CardJobSkeleton />

  return (
    <Shadow {...rest}>
      <View w="100%" direction="column" gap="md">
        <View w="100%" direction="column" gap="xxs">
          <View w="100%" direction="row" justify="space-between" align="flex-start" gap="xs">
            <Image
              style={{
                width: 42,
                height: 42,
                backgroundColor: theme.colors.background[400],
                borderRadius: 8,
                borderColor: theme.colors.background[600],
                borderWidth: 1,
              }}
              source={{
                uri: client?.company_logo_url || "https://via.placeholder.com/50x50.png?text=No+Logo",
              }}
            />
            <View flex={1} direction="column" gap="xxs">
              <Text fz="h4" fw={700} numberOfLines={1}>
                {client?.title}
              </Text>
              <Text w="100%" fz="body2" c="gray.500" numberOfLines={1}>
                {client?.url}
              </Text>
            </View>
            <ActionButton
              c={isFavorite ? "red.600" : "gray.500"}
              variant="light"
              size={36}
              icon={<FontAwesome6 name="heart" solid size={16} />}
              onPress={() => toggleFavorite(session!, client?.id ?? 0)}
            />
          </View>
          <Text fz="body1" c="gray.800" numberOfLines={3}>
            {subtitle}
            {description.length > MAX_LENGTH ? "..." : ""}
          </Text>
        </View>
        <View w="100%" direction="row" gap="md" justify="space-between">
          <View w="auto" direction="row" gap="md" justify="flex-start" shrink={1}>
            <Tag label={client?.company_name || "N/A"} icon="building" shrink={0} />
            <Tag label={client?.candidate_required_location || "N/A"} icon="location-dot" />
          </View>
          <Tag label={jobType?.name || "N/A"} icon="briefcase" shrink={0} iconPosition="right" />
        </View>
      </View>
    </Shadow>
  )
}

const CardJobSkeleton = () => (
  <Shadow>
    <View w="100%" direction="column" gap="md">
      <View w="100%" direction="column" gap="xxs">
        <View w="100%" direction="row" justify="space-between" align="flex-start" gap="xs">
          <View w={42} h={42} bg="background.400" r={8} />
          <View flex={1} direction="column" gap="xxs">
            <View w="80%" bg="background.400" h={16} r={4} />
            <View w="60%" h={14} r={4} bg="background.400" />
          </View>
          <View w={36} h={36} r={18} bg="background.400" />
        </View>
        <View w="100%" h={48} r={4} bg="background.400" />
      </View>
      <View w="100%" direction="row" gap="md" justify="space-between">
        <View flex={1} h={24} bg="background.400" r={12} />
        <View flex={1} h={24} bg="background.400" r={12} />
      </View>
    </View>
  </Shadow>
)
