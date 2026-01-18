import { fieldAtom, formAtom } from "form-atoms"
import { zodValidate } from "form-atoms/zod"
import { atom } from "jotai"
import { z } from "zod"

export const SchemaLogin = z.object({
  email: z.email("El correo no es válido"),
})

export const FieldsLogin = {
  email: fieldAtom({
    value: "",
    validate: zodValidate(SchemaLogin.shape.email, {
      on: "change",
    }),
  }),
}

export const AtomLoginForm = formAtom(FieldsLogin)
export const AtomLoginPending = atom(false)
