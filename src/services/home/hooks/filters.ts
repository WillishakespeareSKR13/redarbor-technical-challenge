import { create } from "zustand"
import { Job } from "../types/job"

interface FIlterStore {
  category: string
  search: string
  typeJob: Job["job_type"] | ""
  setCategory: (category: string) => void
  setSearch: (search: string) => void
  setTypeJob: (typeJob: Job["job_type"] | "") => void
  getQueryParams: () => string
  clear: () => void
}

export const useFilter = create<FIlterStore>((set, get) => ({
  category: "",
  search: "",
  typeJob: "",
  limit: 5,
  setCategory: (category: string) => set({ category }),
  setSearch: (search: string) => set({ search }),
  setTypeJob: (typeJob: Job["job_type"] | "") => set({ typeJob }),
  getQueryParams: () => {
    const { category, search } = get()
    const params = new URLSearchParams()
    if (category) params.append("category", category)
    if (search) params.append("search", search)
    return params.toString()
  },
  clear: () => set({ category: "", search: "" }),
}))
