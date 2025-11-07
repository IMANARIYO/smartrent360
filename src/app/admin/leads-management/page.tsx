"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/i18n-provider"

export default function LeadsManagement() {
  const { language } = useI18n()

  const leads = [
    {
      id: 1,
      tenant: "Alice Johnson",
      property: "Modern Apartment",
      agent: "John Smith",
      date: "2024-01-15",
      status: "new",
    },
    {
      id: 2,
      tenant: "Bob Williams",
      property: "Family House",
      agent: "Jane Doe",
      date: "2024-01-14",
      status: "contacted",
    },
    { id: 3, tenant: "Carol Brown", property: "Studio", agent: "Peter Mwiza", date: "2024-01-13", status: "pending" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Leads Management" : "Kwibuha Amagambo"}
        </h1>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Tenant" : "Umuntu wizeye mu nzu"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Property" : "Igitabo"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Agent" : "Umwihangane"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Status" : "Ubwoko"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Date" : "Ubwihuko"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    {language === "en" ? "Action" : "Ibikorwa"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-3 text-foreground font-medium">{lead.tenant}</td>
                    <td className="px-6 py-3 text-foreground">{lead.property}</td>
                    <td className="px-6 py-3 text-foreground">{lead.agent}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`text-xs px-2 py-1 rounded ${lead.status === "new" ? "bg-blue-100 text-blue-800" : lead.status === "contacted" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {lead.status === "new"
                          ? language === "en"
                            ? "New"
                            : "Gishya"
                          : lead.status === "contacted"
                            ? language === "en"
                              ? "Contacted"
                              : "Yavugwe"
                            : language === "en"
                              ? "Pending"
                              : "Kumubwira"}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-muted-foreground text-sm">{lead.date}</td>
                    <td className="px-6 py-3">
                      <Button variant="outline" size="sm">
                        {language === "en" ? "View" : "Reba"}
                      </Button>
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
