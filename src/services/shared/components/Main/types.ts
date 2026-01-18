import { DimensionValue } from "react-native"
import { ColorScheme } from "../../theme/types"
import { SafeAreaEdges } from "../SafeArea"
import { ViewProps } from "../View/types"

export type MainProps = ViewProps & {
  header?: React.ReactNode
  footer?: React.ReactNode
  background?: React.ReactNode
  footerBG?: ColorScheme
  footerBGSize?: DimensionValue
  headerBG?: ColorScheme
  headerBGSize?: DimensionValue
  edges?: SafeAreaEdges
}
