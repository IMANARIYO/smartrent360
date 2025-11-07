"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Notifications() {
  const { language } = useI18n()

  const notifications = [
    {
      id: 1,
      title: language === "en" ? "Application Approved" : "Ubwiyunge Bwemewe",
      message: "Your application for the Modern Apartment has been approved.",
      date: "2024-01-15",
      read: false,
    },
    {
      id: 2,
      title: language === "en" ? "New Property Match" : "Igitabo Gishya",
      message: "A new property matching your preferences is available.",
      date: "2024-01-14",
      read: false,
    },
    {
      id: 3,
      title: language === "en" ? "Agent Message" : "Ubutumwa bw'Umwihangane",
      message: "John Smith has sent you a message about the Family House.",
      date: "2024-01-13",
      read: true,
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
            <Card key={notification.id} className={`p-6 ${!notification.read ? "bg-primary-50" : ""}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-bold ${!notification.read ? "text-primary-900" : "text-foreground"}`}>
                  {notification.title}
                </h3>
                <span className="text-xs text-muted-foreground">{notification.date}</span>
              </div>
              <p className="text-muted-foreground mb-4">{notification.message}</p>
              <div className="flex gap-2">
                {!notification.read && (
                  <Button size="sm">{language === "en" ? "Mark as Read" : "Menya Nk'Isomwe"}</Button>
                )}
                <Button size="sm" variant="outline">
                  {language === "en" ? "Dismiss" : "Tanga"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
