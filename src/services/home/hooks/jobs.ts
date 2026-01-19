import { axios } from "@/src/api/client"
import { useQuery } from "@tanstack/react-query"
import { Job } from "../types/job"
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
