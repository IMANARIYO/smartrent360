"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/i18n/i18n-provider"
import type { ReactNode } from "react"


export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
