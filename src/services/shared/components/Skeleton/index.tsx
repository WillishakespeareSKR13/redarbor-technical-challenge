import { AutoSkeletonView } from "react-native-auto-skeleton"
import { useTheme } from "../../hooks/theme"
import { SkeletonProps } from "./types"

export const Skeleton = (props: SkeletonProps) => {
  const { children, isLoading, ...rest } = props
  const { theme } = useTheme()
  if (!isLoading) return children
  return (
    <AutoSkeletonView
      isLoading={isLoading ?? false}
      animationType="gradient"
      defaultRadius={4}
      gradientColors={[theme.colors.background[100], theme.colors.background[500]]}
      shimmerBackgroundColor={theme.colors.background[100]}
      shimmerSpeed={0.8}
      {...rest}
    >
      {children}
    </AutoSkeletonView>
  )
}
