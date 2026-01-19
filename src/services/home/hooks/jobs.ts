import { axios } from "@/src/api/client"
import { useQuery } from "@tanstack/react-query"
import { Job } from "../types/job"
import { useFavorites } from "./favorites"
import { useFilter } from "./filters"

export const useJobs = () => {
  const { getQueryParams, typeJob } = useFilter()
  const queryParams = getQueryParams()
  const query = useQuery<Job[]>({
    queryKey: ["jobs", queryParams, typeJob],
    queryFn: () =>
      axios
        .get(`/remote-jobs?${queryParams}`)
        .then((res) => (res.data?.jobs ?? []).filter((job: Job) => (typeJob ? job.job_type === typeJob : true))),
  })
  return query
}

export const useJobFavorites = () => {
  const { getAllFavorites } = useFavorites()
  const favoriteIds = getAllFavorites()
  const query = useQuery<Job[]>({
    queryKey: ["jobs_favorites", favoriteIds],
    queryFn: () =>
      axios
        .get(`/remote-jobs`)
        .then((res) => (res?.data?.jobs ?? []).filter((job: Job) => favoriteIds.includes(job.id))),
  })
  return query
}
