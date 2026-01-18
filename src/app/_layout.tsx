import { Slot } from "expo-router"
import { LayoutRoot } from "../services/shared/layouts/Root"

const Root = () => (
  <LayoutRoot>
    <Slot />
  </LayoutRoot>
)

export default Root
