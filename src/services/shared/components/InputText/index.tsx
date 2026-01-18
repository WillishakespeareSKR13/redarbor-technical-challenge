import FontAwesome from "@expo/vector-icons/FontAwesome6"
import { useState } from "react"
import { Keyboard, TextInput, TouchableHighlight } from "react-native"
import { useFieldError, useFieldInput } from "../../utils/field"
import { Header } from "../Header"
import { View } from "../View"
import { Styles } from "./styles"
import { InputTextProps } from "./types"

export const InputText = (props: InputTextProps) => {
  const {
    title,
    subtitle,
    headerProps,
    field,
    style,
    secureTextEntry,
    leftSection,
    rightSection,
    leftSectionProps,
    rightSectionProps,
    containerProps,
    sectionProps,
    separator = true,
    ...rest
  } = props
  const [show, setShow] = useState(!secureTextEntry)
  const input = useFieldInput(field)
  const { state } = useFieldError(field)
  const hasLeftSection = Boolean(leftSection)
  const hasRightSection = Boolean(rightSection)

  const styles = Styles({ status: state.validateStatus })

  return (
    <Header {...headerProps} title={title} subtitle={subtitle} field={field}>
      <View {...containerProps} style={[styles.container, containerProps?.style]}>
        {hasLeftSection && (
          <View
            {...sectionProps}
            {...leftSectionProps}
            style={[styles.section, separator && styles.sectionLeft, sectionProps?.style, leftSectionProps?.style]}
          >
            {leftSection}
          </View>
        )}
        <TextInput
          placeholderTextColor={styles.placeholder.color}
          {...input?.props}
          {...rest}
          secureTextEntry={!show}
          style={[styles.input, style]}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        {hasRightSection && (
          <View
            {...sectionProps}
            {...rightSectionProps}
            style={[styles.section, separator && styles.sectionRight, sectionProps?.style, rightSectionProps?.style]}
          >
            {rightSection}
          </View>
        )}
        {secureTextEntry && (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setShow(!show)}
            style={[styles.section, styles.sectionRight]}
          >
            <FontAwesome style={styles.eye} name={show ? "eye-slash" : "eye"} color={styles.eye.color} />
          </TouchableHighlight>
        )}
      </View>
    </Header>
  )
}
