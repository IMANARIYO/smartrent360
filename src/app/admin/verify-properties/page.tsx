"use client"


import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useI18n } from "@/i18n/i18n-provider"

export default function VerifyProperties() {
  const { language } = useI18n()
  const [properties, setProperties] = useState([
    { id: 1, title: "Modern Apartment", location: "Kigali", price: "500K", agent: "John Smith", date: "2024-01-15" },
    { id: 2, title: "Family House", location: "Nyarutarama", price: "1.2M", agent: "Jane Doe", date: "2024-01-14" },
    { id: 3, title: "Studio", location: "Kacyiru", price: "300K", agent: "Peter Mwiza", date: "2024-01-13" },
  ])

  const handleApprove = (id: number) => {
    setProperties(properties.filter((p) => p.id !== id))
  }

  const handleReject = (id: number) => {
    setProperties(properties.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Property Verification" : "Iyemezo ry'Ibigitabo"}
        </h1>

        {properties.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              {language === "en" ? "No pending verifications" : "Nta myemezo itegura"}
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {properties.map((property) => (
              <Card key={property.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{property.title}</h3>
                    <p className="text-muted-foreground">{property.location}</p>
                    <div className="flex gap-4 mt-2">
                      <span className="text-sm text-foreground">
                        <strong>{language === "en" ? "Price" : "Igishoro"}:</strong> RWF {property.price}
                      </span>
                      <span className="text-sm text-foreground">
                        <strong>{language === "en" ? "Agent" : "Umwihangane"}:</strong> {property.agent}
                      </span>
                      <span className="text-sm text-muted-foreground">{property.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleApprove(property.id)}
                  >
                    {language === "en" ? "Approve" : "Yemeeza"}
                  </Button>
                  <Button variant="outline" onClick={() => handleReject(property.id)}>
                    {language === "en" ? "Reject" : "Kanya"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
