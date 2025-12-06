"use client"

import Image from "next/image"
import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { RegisterForm } from "../_components/RegisterForm"
import { useI18n } from "@/i18n/i18n-provider"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const { language } = useI18n()

  return (
    <MainLayout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-villa-kigali.jpg"
            alt="Luxury villa in Kigali"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-6 inline-block bg-white/20 text-white border-white/30 backdrop-blur-sm">
              {language === "en" ? "Join SmartRent360" : "Injira kuri SmartRent360"}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "en" ? "Create Your Account" : "Gukora Konti Yawe"}
            </h1>
            <p className="text-white/90 mb-8">
              {language === "en"
                ? "Join thousands of Rwandans finding their perfect homes."
                : "Injira mu banyarwanda bashakisha inzu zabo nziza."}
            </p>
          </div>

          <RegisterForm />

          <div className="text-center mt-6">
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === "en" ? "Back to Login" : "Garuka ku Kwinjira"}
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
