import { useMutation } from "@tanstack/react-query"
import { useForm } from "form-atoms"
import { useAtom } from "jotai"
import { Keyboard } from "react-native"
import { useSession } from "../../shared/hooks/session"
import { AtomLoginForm, AtomLoginPending } from "../stores/login"

const FakeAPILogin = async (email: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(email)
    }, 1500)
  })

export const useAuthLogin = () => {
  const { setSession } = useSession()
  const [isPending, setIsPending] = useAtom(AtomLoginPending)
  const { mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: FakeAPILogin,
  })
  const form = useForm(AtomLoginForm)

  const onSubmit = form.submit(async (values) => {
    Keyboard.dismiss()
    setIsPending(true)
    const sessionToken = await mutateAsync(values.email)
    setSession(sessionToken)
    setIsPending(false)
    form.reset()
  })

  return {
    form,
    onSubmit,
    isPending,
  }
}
