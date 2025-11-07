"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CommissionerProfile() {
  const { language } = useI18n()
  const [editing, setEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Smith",
    email: "john@smartrent360.com",
    phone: "+250 788 123 456",
    district: "Kigali",
    bio: "Experienced property agent",
    verified: true,
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "My Profile" : "Umwimerere Wanjye"}
        </h1>

        <Card className="p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-sm px-3 py-1 rounded-full ${profile.verified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                >
                  {profile.verified
                    ? language === "en"
                      ? "Verified"
                      : "Yemeranye"
                    : language === "en"
                      ? "Pending"
                      : "Kumubwira"}
                </span>
              </div>
            </div>
            <Button onClick={() => setEditing(!editing)}>
              {editing ? (language === "en" ? "Cancel" : "Buruza") : language === "en" ? "Edit" : "Hindura"}
            </Button>
          </div>

          {editing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Full Name" : "Izina Ryose"}
                </label>
                <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Email" : "Imeyili"}
                </label>
                <Input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Phone" : "Teleporo"}
                </label>
                <Input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Bio" : "Ibyo aribyo"}
                </label>
                <Input value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
              </div>
              <Button className="w-full">{language === "en" ? "Save Changes" : "Kubika Inshuro"}</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "Email" : "Imeyili"}</p>
                <p className="text-foreground font-semibold">{profile.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "Phone" : "Teleporo"}</p>
                <p className="text-foreground font-semibold">{profile.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "District" : "Akarere"}</p>
                <p className="text-foreground font-semibold">{profile.district}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "Bio" : "Ibyo aribyo"}</p>
                <p className="text-foreground font-semibold">{profile.bio}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            {language === "en" ? "Verification Documents" : "Ibivuga neza"}
          </h3>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground">{language === "en" ? "National ID" : "ID y'u Rwanda"}</p>
              <p className="text-foreground font-semibold mt-1">Uploaded ✓</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground">{language === "en" ? "License" : "Layisensi"}</p>
              <Button variant="outline" className="mt-2 bg-transparent">
                {language === "en" ? "Upload" : "Ongera"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
