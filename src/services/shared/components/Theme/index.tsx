import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useTheme } from "../../hooks/theme"
import { Button } from "../Button"

export const Theme = () => {
  const { toggle, key } = useTheme()
  return (
    <Button
      fullWidth
      gap="xs"
      onPress={toggle}
      rightSection={<FontAwesome6 name={key === "dark" ? "moon" : "sun"} solid />}
    >
      Cambiar Tema
    </Button>
  )
}
