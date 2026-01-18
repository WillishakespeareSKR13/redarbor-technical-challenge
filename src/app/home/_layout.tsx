import { AuthPrivate } from "@/src/services/shared/auth/Private"
import { Slot } from "expo-router"

const Layout = () => {
  return (
    <AuthPrivate>
      <Slot />
    </AuthPrivate>
  )
}

export default Layout
