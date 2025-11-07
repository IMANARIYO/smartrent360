"use client"

import { createContext, type ReactNode, useContext, useEffect, useState } from "react"
import { type SupportedLanguage, defaultLanguage, supportedLanguages } from "./i18n-config"
import en from "./en.json"
import rw from "./rw.json"

interface I18nContextType {
  language: SupportedLanguage
  setLanguage: (lang: SupportedLanguage) => void
  t: (key: string, defaultValue?: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = { en, rw }

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, prop) => current?.[prop], obj) || path
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("language")
    if (stored && supportedLanguages.includes(stored as SupportedLanguage)) {
      setLanguageState(stored as SupportedLanguage)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: SupportedLanguage) => {
    if (supportedLanguages.includes(lang)) {
      setLanguageState(lang)
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string, defaultValue?: string): string => {
    const trans = translations[language]
    const value = getNestedValue(trans, key)
    return value || defaultValue || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
