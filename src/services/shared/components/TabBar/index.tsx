import { useEffect, useState } from "react"
import { GestureDetector } from "react-native-gesture-handler"
import { ReduceMotion, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAnimationButtonTouch } from "../../animations/button"
import { CloneElement } from "../../utils/components"
import { AnimatedTouchableHighlight } from "../Button"
import { Text } from "../Text"
import { View } from "../View"
import { Styles } from "./styles"
import { TabBarItemProps, TabBarProps } from "./types"

export const TabBar = (props: TabBarProps) => {
  const { header, footer, state } = props
  const [height, setHeight] = useState(0)
  const opacity = useSharedValue(1)
  const marginBottom = useSharedValue(0)
  const insets = useSafeAreaInsets()

  const tab = state && props.descriptors[state.routes[state.index].key]
  const hideTabs = tab?.options?.hideTabs ?? false

  const styles = Styles()

  useEffect(() => {
    opacity.value = withTiming(hideTabs ? 0 : 1, { duration: 250 })
    marginBottom.value = withSpring(hideTabs ? -height : 0, {
      stiffness: 900,
      damping: 120,
      mass: 2,
      reduceMotion: ReduceMotion.System,
    })
  }, [hideTabs, height])

  const animated_container = useAnimatedStyle(() => ({
    marginBottom: marginBottom.value,
  }))
  const animated_tabs = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <View
      style={[styles.container, { paddingBottom: insets.bottom }, animated_container]}
      onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
    >
      {header}
      <View style={[styles.tabs, animated_tabs]}>
        {state?.routes?.map((route, index) => (
          <TabBarItem {...route} tabBar={props} index={index} id={route.key} key={route.key} />
        ))}
      </View>
      {footer}
    </View>
  )
}

const TabBarItem = (props: TabBarItemProps) => {
  const { id, name, tabBar } = props

  const tab = tabBar?.descriptors[id]
  const title = tab?.options.title ?? props.name
  const icon = tab?.options.icon
  const hide = tab?.options?.hide ?? false
  const state = tabBar?.state
  const active = state?.index === props.index

  const animatedTouch = useAnimationButtonTouch(0.08)

  const styles = Styles({ active: false })

  if (hide) return null

  return (
    <GestureDetector gesture={animatedTouch.gesture}>
      <AnimatedTouchableHighlight
        onPress={() => tab?.navigation.navigate(name)}
        underlayColor={styles.underlay.color}
        style={[styles.tab, animatedTouch.animation]}
      >
        <View style={[styles.content]}>
          {icon && CloneElement(icon, { size: 20, color: styles.icon.color })}
          <Text style={[styles.label]}>{title}</Text>
        </View>
      </AnimatedTouchableHighlight>
    </GestureDetector>
  )
}
