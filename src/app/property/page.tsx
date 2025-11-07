"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PropertyListing() {
  const { language } = useI18n()

  const properties = [
    { id: 1, title: "Modern Apartment", location: "Kigali", price: 500000, bedrooms: 2, verified: true },
    { id: 2, title: "Family House", location: "Nyarutarama", price: 1200000, bedrooms: 4, verified: true },
    { id: 3, title: "Studio", location: "Kacyiru", price: 300000, bedrooms: 1, verified: false },
    { id: 4, title: "Luxury Villa", location: "Kibagabaga", price: 2000000, bedrooms: 5, verified: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {language === "en" ? "All Properties" : "Ibigitabo Byose"}
          </h1>
          <Link href="/tenant/search">
            <Button>{language === "en" ? "Search" : "Shakisha"}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <Link key={property.id} href={`/property/${property.id}`}>
              <Card>
                <Image
                  src={`/.jpg?query=${property.title}`}
                  alt={property.title}
                  width={600}
                  height={160}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2">{property.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{property.location}</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-lg font-bold text-primary-500">RWF {property.price.toLocaleString()}</p>
                    {property.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                    )}
                  </div>
                  <Button size="sm" className="w-full bg-transparent" variant="outline">
                    {language === "en" ? "View" : "Reba"}
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
