"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CommissionerNotifications() {
  const { language } = useI18n()

  const notifications = [
    {
      id: 1,
      title: language === "en" ? "Property Approved" : "Igitabo Kemewe",
      message: "Your Modern Apartment listing has been approved.",
      date: "2024-01-15",
      type: "success",
    },
    {
      id: 2,
      title: language === "en" ? "New Lead" : "Igambo Gishya",
      message: "A new tenant is interested in your Family House.",
      date: "2024-01-14",
      type: "info",
    },
    {
      id: 3,
      title: language === "en" ? "Admin Notification" : "Ubutumwa bw'Umwamikazi",
      message: "Commission payment has been processed.",
      date: "2024-01-13",
      type: "success",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Notifications" : "Amakumenyetso"}
        </h1>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-6 border-l-4 ${notification.type === "success" ? "border-l-green-500" : "border-l-blue-500"}`}
            >
              <h3 className="font-bold text-foreground mb-2">{notification.title}</h3>
              <p className="text-muted-foreground mb-3">{notification.message}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{notification.date}</span>
                <Button size="sm" variant="outline">
                  {language === "en" ? "View" : "Reba"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
