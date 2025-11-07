"use client"

import type React from "react"
import { useI18n } from "@/i18n/i18n-provider"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabList, TabTrigger, TabContent } from "@/components/ui/tabs"
import Link from "next/link"
import { useState } from "react"
import { LogIn, UserPlus } from "lucide-react"

export default function AuthPage() {
  const { language } = useI18n()
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("tenant")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-primary/5 to-transparent flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md border-primary/20">
        <Tabs defaultValue="login">
          <CardHeader className="pb-4">
            <TabList className="grid w-full grid-cols-2">
              <TabTrigger value="login" onClick={() => setActiveTab("login")}>
                {language === "en" ? "Sign In" : "Injira"}
              </TabTrigger>
              <TabTrigger value="register" onClick={() => setActiveTab("register")}>
                {language === "en" ? "Sign Up" : "Andikishe"}
              </TabTrigger>
            </TabList>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Login Tab */}
            <TabContent value="login" activeTab={activeTab}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{language === "en" ? "Sign In" : "Injira"}</h2>
                  <p className="text-muted-foreground mt-2">
                    {language === "en" ? "Access your SmartRent360 account" : "Sukuza akawunti kawe ka SmartRent360"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="role-login">{language === "en" ? "Account Type" : "Ubwoko bw'Akawunti"}</Label>
                    <select
                      id="role-login"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-2 mt-2 border border-neutral-200 rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="tenant">{language === "en" ? "Tenant" : "Umuntu wizeye mu nzu"}</option>
                      <option value="commissioner">{language === "en" ? "Commissioner" : "Umwihangane"}</option>
                      <option value="landlord">{language === "en" ? "Landlord" : "Umubare"}</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="email-login">{language === "en" ? "Email" : "Imeyili"}</Label>
                    <Input
                      id="email-login"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === "en" ? "your@email.com" : "yac@imeyili.com"}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password-login">{language === "en" ? "Password" : "Ijambure"}</Label>
                    <Input
                      id="password-login"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-neutral-300" />
                      <span className="text-muted-foreground">{language === "en" ? "Remember me" : "Nzambare"}</span>
                    </label>
                    <Link href="/auth/forgot-password" className="text-primary hover:underline">
                      {language === "en" ? "Forgot password?" : "Wanditse ijambure?"}
                    </Link>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2" disabled={loading}>
                    <LogIn className="w-4 h-4" />
                    {loading
                      ? language === "en"
                        ? "Signing in..."
                        : "Kuinjira..."
                      : language === "en"
                        ? "Sign In"
                        : "Injira"}
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground">
                  {language === "en" ? "Don't have an account?" : "Ntagiwe akawunti?"}{" "}
                  <button onClick={() => setActiveTab("register")} className="text-primary font-medium hover:underline">
                    {language === "en" ? "Sign up" : "Andikishe"}
                  </button>
                </p>
              </div>
            </TabContent>

            {/* Register Tab */}
            <TabContent value="register" activeTab={activeTab}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Create Account" : "Gukora Konti"}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {language === "en" ? "Join SmartRent360 today" : "Injira kuri SmartRent360 uyu munsi"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="role-reg">{language === "en" ? "Register as" : "Wiyandikisha nka"}</Label>
                    <div className="flex gap-2 mt-2">
                      <Button
                        type="button"
                        onClick={() => setRole("tenant")}
                        variant={role === "tenant" ? "primary" : "outline"}
                        className="flex-1"
                      >
                        {language === "en" ? "Tenant" : "Umubare"}
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setRole("commissioner")}
                        variant={role === "commissioner" ? "primary" : "outline"}
                        className="flex-1"
                      >
                        {language === "en" ? "Commissioner" : "Umwihangane"}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="name-reg">{language === "en" ? "Full Name" : "Izina Ryose"}</Label>
                    <Input
                      id="name-reg"
                      placeholder={language === "en" ? "John Doe" : "Jean Mukuri"}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email-reg">{language === "en" ? "Email" : "Imeyili"}</Label>
                    <Input
                      id="email-reg"
                      type="email"
                      placeholder={language === "en" ? "your@email.com" : "yac@imeyili.com"}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password-reg">{language === "en" ? "Password" : "Ijambure"}</Label>
                    <Input id="password-reg" type="password" placeholder="••••••••" className="mt-2" />
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="rounded border-neutral-300 mt-1" />
                    <span className="text-muted-foreground">
                      {language === "en" ? "I agree to the Terms of Service" : "Yamvumira Amategeko y'Ubwiyunge"}
                    </span>
                  </label>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2">
                    <UserPlus className="w-4 h-4" />
                    {language === "en" ? "Create Account" : "Gukora Konti"}
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground">
                  {language === "en" ? "Already have an account?" : "Harabyo akawunti?"}{" "}
                  <button onClick={() => setActiveTab("login")} className="text-primary font-medium hover:underline">
                    {language === "en" ? "Sign in" : "Injira"}
                  </button>
                </p>
              </div>
            </TabContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  )
}
