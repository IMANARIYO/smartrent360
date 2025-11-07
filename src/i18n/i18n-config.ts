export const defaultLanguage = "en"
export const supportedLanguages = ["en", "rw"] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export interface I18nConfig {
  defaultLanguage: SupportedLanguage
  supportedLanguages: readonly SupportedLanguage[]
}

export const i18nConfig: I18nConfig = {
  defaultLanguage,
  supportedLanguages,
}
