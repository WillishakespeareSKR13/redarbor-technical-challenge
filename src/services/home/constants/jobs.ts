import { Colors } from "../../shared/theme/tokens/colors"
import { StatusArray } from "../../shared/types/status"
import { Job } from "../types/job"

export const SKELETON_JOBS = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  title: "Cargando título...",
  description: "Cargando descripción...",
  client: {
    id: `client-${index + 1}`,
    name: "Cargando nombre...",
    email: "Cargando email...",
    phone: "Cargando teléfono...",
  },
  candidate_required_location: "Cargando ubicación...",
  company_logo_url: null,
  company_name: "Cargando compañía...",
  job_type: "contract",
  publication_date: new Date().toISOString(),
  salary: "Cargando salario...",
  url: "Cargando URL...",
  category: "Cargando categoría...",
})) as Job[]

export const JOB_TYPES_STATUS: StatusArray<Job["job_type"]> = [
  {
    id: "contract",
    name: "Contrato",
    subtitle: "Trabajos por contrato",
    color: Colors.blue[500],
  },
  {
    id: "full_time",
    name: "Tiempo completo",
    subtitle: "Trabajos de tiempo completo",
    color: Colors.green[500],
  },
  {
    id: "part_time",
    name: "Medio tiempo",
    subtitle: "Trabajos de medio tiempo",
    color: Colors.orange[500],
  },
  {
    id: "internship",
    name: "Pasantía",
    subtitle: "Trabajos de pasantía",
    color: Colors.purple[500],
  },
  {
    id: "temporary",
    name: "Temporal",
    subtitle: "Trabajos temporales",
    color: Colors.red[500],
  },
]
