import { Splash } from "../components"
import { useSplash } from "../hooks/splash"

type ProviderSplashProps = {
  children: React.ReactNode
}

export const ProviderSplash = (props: ProviderSplashProps) => {
  const { children } = props
  const { splash } = useSplash()
  if (splash) return <Splash />
  return <>{children}</>
}
