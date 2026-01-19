import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { ZustandStorage } from "../../shared/types/zustand"

interface FavoritesStore {
  favorities: Record<string, boolean>
  getFavorite: (id: string) => boolean
  toggleFavorite: (id: string) => void
  getAllFavorites: () => string[]
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorities: {} as Record<string, boolean>,
      getFavorite: (id: string) => get().favorities[id] ?? false,
      toggleFavorite: (id: string) =>
        set((state) => ({ favorities: { ...state.favorities, [id]: !state.favorities[id] } })),
      getAllFavorites: () =>
        Object.entries(get().favorities)
          .filter(([_, v]) => v)
          .map(([k, _]) => k),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
)
