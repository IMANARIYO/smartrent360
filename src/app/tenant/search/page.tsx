"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"

export default function TenantSearch() {
  const { language } = useI18n()
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    type: "all",
  })

  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      location: "Kigali",
      price: 500000,
      bedrooms: 2,
      image: "/modern-apartment-living.png",
    },
    {
      id: 2,
      title: "Family House",
      location: "Nyarutarama",
      price: 1200000,
      bedrooms: 4,
      image: "/cozy-family-house.png",
    },
    {
      id: 3,
      title: "Studio Apartment",
      location: "Kacyiru",
      price: 300000,
      bedrooms: 1,
      image: "/cozy-studio-apartment.png",
    },
    {
      id: 4,
      title: "Luxury Apartment",
      location: "Kibagabaga",
      price: 800000,
      bedrooms: 3,
      image: "/luxury-apartment-interior.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {language === "en" ? "Search Properties" : "Shakisha Ibigitabo"}
        </h1>

        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Location" : "Aho aribyo"}
              </label>
              <Input
                placeholder={language === "en" ? "City or district" : "Umujyi cyangwa akarere"}
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Min Price" : "Igishoro Kigufi"}
              </label>
              <Input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Max Price" : "Igishoro Kinini"}
              </label>
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Bedrooms" : "Imyanda"}
              </label>
              <Input
                type="number"
                placeholder="Bedrooms"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              />
            </div>

            <div className="flex items-end">
              <Button className="w-full">{language === "en" ? "Search" : "Shakisha"}</Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-bold text-primary-500">RWF {property.price.toLocaleString()}</p>
                  <span className="text-xs bg-muted text-foreground px-2 py-1 rounded">
                    {property.bedrooms} {language === "en" ? "bed" : "myanda"}
                  </span>
                </div>
                <Link href={`/property/${property.id}`}>
                  <Button className="w-full bg-transparent" variant="outline">
                    {language === "en" ? "View Details" : "Reba Amakuru"}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
