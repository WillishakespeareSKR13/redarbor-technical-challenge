export const Sanitize = (text?: string, lines?: boolean) => {
  const withLines = lines ? text?.replace(/<br\s*\/?>/gi, "\n")?.replace(/<p>/gi, "\n \n <p>") : text
  const sanitized = withLines?.replace(/<[^>]*>?/gm, "")
  const trimmed = sanitized?.trim()
  const replaced = trimmed?.replace(/&nbsp;/g, " ")
  return replaced
}
