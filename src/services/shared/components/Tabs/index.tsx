import { Tabs as TabsExpo } from "expo-router"
import { TabsScreenProps } from "./types"

export const Tabs = Object.assign(TabsExpo, {
  Screen: TabsExpo.Screen as (props: TabsScreenProps) => null,
  Protected: TabsExpo.Protected,
})
