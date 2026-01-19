import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { ZustandStorage } from "../../shared/types/zustand"

interface FavoritesStore {
  favorities: Record<string, Record<number, boolean>>
  getFavorite: (user: string, id: number) => boolean
  toggleFavorite: (user: string, id: number) => void
  getAllFavorites: (user: string) => number[]
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorities: {} as Record<string, Record<number, boolean>>,
      getFavorite: (user: string, id: number) => get().favorities[user]?.[id] ?? false,
      toggleFavorite: (user: string, id: number) =>
        set((state) => ({
          favorities: {
            ...state.favorities,
            [user]: {
              ...state.favorities[user],
              [id]: !state.favorities[user]?.[id],
            },
          },
        })),
      getAllFavorites: (user: string) =>
        Object.entries(get().favorities[user] ?? {})
          .filter(([_, v]) => v)
          .map(([k, _]) => Number(k)),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
)
