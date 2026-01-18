import { Children, isValidElement } from "react"
import { ConditionalProps } from "./types"

const ComponentTrue = (props: ConditionalProps) => props.children
const ComponentFalse = (props: ConditionalProps) => props.children

const GetType = (type: any) => {
  if (type === ComponentTrue) return "true"
  if (type === ComponentFalse) return "false"
  return "none"
}

export const Conditional = (props: ConditionalProps) => {
  const { conditional, children } = props

  const arrayChildren = Children.toArray(children)
  if (arrayChildren.length === 2) return conditional ? arrayChildren[0] : arrayChildren[1]

  const childrens = arrayChildren.map((child) => {
    const isValid = isValidElement(child)
    if (!isValid) return { type: "none", children: undefined }
    return {
      type: GetType(child.type),
      children: (child.props as { children?: React.ReactNode }).children,
    }
  })

  const childrensByConditional = childrens?.filter((e) => e.type === (conditional ? "true" : "false"))

  return childrensByConditional?.map((e) => e.children)
}

Conditional.True = ComponentTrue
Conditional.False = ComponentFalse
