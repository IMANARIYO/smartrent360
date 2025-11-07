"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import { Button } from "@/components/ui/button"

export function Header() {
  const { language, setLanguage } = useI18n()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">SmartRent360</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/properties"
              className="text-neutral-600 hover:text-primary transition-colors text-sm font-medium"
            >
              {language === "en" ? "Properties" : "Inyubako"}
            </Link>
            <Link
              href="/what-we-do"
              className="text-neutral-600 hover:text-primary transition-colors text-sm font-medium"
            >
              {language === "en" ? "What We Do" : "Dukunze"}
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-primary transition-colors text-sm font-medium">
              {language === "en" ? "About" : "Kuri Ibibwi"}
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-primary transition-colors text-sm font-medium">
              {language === "en" ? "Contact" : "Kontakta"}
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex gap-1 bg-neutral-100 p-1 rounded-lg">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === "en" ? "bg-white text-primary-500 shadow-sm" : "text-neutral-600 hover:text-primary-500"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("rw")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === "rw" ? "bg-white text-primary-500 shadow-sm" : "text-neutral-600 hover:text-primary-500"
                  }`}
              >
                KN
              </button>
            </div>

            {/* Auth Buttons */}
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                {language === "en" ? "Sign In" : "Injira"}
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="sm">
                {language === "en" ? "Sign Up" : "Andikishe"}
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
