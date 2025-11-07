"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandlordDashboard() {
  const { language } = useI18n()

  const stats = [
    {
      label: language === "en" ? "Total Properties" : "Ibigitabo Byose",
      value: "8",
      icon: "🏠",
    },
    {
      label: language === "en" ? "Active Tenants" : "Abizeye mu Nzu Bijyakazi",
      value: "12",
      icon: "👥",
    },
    {
      label: language === "en" ? "Pending Requests" : "Umubwira w'Ubwiyunge",
      value: "5",
      icon: "📋",
    },
    {
      label: language === "en" ? "Verification Status" : "Ubwoko bw'Iyemezo",
      value: "Verified",
      icon: "✓",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {language === "en" ? "Landlord Dashboard" : "Icyiciro cy'Umubare"}
          </h1>
          <Link href="/landlord/add-property">
            <Button>{language === "en" ? "Add Property" : "Ongeraho Igitabo"}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {language === "en" ? "Tenant Requests" : "Umubwira w'Abizeye mu Nzu"}
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">
                      {language === "en" ? `Request #${i}` : `Umubwira #${i}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? "Pending review" : "Kumenya mu muhande"}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    {language === "en" ? "Review" : "Menya"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {language === "en" ? "Quick Links" : "Ikintu cy'Kwihiramu"}
            </h2>
            <div className="space-y-3">
              <Link href="/landlord/profile">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "My Profile" : "Umwimerere Wanjye"}
                </Button>
              </Link>
              <Link href="/landlord/properties">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "My Properties" : "Ibigitabo Byanjye"}
                </Button>
              </Link>
              <Link href="/landlord/assign-agent">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "Assign Agent" : "Teeka Umwihangane"}
                </Button>
              </Link>
              <Link href="/landlord/complaints">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  {language === "en" ? "Report Issue" : "Sobanura Ikibazo"}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
