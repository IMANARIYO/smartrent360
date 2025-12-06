/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useI18n } from "@/i18n/i18n-provider"
import { ArrowLeft, MapPin, Bed, Square, MessageCircle } from "lucide-react"
import { propertyService } from "../_services"
import { Property } from "../_types"
import { ImageGallery } from "../_components/image-gallery"

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { language } = useI18n()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [propertyId, setPropertyId] = useState<string | null>(null)

  useEffect(() => {
    params.then(p => {
      setPropertyId(p.id)
      fetchProperty(p.id)
    })
  }, [])

  const fetchProperty = async (id: string) => {
    try {
      const response = await propertyService.getById(id)
      setProperty(response.data.data)
    } catch (error) {
      console.error('Failed to fetch property:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(language === "en" ? "Request sent!" : "Icyifuzo cyoherejwe!")
    setShowContactForm(false)
    setFormData({ name: "", phone: "", message: "" })
  }

  if (loading) return <MainLayout><div className="text-center py-12">Loading...</div></MainLayout>
  if (!property) return <MainLayout><div className="text-center py-12">Property not found</div></MainLayout>

  const images = property.media.map(m => m.url)

  return (
    <MainLayout>
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">{language === "en" ? "Home" : "Ahabanza"}</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary">{language === "en" ? "Properties" : "Inyubako"}</Link>
            <span>/</span>
            <span className="text-foreground">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Link href="/properties" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4" />
          {language === "en" ? "Back to Properties" : "Garuka"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              {property.verified && (
                <Badge className="mb-4 bg-green-500 text-white">
                  ✅ {language === "en" ? "Verified" : "Byemejwe"}
                </Badge>
              )}
              <ImageGallery images={images} alt={property.title} />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{property.title}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{property.district}, {property.province}</span>
                </div>
                <div className="text-3xl font-bold text-primary">{property.price.toLocaleString()} RWF</div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {property.rooms && (
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{property.rooms}</div>
                      <div className="text-sm text-muted-foreground">{language === "en" ? "Rooms" : "Ibyumba"}</div>
                    </div>
                  )}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.type}</div>
                    <div className="text-sm text-muted-foreground">{language === "en" ? "Type" : "Ubwoko"}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Badge className={property.status === 'AVAILABLE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                      {property.status}
                    </Badge>
                  </div>
                </div>

                {property.description && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">{language === "en" ? "Description" : "Ibisobanuro"}</h3>
                    <p className="text-muted-foreground">{property.description}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">{language === "en" ? "Location" : "Aho iherereye"}</h3>
                  <p className="text-muted-foreground">{property.province} → {property.district} → {property.sector} → {property.cell} → {property.village}</p>
                </div>

                {property.rules.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">{language === "en" ? "Rules" : "Amategeko"}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {property.rules.map((rule, i) => <li key={i} className="text-muted-foreground">{rule}</li>)}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>{language === "en" ? "Contact Owner" : "Vugana n'Umubare"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <span className="flex items-center justify-center h-full text-lg font-bold">{property.owner.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{property.owner.name}</div>
                    <div className="text-sm text-muted-foreground">{property.owner.role}</div>
                  </div>
                </div>

                {!showContactForm ? (
                  <Button onClick={() => setShowContactForm(true)} className="w-full bg-primary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {language === "en" ? "Send Request" : "Ohereza Icyifuzo"}
                  </Button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label>{language === "en" ? "Name" : "Izina"}</Label>
                      <Input value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} required />
                    </div>
                    <div>
                      <Label>{language === "en" ? "Phone" : "Telefoni"}</Label>
                      <Input value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} required />
                    </div>
                    <div>
                      <Label>{language === "en" ? "Message" : "Ubutumwa"}</Label>
                      <Textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} />
                    </div>
                    <Button type="submit" className="w-full bg-primary">{language === "en" ? "Send" : "Ohereza"}</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
