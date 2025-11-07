"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function Complaints() {
  const { language } = useI18n()
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const complaints = [
    { id: 1, title: "Fake Tenant Report", status: "resolved", date: "2024-01-10" },
    { id: 2, title: "Property Damage Claim", status: "in-progress", date: "2024-01-08" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {language === "en" ? "Reports & Complaints" : "Ibibazo n'Ubwiyunge"}
          </h1>
          <Button onClick={() => setShowForm(!showForm)}>
            {language === "en" ? "Report Issue" : "Sobanura Ikibazo"}
          </Button>
        </div>

        {showForm && (
          <Card className="p-6 mb-8">
            <h2 className="text-lg font-bold text-foreground mb-4">
              {language === "en" ? "New Report" : "Ibibazo Bishya"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Title" : "Izina"}
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={language === "en" ? "Report title" : "Izina ly'ibibazo"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Description" : "Ibisobanuro"}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                  rows={5}
                  placeholder={language === "en" ? "Describe the issue" : "Sobanura ikibazo"}
                />
              </div>
              <Button className="w-full">{language === "en" ? "Submit Report" : "Ohereza Ibibazo"}</Button>
            </div>
          </Card>
        )}

        <div className="space-y-4">
          {complaints.map((complaint) => (
            <Card key={complaint.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-foreground">{complaint.title}</h3>
                  <p className="text-sm text-muted-foreground">{complaint.date}</p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${complaint.status === "resolved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                >
                  {complaint.status === "resolved"
                    ? language === "en"
                      ? "Resolved"
                      : "Ibyazuwe"
                    : language === "en"
                      ? "In Progress"
                      : "Iri Muhira"}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
