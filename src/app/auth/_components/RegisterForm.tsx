"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import PhoneInput from "react-phone-number-input"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useI18n } from "@/i18n/i18n-provider"
import { UserPlus, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import "react-phone-number-input/style.css"
import { RegisterRequest, UserRole } from "../_types/auth_types"
import { userApi } from "../_services/auth_services"

export function RegisterForm() {
    const { language } = useI18n()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formData, setFormData] = useState<RegisterRequest>({
        name: "",
        phone: "",
        password: "",
        role: "TENANT",
        nationalId: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        if (formData.password !== confirmPassword) {
            setError(language === "en" ? "Passwords do not match" : "Amagambo y'ibanga ntabwo ahura")
            setLoading(false)
            return
        }

        try {
            const response = await userApi.register(formData)

            if (response.data.status === "success") {
                setSuccess(true)
                setTimeout(() => router.push("/auth/login"), 2000)
            }
        } catch (err: unknown) {
            const error = err as { response?: { data?: { message?: string } } }
            setError(error.response?.data?.message || "Registration failed")
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <Card className="w-full max-w-md">
                <CardContent className="pt-6 text-center">
                    <div className="text-green-600 mb-4">✓</div>
                    <h3 className="font-semibold mb-2">
                        {language === "en" ? "Registration Successful!" : "Kwiyandikisha Byagenze Neza!"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {language === "en"
                            ? "Your account is pending verification. Redirecting to login..."
                            : "Konti yawe itegereje kwemezwa. Tugukurura ku kuraguza..."}
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-center">
                    {language === "en" ? "Create Account" : "Gukora Konti"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">
                            {language === "en" ? "Full Name" : "Izina Ryose"}
                        </Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="mt-2"
                        />
                    </div>

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
                        <Label htmlFor="nationalId">
                            {language === "en" ? "National ID" : "Indangamuntu"}
                        </Label>
                        <Input
                            id="nationalId"
                            value={formData.nationalId}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '').slice(0, 16)
                                setFormData({ ...formData, nationalId: value })
                            }}
                            placeholder="1199980123456789"
                            maxLength={16}
                            required
                            className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            {language === "en" 
                                ? "16-digit Rwanda National ID (1=Citizen, 2=Refugee, 3=Foreigner)"
                                : "Indangamuntu y'imibare 16 (1=Umunyarwanda, 2=Impunzi, 3=Umunyamahanga)"}
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="role">
                            {language === "en" ? "Register as" : "Wiyandikisha nka"}
                        </Label>
                        <select
                            id="role"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                            <option value="TENANT">
                                {language === "en" ? "Tenant" : "Umukira"}
                            </option>
                            <option value="LANDLORD">
                                {language === "en" ? "Landlord" : "Nyir'inzu"}
                            </option>
                            <option value="COMMISSIONER">
                                {language === "en" ? "Commissioner/Agent" : "Umwihangane"}
                            </option>
                        </select>
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

                    <div>
                        <Label htmlFor="confirmPassword">
                            {language === "en" ? "Confirm Password" : "Emeza Ijambo ry'Ibanga"}
                        </Label>
                        <div className="relative mt-2">
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {confirmPassword && formData.password !== confirmPassword && (
                            <p className="text-xs text-red-500 mt-1">
                                {language === "en" ? "Passwords do not match" : "Amagambo y'ibanga ntabwo ahura"}
                            </p>
                        )}
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                    >
                        <UserPlus className="w-4 h-4 mr-2" />
                        {loading
                            ? (language === "en" ? "Creating Account..." : "Gukora Konti...")
                            : (language === "en" ? "Create Account" : "Gukora Konti")
                        }
                    </Button>
                </form>
                
                <div className="text-center mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                        {language === "en" ? "Already have an account?" : "Usanzwe ufite konti?"}{" "}
                        <Link href="/auth/login" className="text-primary font-medium hover:underline">
                            {language === "en" ? "Sign in" : "Injira"}
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}