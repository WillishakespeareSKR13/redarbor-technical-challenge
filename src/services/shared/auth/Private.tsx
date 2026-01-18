import { Redirect } from "expo-router"
import { useSession } from "../hooks/session"

type AuthPrivateProps = {
  children: React.ReactNode
}

export const AuthPrivate = (props: AuthPrivateProps) => {
  const { children } = props
  const { session } = useSession()

  if (!session) return <Redirect href="/login" />

  return children
}
