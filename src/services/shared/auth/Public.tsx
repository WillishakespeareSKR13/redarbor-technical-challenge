import { Redirect } from "expo-router"
import { useSession } from "../hooks/session"

type AuthPublicProps = {
  children: React.ReactNode
}

export const AuthPublic = (props: AuthPublicProps) => {
  const { children } = props
  const { session } = useSession()

  if (session) return <Redirect href="/home" />

  return children
}
