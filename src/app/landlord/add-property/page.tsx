"use client"

import type React from "react"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AddLandlordProperty() {
  const { language } = useI18n()
  const [formData, setFormData] = useState({
    title: "",
    type: "apartment",
    location: "",
    district: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Property submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Add Property" : "Ongeraho Igitabo"}
        </h1>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Property Title" : "Izina ly'Igitabo"}
                </label>
                <Input name="title" value={formData.title} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Type" : "Ubwoko"}
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                >
                  <option value="apartment">{language === "en" ? "Apartment" : "Nyumba Muhiga"}</option>
                  <option value="house">{language === "en" ? "House" : "Nyumba"}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Location" : "Aho aribyo"}
                </label>
                <Input name="location" value={formData.location} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "District" : "Akarere"}
                </label>
                <Input name="district" value={formData.district} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Monthly Price (RWF)" : "Igishoro cy'Ukwezi (RWF)"}
                </label>
                <Input name="price" type="number" value={formData.price} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Area (sqm)" : "Ubuso (sqm)"}
                </label>
                <Input name="area" type="number" value={formData.area} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Bedrooms" : "Imyanda"}
                </label>
                <Input name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Bathrooms" : "Amahoro y'Amazi"}
                </label>
                <Input name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Description" : "Ibisobanuro"}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full">
              {language === "en" ? "List Property" : "Ongera Igitabo"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
