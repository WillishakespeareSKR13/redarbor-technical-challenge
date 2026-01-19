import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter"
import { Splash } from "../components"

type ProviderFontProps = {
  children: React.ReactNode
}

export const ProviderFont = (props: ProviderFontProps) => {
  const { children } = props
  const [fontsLoaded] = useFonts({
    "Inter-thin": Inter_100Thin,
    "Inter-extraLight": Inter_200ExtraLight,
    "Inter-light": Inter_300Light,
    "Inter-regular": Inter_400Regular,
    "Inter-medium": Inter_500Medium,
    "Inter-bold": Inter_700Bold,
    "Inter-extraBold": Inter_800ExtraBold,
    "Inter-black": Inter_900Black,
  })

  if (!fontsLoaded) return <Splash />

  return <>{children}</>
}
