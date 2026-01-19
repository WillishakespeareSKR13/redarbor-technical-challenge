import { Category } from "../types/category"

export const SKELETON_CATEGORIES = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  name: "Cargando categoría...",
  slug: "cargando-categoria...",
})) as Category[]
