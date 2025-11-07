"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/i18n/i18n-provider"
import { Search, MapPin, Bed, Bath, Square, Filter, ChevronDown } from "lucide-react"

export default function PropertiesPage() {
  const { language } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [rooms, setRooms] = useState("")

  const properties = [
    {
      id: 1,
      title: language === "en" ? "Modern 3-Bedroom House" : "Inzu ya 3 Ibyumba",
      price: "150,000 RWF/month",
      location: "Gasabo, Kigali",
      type: "House",
      rooms: 3,
      bathrooms: 2,
      area: "120 sqm",
      image: "/modern-house-rwanda.jpg",
      verified: true,
      postedBy: "Agent"
    },
    {
      id: 2,
      title: language === "en" ? "Luxury Apartment in Kimihurura" : "Apartama ya Kimihurura",
      price: "200,000 RWF/month",
      location: "Gasabo, Kigali",
      type: "Apartment",
      rooms: 2,
      bathrooms: 2,
      area: "85 sqm",
      image: "/luxury-apartment-interior.png",
      verified: true,
      postedBy: "Landlord"
    },
    {
      id: 3,
      title: language === "en" ? "Cozy Studio Apartment" : "Studio Apartment",
      price: "80,000 RWF/month",
      location: "Nyarugenge, Kigali",
      type: "Studio",
      rooms: 1,
      bathrooms: 1,
      area: "45 sqm",
      image: "/cozy-studio-apartment.png",
      verified: true,
      postedBy: "Agent"
    },
    {
      id: 4,
      title: language === "en" ? "Family House in Remera" : "Inzu y'Umuryango Remera",
      price: "180,000 RWF/month",
      location: "Gasabo, Kigali",
      type: "House",
      rooms: 4,
      bathrooms: 3,
      area: "150 sqm",
      image: "/cozy-family-house.png",
      verified: true,
      postedBy: "Landlord"
    },
    {
      id: 5,
      title: language === "en" ? "Plot for Sale in Kicukiro" : "Ikibanza cyo Kugurisha Kicukiro",
      price: "25,000,000 RWF",
      location: "Kicukiro, Kigali",
      type: "Plot",
      rooms: 0,
      bathrooms: 0,
      area: "500 sqm",
      image: "/land-plot-rwanda.jpg",
      verified: true,
      postedBy: "Agent"
    },
    {
      id: 6,
      title: language === "en" ? "Modern Apartment with View" : "Apartama Igezweho",
      price: "120,000 RWF/month",
      location: "Nyarugenge, Kigali",
      type: "Apartment",
      rooms: 2,
      bathrooms: 1,
      area: "70 sqm",
      image: "/modern-apartment.png",
      verified: true,
      postedBy: "Agent"
    }
  ]

  const districts = ["Gasabo", "Kicukiro", "Nyarugenge", "Musanze", "Huye", "Rubavu"]
  const propertyTypes = [
    { value: "House", label: language === "en" ? "House" : "Inzu" },
    { value: "Apartment", label: language === "en" ? "Apartment" : "Apartama" },
    { value: "Studio", label: language === "en" ? "Studio" : "Studio" },
    { value: "Plot", label: language === "en" ? "Plot" : "Ikibanza" }
  ]

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Find Your Perfect Home" : "Shakisha Inzu Yacu Neza"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === "en" 
                ? "Browse verified properties across Rwanda" 
                : "Reba inyubako zemewe mu Rwanda"}
            </p>
          </div>

          {/* Search Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-2">
                <Input
                  placeholder={language === "en" ? "Search by location or keyword" : "Shakisha aho cyangwa ijambo"}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{language === "en" ? "All Districts" : "Akarere Kose"}</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{language === "en" ? "Property Type" : "Ubwoko bw'Inyubako"}</option>
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{language === "en" ? "Price Range" : "Igiciro"}</option>
                <option value="0-100000">0 - 100,000 RWF</option>
                <option value="100000-200000">100,000 - 200,000 RWF</option>
                <option value="200000+">200,000+ RWF</option>
              </select>

              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <Search className="w-4 h-4" />
                {language === "en" ? "Search" : "Shakisha"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {language === "en" 
                ? `Showing ${properties.length} properties` 
                : `Erekana inyubako ${properties.length}`}
            </p>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>{language === "en" ? "Sort by: Newest" : "Gushyira mu buryo: Bishya"}</option>
              <option>{language === "en" ? "Price: Low to High" : "Igiciro: Gito kugeza Kinini"}</option>
              <option>{language === "en" ? "Price: High to Low" : "Igiciro: Kinini kugeza Gito"}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.verified && (
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                      ✅ {language === "en" ? "Verified" : "Byemejwe"}
                    </Badge>
                  )}
                  <Badge className="absolute top-3 right-3 bg-primary text-white">
                    {property.postedBy === "Agent" 
                      ? (language === "en" ? "Agent" : "Umukozi") 
                      : (language === "en" ? "Landlord" : "Umubare")}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{property.price}</p>
                  </div>

                  {property.type !== "Plot" && (
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.rooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span>{property.area}</span>
                      </div>
                    </div>
                  )}

                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {language === "en" ? "View Details" : "Reba Amakuru"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button className="bg-primary text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}