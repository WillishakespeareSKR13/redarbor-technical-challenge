import { Provider } from "jotai"
import { JotaiStore } from "../stores/jotai"

type ProviderStoreProps = {
  children: React.ReactNode
}

export const ProviderStore = (props: ProviderStoreProps) => {
  const { children } = props

  return <Provider store={JotaiStore}>{children}</Provider>
}
