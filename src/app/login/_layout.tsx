import { AuthPublic } from "@/src/services/shared/auth/Public"
import { Slot } from "expo-router"

const Layout = () => {
  return (
    <AuthPublic>
      <Slot />
    </AuthPublic>
  )
}

export default Layout
