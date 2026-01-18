import { FieldAtom, fieldAtom, useField, useFieldErrors, useFieldState, useInputFieldProps } from "form-atoms"

const DEFAULT_ATOM = fieldAtom({ value: null })

export const useFieldInput = (field?: FieldAtom<any>) => {
  if (!field) return undefined
  const fieldDef = field
  const fieldProps = useField(fieldDef)
  const props = useInputFieldProps(fieldDef)
  return {
    field: fieldDef,
    ...fieldProps,
    props: {
      value: fieldProps.state.value,
      name: props.name,
      onChangeText: (text: string) => {
        fieldProps.actions.setValue(text)
      },
      onBlur: () => {
        props.onBlur?.({ currentTarget: { value: fieldProps.state.value } } as any)
      },
      onEndEditing: () => {
        props.onBlur?.({ currentTarget: { value: fieldProps.state.value } } as any)
      },
      onFocus: () => fieldProps.actions.focus(),
      onPressIn: () => fieldProps.actions.setTouched(true),
    },
  }
}

export const useFieldError = (field?: FieldAtom<any>) => {
  const errors = useFieldErrors(field ?? DEFAULT_ATOM)
  const state = useFieldState(field ?? DEFAULT_ATOM)
  return {
    errors,
    state,
  }
}
