"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AssignAgent() {
  const { language } = useI18n()
  const [selectedProperty, setSelectedProperty] = useState("")
  const [selectedAgent, setSelectedAgent] = useState("")

  const properties = [
    { id: 1, name: "Kigali Apartment" },
    { id: 2, name: "Nyarutarama House" },
    { id: 3, name: "Kacyiru Studio" },
  ]

  const agents = [
    { id: 1, name: "John Smith", verified: true, listings: 12 },
    { id: 2, name: "Mary Johnson", verified: true, listings: 8 },
    { id: 3, name: "Peter Williams", verified: true, listings: 15 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Assign Agent to Property" : "Teeka Umwihangane kuri Igitabo"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-8">
            <h2 className="text-lg font-bold text-foreground mb-4">
              {language === "en" ? "Select Property" : "Hitamo Igitabo"}
            </h2>
            <div className="space-y-2">
              {properties.map((property) => (
                <label
                  key={property.id}
                  className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted"
                >
                  <input
                    type="radio"
                    name="property"
                    value={property.id}
                    checked={selectedProperty === String(property.id)}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-foreground">{property.name}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-lg font-bold text-foreground mb-4">
              {language === "en" ? "Select Agent" : "Hitamo Umwihangane"}
            </h2>
            <div className="space-y-3">
              {agents.map((agent) => (
                <label
                  key={agent.id}
                  className="flex items-start p-4 border border-border rounded-lg cursor-pointer hover:bg-muted"
                >
                  <input
                    type="radio"
                    name="agent"
                    value={agent.id}
                    checked={selectedAgent === String(agent.id)}
                    onChange={(e) => setSelectedAgent(e.target.value)}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{agent.name}</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                        {language === "en" ? "Verified" : "Yemeranye"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? `${agent.listings} listings` : `Ibigitabo ${agent.listings}`}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        </div>

        <Button className="w-full mt-8">{language === "en" ? "Assign Agent" : "Teeka Umwihangane"}</Button>
      </div>
    </div>
  )
}
