"use client"

import type React from "react"


import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/i18n/i18n-provider"

export default function Register() {
  const { language } = useI18n()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "tenant",
    phone: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Mock registration - replace with actual API
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {language === "en" ? "Create Account" : "Guka Akawunti"}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === "en" ? "Join SmartRent360 today" : "Jya muri SmartRent360 umuliro"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Full Name" : "Izina Ryose"}
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={language === "en" ? "John Doe" : "Jean Doe"}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Phone Number" : "Nimero y'Teleporo"}
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+250 7XX XXX XXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Email" : "Imeyili"}
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={language === "en" ? "your@email.com" : "yac@imeyili.com"}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Account Type" : "Ubwoko bw'Akawunti"}
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="tenant">{language === "en" ? "Tenant" : "Umuntu wizeye mu nzu"}</option>
                <option value="commissioner">{language === "en" ? "Commissioner" : "Umwihangane"}</option>
                <option value="landlord">{language === "en" ? "Landlord" : "Umubare"}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Password" : "Ijambure"}
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Confirm Password" : "Menya Ijambure"}
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? language === "en"
                  ? "Creating account..."
                  : "Gukora akawunti..."
                : language === "en"
                  ? "Sign Up"
                  : "Andikishe"}
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            {language === "en" ? "Already have an account?" : "Wabu akawunti?"}{" "}
            <Link href="/auth/login" className="text-primary-500 hover:text-primary-600 font-semibold">
              {language === "en" ? "Sign in" : "Injira"}
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
