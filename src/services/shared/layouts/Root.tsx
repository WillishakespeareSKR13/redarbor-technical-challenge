import "react-native-reanimated"

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ProviderSplash } from "../providers/Splash"
import { ProviderStore } from "../providers/Store"
export { ErrorBoundary } from "expo-router"

type LayoutRootProps = {
  children?: React.ReactNode
}

export const LayoutRoot = (props: LayoutRootProps) => {
  const { children } = props

  return (
    <ProviderStore>
      <GestureHandlerRootView>
        <ProviderSplash>{children}</ProviderSplash>
      </GestureHandlerRootView>
    </ProviderStore>
  )
}
