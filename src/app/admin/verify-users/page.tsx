"use client"


import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useI18n } from "@/i18n/i18n-provider"

export default function VerifyUsers() {
  const { language } = useI18n()
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jean Doe",
      email: "jean@email.com",
      role: "commissioner",
      date: "2024-01-15",
      documents: ["ID", "License"],
    },
    {
      id: 2,
      name: "Marie Smith",
      email: "marie@email.com",
      role: "landlord",
      date: "2024-01-14",
      documents: ["ID", "Proof"],
    },
    {
      id: 3,
      name: "Pierre Mwiza",
      email: "pierre@email.com",
      role: "commissioner",
      date: "2024-01-13",
      documents: ["ID"],
    },
  ])

  const handleApprove = (id: number) => {
    setUsers(users.filter((u) => u.id !== id))
  }

  const handleReject = (id: number) => {
    setUsers(users.filter((u) => u.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "User Verification Queue" : "Imirongo y'Iyemezo y'Abayumubazi"}
        </h1>

        {users.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              {language === "en" ? "No pending verifications" : "Nta myemezo itegura"}
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <Card key={user.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{user.name}</h3>
                    <p className="text-muted-foreground">{user.email}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                        {user.role === "commissioner"
                          ? language === "en"
                            ? "Commissioner"
                            : "Umwihangane"
                          : language === "en"
                            ? "Landlord"
                            : "Umubare"}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">{user.date}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {language === "en" ? "Documents" : "Ibivuga neza"}: {user.documents.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => handleApprove(user.id)}>
                    {language === "en" ? "Approve" : "Yemeeza"}
                  </Button>
                  <Button variant="outline" onClick={() => handleReject(user.id)}>
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
