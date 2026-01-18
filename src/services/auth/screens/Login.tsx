import { Button, Header, InputText, Main, View } from "../../shared/components"
import { useAuthLogin } from "../hooks/useLogin"

export const ScreenLogin = () => {
  const { form, isPending, onSubmit } = useAuthLogin()
  return (
    <Main bg="background.100" edges={["top", "bottom", "right", "left"]}>
      <View flex={1} justify="center" align="center" px="lg">
        <Header size="xxxl" title="Inicia sesión" subtitle="¡Bienvenido de nuevo!" />
        <View w="100%" gap="md" my="md">
          <InputText
            autoCapitalize="none"
            title="Email"
            subtitle="Por favor ingresa tu correo electrónico"
            id="email"
            placeholder="correo@ejemplo.com"
            field={form.fieldAtoms.email}
          />
        </View>
        <View gap="xxs">
          <Button fullWidth variant="filled" isLoading={isPending} onPress={() => onSubmit()}>
            Iniciar sesión
          </Button>
        </View>
      </View>
    </Main>
  )
}
