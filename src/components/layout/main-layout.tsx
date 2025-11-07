import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
