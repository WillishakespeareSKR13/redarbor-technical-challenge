import "react-native-reanimated"

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ProviderFont } from "../providers/Fonts"
import { ProviderQuery } from "../providers/Query"
import { ProviderSplash } from "../providers/Splash"
import { ProviderStore } from "../providers/Store"
export { ErrorBoundary } from "expo-router"

type LayoutRootProps = {
  children?: React.ReactNode
}

export const LayoutRoot = (props: LayoutRootProps) => {
  const { children } = props

  return (
    <ProviderQuery>
      <ProviderStore>
        <GestureHandlerRootView>
          <ProviderFont>
            <ProviderSplash>{children}</ProviderSplash>
          </ProviderFont>
        </GestureHandlerRootView>
      </ProviderStore>
    </ProviderQuery>
  )
}
