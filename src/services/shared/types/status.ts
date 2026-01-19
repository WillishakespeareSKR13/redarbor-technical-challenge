export type Status<T> = {
  id: T
  name: string
  subtitle?: string
  color: `#${string}`
}

export type StatusArray<T> = Status<T>[]
