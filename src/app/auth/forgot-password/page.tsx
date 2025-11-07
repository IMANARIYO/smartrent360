/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"


import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/i18n/i18n-provider"

export default function ForgotPassword() {
  const { t, language } = useI18n()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {language === "en" ? "Reset Password" : "Subiramo Ijambure"}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === "en"
              ? "Enter your email to receive reset instructions"
              : "Injiza imeyili yawe kugirango tuguhe ibimenyetso byo gusubiramo ijambure"}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Email Address" : "Aderesi y'Imeyili"}
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === "en" ? "your@email.com" : "yac@imeyili.com"}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                {language === "en" ? "Send Reset Link" : "Ohereza Ikintu cy'Gusubiramo"}
              </Button>
            </form>
          ) : (
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-center">
              <p className="text-primary-900 font-semibold mb-4">
                {language === "en" ? "Check your email!" : "Reba imeyili yawe!"}
              </p>
              <p className="text-primary-700 text-sm">
                {language === "en"
                  ? "We've sent reset instructions to your email address."
                  : "Twagusohotse ibimenyetso byo gusubiramo kuri imeyili yawe."}
              </p>
            </div>
          )}

          <p className="text-center text-muted-foreground mt-6">
            <Link href="/auth/login" className="text-primary-500 hover:text-primary-600 font-semibold">
              {language === "en" ? "Back to login" : "Gusubira mu injira"}
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
