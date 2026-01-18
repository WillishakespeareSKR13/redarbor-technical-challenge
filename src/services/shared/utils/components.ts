import { cloneElement } from "react"

export const CloneElement = (component?: any, variables?: any) =>
  !component || typeof component === "string"
    ? undefined
    : cloneElement(component, {
        ...variables,
        ...(component.props || {}),
      } as React.ComponentProps<any>)
