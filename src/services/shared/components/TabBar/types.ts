import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { NavigationRoute, ParamListBase } from "@react-navigation/native"
import { TabsScreenParams } from "../Tabs/types"

export type TabBarProps = BottomTabBarProps & {
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  descriptors: Record<string, BottomTabDescriptorExtended>
}

export type TabBarItemProps = NavigationRoute<ParamListBase, string> & {
  id: string
  index: number
  tabBar?: TabBarProps
}

export type BottomTabDescriptorExtended = BottomTabBarProps["descriptors"][string] & {
  options: BottomTabBarProps["descriptors"][string]["options"] & TabsScreenParams
}
