"use client"

import type React from "react"
import Image from "next/image"
import { useI18n } from "@/i18n/i18n-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/layout/main-layout"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const { language } = useI18n()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Have questions? We'd love to hear from you.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Message",
        success: "Thank you! We'll get back to you soon.",
      },
      info: {
        title: "Contact Information",
        email: "contact@smartrent360.rw",
        phone: "+250 (0)123 456 789",
        address: "Kigali, Rwanda",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      },
    },
    rw: {
      title: "Kontakta Ibibwi",
      subtitle: "Ufite ikibazo? Tubishaka kumenya ubwiyunge.",
      form: {
        name: "Izina Ryose",
        email: "Imeli",
        message: "Ubutumwa",
        submit: "Kohereza Ubutumwa",
        success: "Mwacu! Tugarukirira vuba.",
      },
      info: {
        title: "Kontakta Amakuru",
        email: "contact@smartrent360.rw",
        phone: "+250 (0)123 456 789",
        address: "Kigali, Rwanda",
        hours: "Kuwa Mbere - Kuwa Gatanu: 8:00 - 17:00",
      },
    },
  }

  const t = language === "en" ? content.en : content.rw

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-primary/10 to-primary/5" />
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 inline-block bg-primary/10 text-primary border-primary/20">
            {language === "en" ? "Contact SmartRent360" : "Vugana na SmartRent360"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === "en" ? "Send us a Message" : "Dukohereze Ubutumwa"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t.form.success}</h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">{t.form.name}</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2 h-12"
                        placeholder={language === "en" ? "John Doe" : "Jean Mukamana"}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">{t.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2 h-12"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-base font-medium">
                        {language === "en" ? "Subject" : "Ingingo"}
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        className="mt-2 h-12"
                        placeholder={language === "en" ? "How can we help?" : "Dushobora kugufasha iki?"}
                      />
                    </div>
                    <div>
                      <Label htmlFor="msg" className="text-base font-medium">{t.form.message}</Label>
                      <Textarea
                        id="msg"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="mt-2"
                        placeholder={language === "en" 
                          ? "Tell us about your question or concern..."
                          : "Tubwire ikibazo cyawe cyangwa icyo uhangayikishijwe..."}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 gap-2">
                      <Send className="w-5 h-5" />
                      {t.form.submit}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{t.info.title}</h2>
              <p className="text-muted-foreground">
                {language === "en" 
                  ? "Get in touch with our team. We're here to help!"
                  : "Vugana n'itsinda ryacu. Turi hano kugufasha!"}
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <p className="text-muted-foreground">{t.info.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Phone</p>
                      <p className="text-muted-foreground">{t.info.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground">{t.info.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {language === "en" ? "Business Hours" : "Amasaha y'Akazi"}
                      </p>
                      <p className="text-muted-foreground">{t.info.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A] gap-2"
                onClick={() => window.open("https://wa.me/250123456789", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                {language === "en" ? "Chat on WhatsApp" : "Vugana kuri WhatsApp"}
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full gap-2"
                onClick={() => window.open("tel:+250123456789")}
              >
                <Phone className="w-5 h-5" />
                {language === "en" ? "Call Now" : "Hamagara Ubu"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === "en" ? "Find Us" : "Dusange"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en" 
                ? "Located in the heart of Kigali, Rwanda"
                : "Duherereye mu mujyi wa Kigali, mu Rwanda"}
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  {language === "en" ? "SmartRent360 HQ" : "Icyicaro cya SmartRent360"}
                </p>
                <p className="text-muted-foreground">
                  {language === "en" 
                    ? "Interactive map showing our location in Kigali"
                    : "Ikarita yerekana aho duherereye i Kigali"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}
