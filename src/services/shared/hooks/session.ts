import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { ZustandStorage } from "../types/zustand"

interface SessionStore {
  session: string | null
  setSession: (session: string) => void
  closeSession: () => void
}

export const useSession = create<SessionStore>()(
  persist(
    (set) => ({
      session: null,
      setSession: (session) => set(() => ({ session })),
      closeSession: () => set(() => ({ session: null })),
    }),
    {
      name: "session",
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
)
