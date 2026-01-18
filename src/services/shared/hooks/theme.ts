import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist, StateStorage } from "zustand/middleware"

import { themes } from "../theme"
import { Theme, ThemeKeys } from "../theme/types"

interface ThemeStore {
  key: ThemeKeys
  theme: Theme
  set: (theme: ThemeKeys) => void
  toggle?: () => void
}

const zustandStorage: StateStorage = {
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, value)
  },
  getItem: async (name) => {
    return await AsyncStorage.getItem(name)
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name)
  },
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      key: "light",
      theme: themes["light"],
      set: (theme) => set(() => ({ key: theme, theme: themes[theme] })),
      toggle: () =>
        set((state) => {
          const newThemeKey: ThemeKeys = state.key === "light" ? "dark" : "light"
          return { key: newThemeKey, theme: themes[newThemeKey] }
        }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
)
