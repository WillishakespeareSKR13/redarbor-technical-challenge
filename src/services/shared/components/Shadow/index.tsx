import { useAnimationCard } from "../../animations/card"
import { AnimatedTouchableHighlight } from "../Button"
import { View } from "../View"
import { Styles } from "./styles"
import { ShadowProps } from "./types"

export const ShadowAnimate = (props: ShadowProps) => {
  const { isLoading, children } = props
  const { animation } = useAnimationCard(props)

  const styles = Styles(props)

  if (!isLoading) return children

  return (
    <View
      style={[
        styles.view,
        !props.flat && styles.shadow,
        props.isSelected && styles.selected,
        props.style,
        animation,
        styles.flat,
      ]}
    >
      {children}
    </View>
  )
}

export const Shadow = (props: ShadowProps) => {
  const { children, style, flat, shadowless, isSelected, type = "view", isLoading, ...rest } = props

  const { animation } = useAnimationCard(props)
  const styles = Styles(props)

  const Component = type === "view" ? View : AnimatedTouchableHighlight

  return (
    <ShadowAnimate {...props}>
      <Component
        underlayColor={styles.underlay_color.color}
        {...rest}
        style={[
          styles.view,
          styles.border,
          (!shadowless || flat) && styles.shadow,
          flat && styles.flat,
          isSelected && styles.selected,
          style,
          !isLoading && animation,
        ]}
      >
        {children}
      </Component>
    </ShadowAnimate>
  )
}

export * from "./types"
