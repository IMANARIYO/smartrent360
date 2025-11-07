import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const noteSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" })

export const metadata: Metadata = {
  title: "SmartRent360 - Rwanda Property Management",
  description: "A modern platform for verifying, managing, and discovering properties across Rwanda.",
  keywords: ["rental", "property", "rwanda", "housing"],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${noteSans.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
