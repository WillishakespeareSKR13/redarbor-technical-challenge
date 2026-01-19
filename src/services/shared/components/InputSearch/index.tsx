import Ionicons from "@expo/vector-icons/Ionicons"
import { atom, useAtom } from "jotai"
import { ActivityIndicator } from "react-native"
import { useWritting } from "../../hooks/writting"
import { ActionButton } from "../ActionButton"
import { Dots } from "../Dots"
import { InputText } from "../InputText"
import { Styles } from "./styles"
import { InputSearchProps } from "./types"

const DEFAULT_ATOM = atom("")

const InputSearchSection = (props: InputSearchProps) => {
  const { isWritting, isRefetching } = props
  const styles = Styles(props)
  if (isRefetching) return <ActivityIndicator size="small" color={styles.icon_active.color} />
  if (isWritting) return <Dots c={styles.icon_active.color} />
  return <Ionicons name="search" size={20} color={styles.icon.color} />
}

export const InputSearch = (props: InputSearchProps) => {
  const { atom, isRefetching, value, onSearch } = props

  const styles = Styles(props)
  const [search, setSearch] = useAtom(atom ?? DEFAULT_ATOM)

  const { isWritting, writting, setWritting, clear } = useWritting({
    value: value ?? search,
    onEnd: onSearch ?? setSearch,
  })

  return (
    <InputText
      containerProps={{ style: styles.input_container }}
      leftSectionProps={{ style: styles.input_section_left }}
      style={styles.input}
      leftSection={<InputSearchSection isWritting={isWritting} isRefetching={isRefetching} />}
      rightSection={
        writting.length > 0 ? (
          <ActionButton
            c="background.300"
            size={20}
            onPress={clear}
            icon={<Ionicons name="close" size={12} color={styles.action_icon.color} />}
          />
        ) : null
      }
      placeholder="Buscar cliente por nombre o celular"
      value={writting}
      onChangeText={(text) => setWritting(text)}
      separator={false}
    />
  )
}
