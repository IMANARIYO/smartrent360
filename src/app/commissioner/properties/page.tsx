"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommissionerProperties() {
  const { language } = useI18n()

  const properties = [
    { id: 1, title: "Modern Apartment", location: "Kigali", price: "RWF 500K/mo", status: "verified" },
    { id: 2, title: "Family House", location: "Kigali", price: "RWF 1.2M/mo", status: "pending" },
    { id: 3, title: "Studio", location: "Nyarutarama", price: "RWF 300K/mo", status: "verified" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {language === "en" ? "My Properties" : "Ibigitabo Byanjye"}
          </h1>
          <Link href="/commissioner/add-property">
            <Button>{language === "en" ? "Add New" : "Ongeraho Gishya"}</Button>
          </Link>
        </div>

        <div className="space-y-4">
          {properties.map((property) => (
            <Card key={property.id} className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-foreground">{property.title}</h3>
                <p className="text-muted-foreground">
                  {property.location} • {property.price}
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
                  {language === "en" ? "Edit" : "Hindura"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
