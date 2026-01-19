import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { ZustandStorage } from "../../shared/types/zustand"

interface FavoritesStore {
  favorities: Record<number, boolean>
  getFavorite: (id: number) => boolean
  toggleFavorite: (id: number) => void
  getAllFavorites: () => number[]
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorities: {} as Record<number, boolean>,
      getFavorite: (id: number) => get().favorities[id] ?? false,
      toggleFavorite: (id: number) =>
        set((state) => ({ favorities: { ...state.favorities, [id]: !state.favorities[id] } })),
      getAllFavorites: () =>
        Object.entries(get().favorities)
          .filter(([_, v]) => v)
          .map(([k, _]) => Number(k)),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
)
