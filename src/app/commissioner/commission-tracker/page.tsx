"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"

export default function CommissionTracker() {
  const { language } = useI18n()

  const deals = [
    {
      id: 1,
      property: "Modern Apartment",
      date: "2024-01-15",
      commission: "RWF 450K",
      platformFee: "RWF 90K",
      status: "completed",
    },
    {
      id: 2,
      property: "Family House",
      date: "2024-01-10",
      commission: "RWF 600K",
      platformFee: "RWF 120K",
      status: "completed",
    },
    {
      id: 3,
      property: "Studio",
      date: "2024-01-05",
      commission: "RWF 300K",
      platformFee: "RWF 60K",
      status: "pending",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Commission Tracker" : "Kureba Komisyon"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">{language === "en" ? "Total Earned" : "Igikwiya Cyose"}</p>
            <p className="text-2xl font-bold text-foreground">RWF 1.35M</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">
              {language === "en" ? "Platform Fee" : "Igishoro cy'Platform"}
            </p>
            <p className="text-2xl font-bold text-foreground">RWF 270K</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">{language === "en" ? "Your Earnings" : "Igikwiya Cyawe"}</p>
            <p className="text-2xl font-bold text-foreground">RWF 1.08M</p>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Property" : "Igitabo"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Date" : "Ubwihuko"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Commission" : "Komisyon"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Fee" : "Igishoro"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Status" : "Ubwoko"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {deals.map((deal) => (
                  <tr key={deal.id}>
                    <td className="px-6 py-3 text-foreground">{deal.property}</td>
                    <td className="px-6 py-3 text-muted-foreground">{deal.date}</td>
                    <td className="px-6 py-3 text-foreground font-semibold">{deal.commission}</td>
                    <td className="px-6 py-3 text-muted-foreground">{deal.platformFee}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${deal.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {deal.status === "completed"
                          ? language === "en"
                            ? "Completed"
                            : "Ibyazuwe"
                          : language === "en"
                            ? "Pending"
                            : "Kumubwira"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
