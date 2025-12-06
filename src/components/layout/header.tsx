"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Drawer } from "vaul"
import { useState } from "react"

export function Header() {
  const { language, setLanguage } = useI18n()
  const [open, setOpen] = useState(false)

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

            {/* Auth Buttons - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
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

            {/* Mobile Menu */}
            <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
              <Drawer.Trigger className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                  className="right-2 top-2 bottom-2 fixed z-50 outline-none w-[280px] flex"
                  style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
                >
                  <div className="bg-white h-full w-full grow p-5 flex flex-col rounded-2xl shadow-xl">
                    <Drawer.Title className="font-bold text-lg text-primary mb-6">SmartRent360</Drawer.Title>
                    <nav className="flex flex-col gap-4 flex-1">
                      <Link href="/properties" onClick={() => setOpen(false)} className="text-neutral-600 hover:text-primary transition-colors font-medium">
                        {language === "en" ? "Properties" : "Inyubako"}
                      </Link>
                      <Link href="/what-we-do" onClick={() => setOpen(false)} className="text-neutral-600 hover:text-primary transition-colors font-medium">
                        {language === "en" ? "What We Do" : "Dukunze"}
                      </Link>
                      <Link href="/about" onClick={() => setOpen(false)} className="text-neutral-600 hover:text-primary transition-colors font-medium">
                        {language === "en" ? "About" : "Kuri Ibibwi"}
                      </Link>
                      <Link href="/contact" onClick={() => setOpen(false)} className="text-neutral-600 hover:text-primary transition-colors font-medium">
                        {language === "en" ? "Contact" : "Kontakta"}
                      </Link>
                      <div className="border-t pt-4 mt-auto space-y-2">
                        <Link href="/auth/login" onClick={() => setOpen(false)} className="block">
                          <Button variant="ghost" className="w-full">
                            {language === "en" ? "Sign In" : "Injira"}
                          </Button>
                        </Link>
                        <Link href="/auth/login" onClick={() => setOpen(false)} className="block">
                          <Button className="w-full">
                            {language === "en" ? "Sign Up" : "Andikishe"}
                          </Button>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>
      </nav>
    </header>
  )
}
