import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { themes } from "../theme"
import { Theme, ThemeKeys } from "../theme/types"
import { ZustandStorage } from "../types/zustand"

interface ThemeStore {
  key: ThemeKeys
  theme: Theme
  setTheme: (theme: ThemeKeys) => void
  toggle?: () => void
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      key: "light",
      theme: themes["light"],
      setTheme: (theme) => set(() => ({ key: theme, theme: themes[theme] })),
      toggle: () =>
        set((state) => {
          const newThemeKey: ThemeKeys = state.key === "light" ? "dark" : "light"
          return { key: newThemeKey, theme: themes[newThemeKey] }
        }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
)
