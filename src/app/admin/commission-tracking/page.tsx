"use client"


import { Card } from "@/components/ui/card"
import { useI18n } from "@/i18n/i18n-provider"

export default function CommissionTracking() {
  const { language } = useI18n()

  const deals = [
    {
      id: 1,
      property: "Modern Apartment",
      agent: "John Smith",
      tenant: "Alice Johnson",
      commission: "RWF 450K",
      platformFee: "RWF 90K",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      property: "Family House",
      agent: "Jane Doe",
      tenant: "Bob Williams",
      commission: "RWF 600K",
      platformFee: "RWF 120K",
      date: "2024-01-14",
      status: "pending",
    },
    {
      id: 3,
      property: "Studio",
      agent: "Peter Mwiza",
      tenant: "Carol Brown",
      commission: "RWF 300K",
      platformFee: "RWF 60K",
      date: "2024-01-13",
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Commission Tracking" : "Kureba Komisyon"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <p className="text-muted-foreground text-sm">{language === "en" ? "Total Deals" : "Subizo Zose"}</p>
            <p className="text-2xl font-bold text-foreground">156</p>
          </Card>
          <Card className="p-6">
            <p className="text-muted-foreground text-sm">{language === "en" ? "Total Commission" : "Komisyon Zose"}</p>
            <p className="text-2xl font-bold text-foreground">RWF 45.2M</p>
          </Card>
          <Card className="p-6">
            <p className="text-muted-foreground text-sm">{language === "en" ? "Total Fees" : "Igishoro Zose"}</p>
            <p className="text-2xl font-bold text-foreground">RWF 9.04M</p>
          </Card>
          <Card className="p-6">
            <p className="text-muted-foreground text-sm">{language === "en" ? "Platform Revenue" : "Iniranshe"}</p>
            <p className="text-2xl font-bold text-primary-500">RWF 9.04M</p>
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
                    {language === "en" ? "Agent" : "Umwihangane"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Tenant" : "Umuntu"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Commission" : "Komisyon"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Fee (20%)" : "Igishoro (20%)"}
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
                    <td className="px-6 py-3 text-foreground">{deal.agent}</td>
                    <td className="px-6 py-3 text-foreground">{deal.tenant}</td>
                    <td className="px-6 py-3 text-foreground font-semibold">{deal.commission}</td>
                    <td className="px-6 py-3 text-foreground font-semibold">{deal.platformFee}</td>
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
