import { PrimitiveAtom } from "jotai"
import { InputTextProps } from "../InputText/types"

export type InputSearchProps = InputTextProps & {
  atom?: PrimitiveAtom<string>
  isRefetching?: boolean
  isWritting?: boolean
  onSearch?: (value: string) => void
}
