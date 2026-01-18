import { clientQuery } from "@/src/api/client"
import { QueryClientProvider } from "@tanstack/react-query"

type ProviderQueryProps = {
  children: React.ReactNode
}

export const ProviderQuery = (props: ProviderQueryProps) => {
  const { children } = props
  return <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
}
