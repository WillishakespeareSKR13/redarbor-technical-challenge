export type SkeletonProps = {
  isLoading?: boolean
  shimmerSpeed?: number
  shimmerBackgroundColor?: string
  gradientColors?: [string, string]
  defaultRadius?: number
  animationType?: "gradient" | "pulse" | "none"
  children: React.ReactNode
}
