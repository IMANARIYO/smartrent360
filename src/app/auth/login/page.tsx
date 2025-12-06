"use client"

import Image from "next/image"
import { MainLayout } from "@/components/layout/main-layout"

import { useI18n } from "@/i18n/i18n-provider"
import { Badge } from "@/components/ui/badge"
import { AuthTabs } from "../_components/AuthTabs"

export default function AuthPage() {
  const { language } = useI18n()

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-house-rwanda.jpg"
            alt="Modern house in Rwanda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Text */}
            <div className="text-white">
              <Badge className="mb-6 inline-block bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {language === "en" ? "Welcome to SmartRent360" : "Karibu kuri SmartRent360"}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {language === "en"
                  ? "Find Your Perfect Home in Rwanda"
                  : "Shakisha Inzu Yacu Neza mu Rwanda"}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {language === "en"
                  ? "Join thousands of Rwandans using our trusted platform for verified properties and agents."
                  : "Injira mu banyarwanda barimo gukoresha platform yacu yizewe y'inyubako n'abamukozi bemejwe."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>{language === "en" ? "Verified Properties" : "Inyubako Zemewe"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>{language === "en" ? "Trusted Agents" : "Abamukozi Bizewe"}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="flex justify-center lg:justify-end">
              <AuthTabs />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
