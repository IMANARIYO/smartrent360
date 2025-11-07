"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/i18n/i18n-provider"
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  User,
  Star,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const { language } = useI18n()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  })

  // Mock property data - in real app, fetch based on params.id
  const property = {
    id: params.id,
    title: language === "en" ? "Modern 3-Bedroom House in Remera" : "Inzu ya 3 Ibyumba Remera",
    price: "150,000 RWF/month",
    location: "Remera, Gasabo, Kigali",
    type: "House",
    status: language === "en" ? "Available" : "Irahari",
    rooms: 3,
    bathrooms: 2,
    area: "120 sqm",
    images: [
      "/modern-house-rwanda.jpg",
      "/modern-apartment-living.png",
      "/modern-apartment-kitchen.png",
      "/cozy-apartment-bedroom.png"
    ],
    description: language === "en" 
      ? "Beautiful modern 3-bedroom house located in the heart of Remera. This property features spacious rooms, modern kitchen, beautiful garden, and is close to major roads and amenities. Perfect for families looking for comfort and convenience."
      : "Inzu nziza ya 3 ibyumba iherereye mu mujyi wa Remera. Iyi nzu ifite ibyumba binini, igikoni cya kijyambere, ubusitani bwiza, kandi iri hafi y'imihanda n'ibikoresho. Ni nziza ku miryango ishaka ubwiyunge n'ubworozi.",
    features: language === "en" 
      ? ["Modern Kitchen", "Garden", "Parking Space", "Security", "Water Tank", "Electricity"]
      : ["Igikoni Cya Kijyambere", "Ubusitani", "Aho Guhagarika Imodoka", "Umutekano", "Ikiyaga cy'Amazi", "Amashanyarazi"],
    agent: {
      name: "Jean Baptiste Mukamana",
      role: language === "en" ? "Verified Commissioner" : "Umwihangane Wemejwe",
      rating: 4.8,
      phone: "+250 788 123 456",
      image: "/placeholder-user.jpg"
    },
    postedDate: "2024-01-15",
    verified: true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert(language === "en" 
      ? "Thank you! We'll connect you with the agent shortly." 
      : "Murakoze! Tuzabaguhuza n'umukozi vuba.")
    setShowContactForm(false)
    setFormData({ name: "", phone: "", message: "" })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              {language === "en" ? "Home" : "Ahabanza"}
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary">
              {language === "en" ? "Properties" : "Inyubako"}
            </Link>
            <span>/</span>
            <span className="text-foreground">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Back Button */}
        <Link href="/properties" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4" />
          {language === "en" ? "Back to Properties" : "Garuka ku Nyubako"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                {property.verified && (
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    ✅ {language === "en" ? "Verified Property" : "Inyubako Yemejwe"}
                  </Badge>
                )}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                      index === currentImageIndex ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Overview */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{property.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                    <div className="text-3xl font-bold text-primary">{property.price}</div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.rooms}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "en" ? "Bedrooms" : "Ibyumba"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "en" ? "Bathrooms" : "Ubwiyuhagiro"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.area}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "en" ? "Area" : "Ubuso"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "en" ? "Type" : "Ubwoko"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{language === "en" ? "Description" : "Ibisobanuro"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>
                
                <h4 className="font-semibold mb-3">
                  {language === "en" ? "Features & Amenities" : "Ibintu Bihari"}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? "Location" : "Aho Biherereye"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">
                    {language === "en" ? "Map showing approximate location" : "Ikarita yerekana aho biherereye"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Agent Info and Contact */}
          <div className="lg:col-span-1">
            {/* Agent Card */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{language === "en" ? "Posted By" : "Byashyizweho na"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={property.agent.image} alt={property.agent.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{property.agent.name}</h4>
                    <p className="text-sm text-muted-foreground">{property.agent.role}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{property.agent.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 gap-2"
                    onClick={() => setShowContactForm(true)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {language === "en" ? "I'm Interested" : "Ndabishaka"}
                  </Button>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    {language === "en" ? "Call Agent" : "Hamagara Umukozi"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Modal */}
            {showContactForm && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{language === "en" ? "Contact Agent" : "Vugana n'Umukozi"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">
                        {language === "en" ? "Full Name" : "Izina Ryose"}
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">
                        {language === "en" ? "Phone / WhatsApp" : "Telefoni / WhatsApp"}
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">
                        {language === "en" ? "Message" : "Ubutumwa"}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder={language === "en" 
                          ? "I want to visit this house tomorrow" 
                          : "Ndashaka gusura iyi nzu ejo"}
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                        {language === "en" ? "Send Message" : "Kohereza"}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowContactForm(false)}
                      >
                        {language === "en" ? "Cancel" : "Kuraguza"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Property Stats */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? "Property Details" : "Amakuru y'Inyubako"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "en" ? "Posted Date" : "Itariki Yashyizweho"}
                  </span>
                  <span>{new Date(property.postedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "en" ? "Property ID" : "Nomero y'Inyubako"}
                  </span>
                  <span>SR-{property.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "en" ? "Status" : "Uko Bimeze"}
                  </span>
                  <Badge className="bg-green-100 text-green-700">
                    {property.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}