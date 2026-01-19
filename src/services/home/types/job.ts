export type Job = {
  id: number
  url: string
  title: string
  company_name: string
  category: string
  job_type: "contract" | "full_time" | "part_time" | "internship" | "temporary"
  publication_date: string
  candidate_required_location: string
  salary: string
  description: string
  company_logo_url: string | null
}
