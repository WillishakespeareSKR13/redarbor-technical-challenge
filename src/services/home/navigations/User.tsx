import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { TabBar, Tabs } from "../../shared/components"
import { TabsScreenProps } from "../../shared/components/Tabs/types"

const TABS: TabsScreenProps[] = [
  {
    name: "index",
    options: {
      title: "Inicio",
      href: "/home",
      icon: <FontAwesome6 name="house" />,
    },
  },
  {
    name: "job-details",
    options: {
      hide: true,
    },
  },
  {
    name: "favorites",
    options: {
      title: "Favoritos",
      href: "/home/favorites",
      icon: <FontAwesome6 name="heart" solid />,
    },
  },
  {
    name: "account",
    options: {
      title: "Cuenta",
      href: "/home/account",
      icon: <FontAwesome6 name="user" solid />,
    },
  },
]

export const NavigationUser = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      backBehavior="fullHistory"
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen key={tab.name} {...tab} />
      ))}
    </Tabs>
  )
}
