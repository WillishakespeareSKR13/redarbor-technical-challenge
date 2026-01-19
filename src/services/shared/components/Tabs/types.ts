import { Href, ScreenProps } from "expo-router"

export type TabsScreenParams = {
  icon?: React.ReactNode
  hide?: boolean
  index?: number
  hideTabs?: boolean
  href?: Href
}

export type TabsScreenProps = Omit<ScreenProps, "options"> & {
  options?: ScreenProps["options"] & TabsScreenParams
}
