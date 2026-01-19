export const FormatDate = (dateString?: string) => {
  const date = new Date(dateString ?? new Date())
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const FormatCurrency = (amount: string | number, currency: string = "USD") => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
  }).format(Number(amount))
}
