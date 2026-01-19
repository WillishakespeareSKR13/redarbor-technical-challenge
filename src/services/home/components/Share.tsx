import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { Linking, Share } from "react-native"
import { Button, View } from "../../shared/components"
import { useSession } from "../../shared/hooks/session"
import { useFavorites } from "../hooks/favorites"
import { Job } from "../types/job"

type JobShareProps = {
  job?: Job
}

export const JobShare = (props: JobShareProps) => {
  const { job } = props
  const { session } = useSession()
  const { getFavorite, toggleFavorite } = useFavorites()
  const isFavorite = getFavorite(session!, job?.id ?? 0)

  const HandleApply = async () => {
    if (!job || !job?.url) return
    const supported = await Linking.canOpenURL(job.url)
    if (!supported) return
    await Linking.openURL(job.url)
  }

  const HandleShare = async () => {
    await Share.share({
      message: `${job?.title} en ${job?.company_name}\n${job?.url}`,
      title: job?.title,
    }).catch((error) => console.error("Error sharing:", error))
  }

  return (
    <View w="100%" direction="column" gap="sm">
      <Button fullWidth onPress={HandleApply} leftSection={<FontAwesome6 name="paper-plane" size={16} />}>
        Aplicar al empleo
      </Button>
      <Button
        fullWidth
        variant={isFavorite ? "filled" : "outline"}
        c={isFavorite ? "red.600" : "foreground.100"}
        onPress={() => toggleFavorite(session!, job?.id ?? 0)}
        leftSection={<FontAwesome6 name="heart" solid={isFavorite} size={16} />}
      >
        {isFavorite ? "Quitar de favoritos" : "Guardar"}
      </Button>
      <Button
        fullWidth
        variant="light"
        onPress={HandleShare}
        leftSection={<FontAwesome6 name="share-nodes" size={16} />}
      >
        Compartir
      </Button>
    </View>
  )
}
