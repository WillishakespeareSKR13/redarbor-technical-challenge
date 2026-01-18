import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { useTheme } from "../hooks/theme"
import { Theme } from "../theme/types"

type Styles = Partial<ViewStyle | TextStyle | ImageStyle>

type Variants<P> = {
  variants?: {
    [X in keyof P]?: Record<string, Styles>
  }
}

type NamedStyles<T, P> =
  | {
      [P in keyof T]: Styles
    }
  | Variants<P>

export const StyleSheetTheme = <TProps, TStyles extends NamedStyles<TStyles, TProps>>(
  callback: (theme: Theme, props: TProps) => TStyles
) => {
  return (props?: TProps) => {
    const { theme } = useTheme()
    const styles = callback(theme, props!)
    const stylesWithVariants = Object.keys(styles).reduce((acc, key) => {
      const value = styles[key as keyof TStyles] as any
      const hasVariants = value?.variants && typeof value.variants === "object"
      if (!hasVariants) return { ...acc, [key]: value }
      const variants = value.variants as Record<string, Styles>
      const stylesVariants = Object.keys(variants).reduce((variantAcc, variantKey) => {
        const variantValue = variants[variantKey]
        const propValue = props ? (props[variantKey as keyof TProps] as string) : null
        if (!propValue) return variantAcc
        const currentStyles = variantValue[propValue as keyof typeof variantValue] as Styles
        if (!currentStyles) return variantAcc
        return { ...variantAcc, ...currentStyles }
      }, value as Styles)
      return { ...acc, [key]: stylesVariants }
    }, {} as TStyles)
    return StyleSheet.create(stylesWithVariants as TStyles)
  }
}
