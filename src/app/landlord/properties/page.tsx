"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandlordProperties() {
  const { language } = useI18n()

  const properties = [
    {
      id: 1,
      title: "Kigali Apartment",
      location: "Kigali City",
      price: "RWF 600K/mo",
      status: "verified",
      agent: "John Smith",
    },
    {
      id: 2,
      title: "Nyarutarama House",
      location: "Nyarutarama",
      price: "RWF 1.5M/mo",
      status: "verified",
      agent: "None",
    },
    { id: 3, title: "Kacyiru Studio", location: "Kacyiru", price: "RWF 350K/mo", status: "pending", agent: "None" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {language === "en" ? "My Properties" : "Ibigitabo Byanjye"}
          </h1>
          <Link href="/landlord/add-property">
            <Button>{language === "en" ? "Add New" : "Ongeraho Gishya"}</Button>
          </Link>
        </div>

        <div className="space-y-4">
          {properties.map((property) => (
            <Card key={property.id} className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{property.title}</h3>
                  <p className="text-muted-foreground">
                    {property.location} • {property.price}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {language === "en" ? "Agent: " : "Umwihangane: "} {property.agent}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${property.status === "verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {property.status === "verified"
                      ? language === "en"
                        ? "Verified"
                        : "Yemeranye"
                      : language === "en"
                        ? "Pending"
                        : "Kumubwira"}
                  </span>
                  <Button variant="outline" size="sm">
                    {language === "en" ? "Manage" : "Kwibuha"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
