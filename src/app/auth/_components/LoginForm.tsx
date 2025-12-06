"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import PhoneInput from "react-phone-number-input"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useI18n } from "@/i18n/i18n-provider"
import { LogIn, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import "react-phone-number-input/style.css"
import { LoginRequest } from "../_types/auth_types"
import { userApi } from "../_services/auth_services"

export function LoginForm() {
  const { language } = useI18n()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<LoginRequest>({
    phone: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await userApi.login(formData)

      if (response.data.status === "success") {
        // Store token
        sessionStorage.setItem("accessToken", response.data.data!.token)

        // Redirect based on role
        const role = response.data.data!.user.role
        const redirectPath = role === "ADMIN" ? "/admin/dashboard"
          : role === "COMMISSIONER" ? "/commissioner/dashboard"
            : role === "LANDLORD" ? "/landlord/dashboard"
              : "/tenant/search"

        router.push(redirectPath)
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      setError(error.response?.data?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">
          {language === "en" ? "Sign In" : "Injira"}
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
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value || "" })}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="password">
              {language === "en" ? "Password" : "Ijambo ry'Ibanga"}
            </Label>
            <div className="relative mt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            <LogIn className="w-4 h-4 mr-2" />
            {loading
              ? (language === "en" ? "Signing in..." : "Kwinjira...")
              : (language === "en" ? "Sign In" : "Injira")
            }
          </Button>
        </form>
        
        <div className="text-center mt-4 space-y-2">
          <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
            {language === "en" ? "Forgot password?" : "Wibagiwe ijambo ry'ibanga?"}
          </Link>
          <p className="text-sm text-muted-foreground">
            {language === "en" ? "Don't have an account?" : "Nta konti ufite?"}{" "}
            <Link href="/auth/register" className="text-primary font-medium hover:underline">
              {language === "en" ? "Sign up" : "Andikishe"}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}