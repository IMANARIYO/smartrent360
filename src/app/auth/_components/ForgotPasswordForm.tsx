"use client"

import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/i18n/i18n-provider"
import { Mail } from "lucide-react"
import "react-phone-number-input/style.css"

export function ForgotPasswordForm() {
  const { language } = useI18n()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [phone, setPhone] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
    }, 2000)
  }

  if (success) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="text-green-600 mb-4">✓</div>
          <h3 className="font-semibold mb-2">
            {language === "en" ? "Reset Link Sent!" : "Ubutumwa Bwoherejwe!"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {language === "en" 
              ? "Check your phone for password reset instructions."
              : "Reba telefoni yawe kugira ngo ubone amabwiriza yo guhindura ijambo ry'ibanga."}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">
          {language === "en" ? "Reset Password" : "Guhindura Ijambo ry'Ibanga"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="phone">
              {language === "en" ? "Phone Number" : "Nomero ya Telefoni"}
            </Label>
            <PhoneInput
              international
              defaultCountry="RW"
              value={phone}
              onChange={(value) => setPhone(value || "")}
              className="mt-2"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            <Mail className="w-4 h-4 mr-2" />
            {loading 
              ? (language === "en" ? "Sending..." : "Kohereza...")
              : (language === "en" ? "Send Reset Link" : "Kohereza Ubutumwa")
            }
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}