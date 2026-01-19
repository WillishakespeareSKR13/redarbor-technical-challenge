import { NavigationUser } from "@/src/services/home/navigations/User"
import { AuthPrivate } from "@/src/services/shared/auth/Private"

const Layout = () => {
  return (
    <AuthPrivate>
      <NavigationUser />
    </AuthPrivate>
  )
}

export default Layout
