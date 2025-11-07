"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useI18n } from "@/i18n/i18n-provider"

// Mock data for admin dashboard
const MOCK_STATS = {
  totalUsers: 1250,
  verifiedAgents: 520,
  totalProperties: 1840,
  pendingVerification: 45,
  totalConnections: 2340,
  revenue: 450000,
}

const MOCK_PENDING_VERIFICATIONS = [
  { id: 1, name: "Jean Marie Ndayisaba", type: "Agent", status: "pending", date: "2024-01-15" },
  { id: 2, name: "Beautiful House in Kacyiru", type: "Property", status: "pending", date: "2024-01-14" },
  { id: 3, name: "Francoise Kayitesi", type: "Agent", status: "pending", date: "2024-01-14" },
  { id: 4, name: "Apartment Nyarutarama", type: "Property", status: "pending", date: "2024-01-13" },
  { id: 5, name: "Patrick Habimana", type: "Agent", status: "pending", date: "2024-01-13" },
]

const MOCK_RECENT_CONNECTIONS = [
  {
    id: 1,
    agent: "Jean Mukecuru",
    tenant: "Marie Ingabire",
    property: "House Kimihurura",
    date: "2024-01-15",
    commission: 80000,
  },
  {
    id: 2,
    agent: "Marie Ingabire",
    tenant: "Pierre Habineza",
    property: "Apartment Nyarutarama",
    date: "2024-01-14",
    commission: 50000,
  },
  {
    id: 3,
    agent: "Patrick Habimana",
    tenant: "Francoise Kayitesi",
    property: "Home Gacuriro",
    date: "2024-01-13",
    commission: 60000,
  },
]

export default function AdminPage() {
  const { language } = useI18n()
  const [activeTab, setActiveTab] = useState<"overview" | "verifications" | "connections">("overview")

  const content = {
    en: {
      title: "Admin Dashboard",
      subtitle: "Manage users, properties, and verify listings",
      overview: "Overview",
      verifications: "Pending Verifications",
      connections: "Recent Connections",
      stats: {
        totalUsers: "Total Users",
        verifiedAgents: "Verified Agents",
        totalProperties: "Total Properties",
        pendingVerification: "Pending Verification",
        totalConnections: "Total Connections",
        revenue: "Total Revenue",
      },
      actions: {
        approve: "Approve",
        reject: "Reject",
        view: "View Details",
      },
      table: {
        name: "Name",
        type: "Type",
        status: "Status",
        date: "Date",
        agent: "Agent",
        tenant: "Tenant",
        property: "Property",
        commission: "Commission",
        actions: "Actions",
      },
    },
    rw: {
      title: "Ikibaho cya Muhinzagurutsi",
      subtitle: "Koneza abakoresha, inyubako, n'iverereza inyambo",
      overview: "Impetu",
      verifications: "Iverereza Intege",
      connections: "Guhuza Vuba",
      stats: {
        totalUsers: "Abakoresha Byose",
        verifiedAgents: "Abakozi Byemejwe",
        totalProperties: "Inyubako Byose",
        pendingVerification: "Iverereza Intege",
        totalConnections: "Guhuza Byose",
        revenue: "Inyungu Byose",
      },
      actions: {
        approve: "Kwemeza",
        reject: "Kwamba",
        view: "Reba Amakuru",
      },
      table: {
        name: "Izina",
        type: "Ubwoko",
        status: "Isigaba",
        date: "Itariki",
        agent: "Umukozi",
        tenant: "Umubari",
        property: "Inyubako",
        commission: "Inyungu",
        actions: "Ibikorwa",
      },
    },
  }

  const t = language === "en" ? content.en : content.rw

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 px-4 md:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <Card className="p-6 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">{t.stats.totalUsers}</p>
              <p className="text-3xl font-bold text-foreground">{MOCK_STATS.totalUsers.toLocaleString()}</p>
            </Card>
            <Card className="p-6 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">{t.stats.verifiedAgents}</p>
              <p className="text-3xl font-bold text-primary">{MOCK_STATS.verifiedAgents.toLocaleString()}</p>
            </Card>
            <Card className="p-6 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">{t.stats.totalProperties}</p>
              <p className="text-3xl font-bold text-foreground">{MOCK_STATS.totalProperties.toLocaleString()}</p>
            </Card>
            <Card className="p-6 border-accent/20">
              <p className="text-sm text-muted-foreground mb-2">{t.stats.pendingVerification}</p>
              <p className="text-3xl font-bold text-accent">{MOCK_STATS.pendingVerification}</p>
            </Card>
            <Card className="p-6 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">{t.stats.totalConnections}</p>
              <p className="text-3xl font-bold text-foreground">{MOCK_STATS.totalConnections.toLocaleString()}</p>
            </Card>
            <Card className="p-6 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">{t.stats.revenue}</p>
              <p className="text-3xl font-bold text-primary">{MOCK_STATS.revenue.toLocaleString()} RWF</p>
            </Card>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-primary/20">
            {(["overview", "verifications", "connections"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab === "overview" && t.overview}
                {tab === "verifications" && t.verifications}
                {tab === "connections" && t.connections}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6">{t.verifications}</h2>
                <div className="space-y-4">
                  {MOCK_PENDING_VERIFICATIONS.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between pb-4 border-b border-primary/10 last:border-b-0"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-primary/20 bg-transparent">
                          {t.actions.approve}
                        </Button>
                        <Button size="sm" variant="outline" className="border-accent/20 text-accent bg-transparent">
                          {t.actions.reject}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6">{t.connections}</h2>
                <div className="space-y-4">
                  {MOCK_RECENT_CONNECTIONS.slice(0, 3).map((item) => (
                    <div key={item.id} className="pb-4 border-b border-primary/10 last:border-b-0">
                      <p className="text-sm font-medium text-foreground mb-1">{item.property}</p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.agent} → {item.tenant}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-primary">{item.commission.toLocaleString()} RWF</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "verifications" && (
            <Card className="p-6 border-primary/20 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.name}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.type}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.date}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PENDING_VERIFICATIONS.map((item) => (
                    <tr key={item.id} className="border-b border-primary/10 hover:bg-muted/50">
                      <td className="py-3 px-4 text-foreground">{item.name}</td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {item.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{item.date}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-primary/20 text-xs bg-transparent">
                            {t.actions.approve}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-accent/20 text-accent text-xs bg-transparent"
                          >
                            {t.actions.reject}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}

          {activeTab === "connections" && (
            <Card className="p-6 border-primary/20 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.agent}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.tenant}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.property}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.commission}</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">{t.table.date}</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_RECENT_CONNECTIONS.map((item) => (
                    <tr key={item.id} className="border-b border-primary/10 hover:bg-muted/50">
                      <td className="py-3 px-4 text-foreground">{item.agent}</td>
                      <td className="py-3 px-4 text-foreground">{item.tenant}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.property}</td>
                      <td className="py-3 px-4 font-semibold text-primary">{item.commission.toLocaleString()} RWF</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}
        </div>
      </section>
    </main>
  )
}
