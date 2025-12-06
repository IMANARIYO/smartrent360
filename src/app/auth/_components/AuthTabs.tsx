"use client"

import { useState } from "react"
import { Tabs, TabList, TabTrigger, TabContent } from "@/components/ui/tabs"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { useI18n } from "@/i18n/i18n-provider"

export function AuthTabs() {
  const { language } = useI18n()
  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login">
        <TabList className="grid w-full grid-cols-2 mb-6">
          <TabTrigger 
            value="login" 
            onClick={() => setActiveTab("login")}
            className="data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {language === "en" ? "Sign In" : "Injira"}
          </TabTrigger>
          <TabTrigger 
            value="register" 
            onClick={() => setActiveTab("register")}
            className="data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {language === "en" ? "Sign Up" : "Andikishe"}
          </TabTrigger>
        </TabList>

        <TabContent value="login" activeTab={activeTab}>
          <LoginForm />
        </TabContent>

        <TabContent value="register" activeTab={activeTab}>
          <RegisterForm />
        </TabContent>
      </Tabs>
    </div>
  )
}