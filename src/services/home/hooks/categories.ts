import { axios } from "@/src/api/client"
import { useQuery } from "@tanstack/react-query"
import { Category } from "../types/category"

export const useCategories = () => {
  const query = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => axios.get(`/remote-jobs/categories`).then((res) => res?.data?.jobs ?? []),
  })
  return query
}
