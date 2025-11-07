"use client"

import type React from "react"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"

export default function InterestedForm() {
  const { language } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <div className="p-8">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {language === "en" ? "Express Interest" : "Menya Uko Ushaka"}
              </h1>
              <p className="text-muted-foreground mb-6">
                {language === "en"
                  ? "Share your contact information with the agent"
                  : "Shiranya amakuru yawe n'umwihangane"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "en" ? "Full Name" : "Izina Ryose"}
                  </label>
                  <Input name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "en" ? "Phone Number" : "Nimero y'Teleporo"}
                  </label>
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
                  <Input name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "en" ? "Message" : "Ubutumwa"}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  {language === "en" ? "Submit" : "Ohereza"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h1 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "Request Received!" : "Umubwira Wakiriye!"}
              </h1>
              <p className="text-muted-foreground mb-6">
                {language === "en"
                  ? "Your request has been sent to the agent. You will be contacted soon."
                  : "Umubwira wawe wagusohotse kumwihangane. Akugereranya muri shake."}
              </p>
              <Link href="/">
                <Button className="w-full">{language === "en" ? "Back to Home" : "Gusubira Ahabanza"}</Button>
              </Link>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
