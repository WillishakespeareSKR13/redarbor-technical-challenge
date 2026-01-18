import { useAtom } from "jotai"
import { AtomSplash } from "../stores/splash"

export const useSplash = () => {
  const [splash, setSplash] = useAtom(AtomSplash)

  const show = () => setSplash(true)
  const hide = () => setSplash(false)

  return { splash, show, hide }
}
