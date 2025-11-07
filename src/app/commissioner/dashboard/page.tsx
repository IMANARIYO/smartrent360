"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Users, TrendingUp, DollarSign, CheckCircle, Clock, Bell } from "lucide-react"

export default function CommissionerDashboard() {
  const { language } = useI18n()

  const stats = [
    {
      label: language === "en" ? "Active Listings" : "Ibigitabo Bijyakazi",
      value: "12",
      icon: Home,
      color: "text-primary-500",
    },
    {
      label: language === "en" ? "Verified" : "Wemewe",
      value: "8",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      label: language === "en" ? "Pending" : "Arashaka",
      value: "3",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      label: language === "en" ? "Total Leads" : "Amagambo",
      value: "47",
      icon: Users,
      color: "text-blue-600",
    },
    {
      label: language === "en" ? "Earned Commission" : "Komisyon Yatowe",
      value: "RWF 450K",
      icon: DollarSign,
      color: "text-accent-500",
    },
    {
      label: language === "en" ? "Platform Fee (20%)" : "Igishoro (20%)",
      value: "RWF 90K",
      icon: TrendingUp,
      color: "text-neutral-600",
    },
  ]

  const recentActivity = [
    {
      title: language === "en" ? "Property Approved" : "Igitabo Rimviriwe",
      message: language === "en" ? "Your property in Kicukiro has been verified" : "Igitabo cyacu i Kicukiro rimviriwe",
      timestamp: "2 hours ago",
      type: "success",
    },
    {
      title: language === "en" ? "New Lead" : "Igambo Gishya",
      message: language === "en" ? "Alice is interested in Gasabo property" : "Alice yongeye mu gitabo cya Gasabo",
      timestamp: "5 hours ago",
      type: "info",
    },
    {
      title: language === "en" ? "Commission Updated" : "Komisyon Yasuzumiwe",
      message:
        language === "en" ? "Commission payment confirmed for Remera house" : "Komisyon yemewe kuri inzu i Remera",
      timestamp: "1 day ago",
      type: "success",
    },
  ]

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">
            {language === "en" ? "Welcome back, Jean Claude 👋" : "Waza neza, Jean Claude 👋"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {language === "en" ? "Here's your dashboard overview" : "Iki ni umwimerere wacyu"}
          </p>
        </div>

        <Link href="/commissioner/add-property">
          <Button className="bg-primary-500 hover:bg-primary-600">
            {language === "en" ? "+ Add Property" : "+ Ongeraho Igitabo"}
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="dashboard-stat-card">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="dashboard-stat-label">{stat.label}</p>
                    <p className={`dashboard-stat-value ${stat.color}`}>{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} style={{ opacity: 0.2 }} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{language === "en" ? "Recent Activity" : "Ibikorwa By'Akarere"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-primary-50 transition-colors duration-200"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${activity.type === "success" ? "bg-green-100" : "bg-blue-100"
                    }`}
                >
                  {activity.type === "success" ? (
                    <CheckCircle
                      size={20}
                      className={activity.type === "success" ? "text-green-600" : "text-blue-600"}
                    />
                  ) : (
                    <Bell size={20} className="text-blue-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-neutral-900">{activity.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>{language === "en" ? "Quick Actions" : "Ibikorwa Bihintutse"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/commissioner/profile" className="block">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                {language === "en" ? "View Profile" : "Reba Umwimerere"}
              </Button>
            </Link>
            <Link href="/commissioner/properties" className="block">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                {language === "en" ? "My Properties" : "Ibigitabo Byanjye"}
              </Button>
            </Link>
            <Link href="/commissioner/leads" className="block">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                {language === "en" ? "View Leads" : "Reba Amagambo"}
              </Button>
            </Link>
            <Link href="/commissioner/commission-tracker" className="block">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                {language === "en" ? "Commission Tracker" : "Kureba Komisyon"}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
