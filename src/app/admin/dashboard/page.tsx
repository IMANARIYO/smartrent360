"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"

export default function AdminDashboard() {
  const { language } = useI18n()

  const kpis = [
    { label: language === "en" ? "Total Users" : "Abayumubazi Bose", value: "1,234", icon: "👥", trend: "+12%" },
    { label: language === "en" ? "Verified Agents" : "Abizamizi Bemewe", value: "156", icon: "⭐", trend: "+8%" },
    { label: language === "en" ? "Total Listings" : "Ibigitabo Byose", value: "3,421", icon: "🏠", trend: "+15%" },
    { label: language === "en" ? "Pending Verifications" : "Iyemezo Itegura", value: "23", icon: "⏳", trend: "-5%" },
    { label: language === "en" ? "Total Leads" : "Amagambo Amakuru Ayo", value: "892", icon: "📊", trend: "+22%" },
    {
      label: language === "en" ? "Platform Revenue" : "Iniranshe ry'Platform",
      value: "RWF 12.5M",
      icon: "💰",
      trend: "+18%",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Admin Dashboard" : "Icyiciro cy'Umusanzu"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {kpis.map((kpi, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="text-3xl">{kpi.icon}</div>
                <span
                  className={`text-sm px-2 py-1 rounded ${kpi.trend.startsWith("+") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {kpi.trend}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{kpi.label}</p>
              <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {language === "en" ? "Management Tools" : "Ibikoresho by'Ibihuha"}
            </h2>
            <div className="space-y-3">
              <Link href="/admin/verify-users">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "User Verification Queue" : "Imirongo y'Iyemezo"} (23)
                </Button>
              </Link>
              <Link href="/admin/verify-properties">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "Property Verification" : "Iyemezo ry'Ibigitabo"} (18)
                </Button>
              </Link>
              <Link href="/admin/leads-management">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "Leads Management" : "Kwibuha Amagambo"} (45)
                </Button>
              </Link>
              <Link href="/admin/commission-tracking">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "Commission Tracking" : "Kureba Komisyon"}
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {language === "en" ? "Recent Activity" : "Ibikorwa Bitangana"}
            </h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg text-sm">
                  <span className="text-foreground">{language === "en" ? `Activity #${i}` : `Ibikorwa #${i}`}</span>
                  <span className="text-muted-foreground text-xs">5 mins ago</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
