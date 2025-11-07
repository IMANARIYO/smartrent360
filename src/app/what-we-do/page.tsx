"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/layout/main-layout"
import { Users, Home, Search, CheckCircle, Star, ArrowRight } from "lucide-react"

export default function WhatWeDoPage() {
  const { language } = useI18n()

  const content = {
    en: {
      title: "What We Do",
      subtitle: "How SmartRent360 Works for You",
      commissioners: {
        title: "For Commissioners (Agents)",
        benefits: [
          "Reach more clients online with verified listings",
          "Get direct connections to interested tenants",
          "Build your reputation with verified agent status",
          "Earn fair commission on successful deals",
          "Access a trusted network of landlords and tenants",
        ],
      },
      landlords: {
        title: "For Landlords",
        benefits: [
          "Post properties and reach tenants directly",
          "Verify tenants before showing properties",
          "Manage properties remotely from anywhere",
          "Choose to work directly or with verified agents",
          "Get accurate market data for your properties",
        ],
      },
      tenants: {
        title: "For Tenants & Buyers",
        benefits: [
          "Search verified properties across Rwanda",
          "No hidden fees or surprise charges",
          "Get connected directly to verified agents/landlords",
          "View detailed property information and photos",
          "Save favorites and track your applications",
        ],
      },
      process: {
        title: "Our Process",
        steps: [
          { num: "1", title: "Registration", desc: "Users verify their identity and get approved" },
          { num: "2", title: "Listing", desc: "Properties are posted and reviewed by admin" },
          { num: "3", title: "Search", desc: "Tenants find verified properties with filters" },
          { num: "4", title: "Connection", desc: "Admin connects interested parties directly" },
          { num: "5", title: "Deal", desc: "Commission is earned and shared fairly" },
          { num: "6", title: "Trust Built", desc: "System records ensure transparency" },
        ],
      },
    },
    rw: {
      title: "Dukunze",
      subtitle: "Dukunze mu SmartRent360",
      commissioners: {
        title: "Kumakozi",
        benefits: [
          "Bahabwa ubwiyunge bukururuza",
          "Basura ibirembereye mu porofesiyoni",
          "Bikorereza ababari n'abakunda inzu",
          "Bakigereza iy'ibibwi",
          "Barwanya akazi k'ubwenge",
        ],
      },
      landlords: {
        title: "Kumabakunda Inzu",
        benefits: [
          "Bahishuza inyubako zahembwe",
          "Bamereza ababari mbere",
          "Biruta mu mahanga",
          "Bahitamo guhura cyangwa guhamagara",
          "Basobanukirwa igiciro cy'inyubako",
        ],
      },
      tenants: {
        title: "Kumababari n'Abagura",
        benefits: [
          "Bashakisha inyubako zemewe",
          "Nta magana mashakwa",
          "Bahuza n'umukozi yemewe",
          "Bayikira umuyoboro w'inyubako",
          "Bashyiramo ibibwi",
        ],
      },
      process: {
        title: "Inzira Yacu",
        steps: [
          { num: "1", title: "Iyandikishe", desc: "Abakoresha verifiwe na amakuru" },
          { num: "2", title: "Kuhinza", desc: "Inyubako yahishuza no kumvikana" },
          { num: "3", title: "Kusaka", desc: "Ababari basaka inyubako zemewe" },
          { num: "4", title: "Guhuza", desc: "Muhinzagurutsi ahuza amabarenzi" },
          { num: "5", title: "Mboga", desc: "Inyungu yashyizweho neza" },
          { num: "6", title: "Kwizera", desc: "Sisitemu iranga ubwiyunge" },
        ],
      },
    },
  }

  const t = language === "en" ? content.en : content.rw

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/residential-home.jpg"
            alt="Residential homes in Rwanda"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 inline-block bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {language === "en" ? "Our Services" : "Serivisi Zacu"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl opacity-90">{t.subtitle}</p>
        </div>
      </section>

      {/* User Groups */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Who We Serve" : "Abadufasha"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "en" 
                ? "SmartRent360 serves three main user groups in Rwanda's housing market"
                : "SmartRent360 ifasha amatsinda atatu mu isoko ry'inyubako mu Rwanda"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-primary/20 hover:shadow-lg transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">{t.commissioners.title}</h2>
              </div>
              <ul className="space-y-4">
                {t.commissioners.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-green-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-600">{t.landlords.title}</h2>
              </div>
              <ul className="space-y-4">
                {t.landlords.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-600">{t.tenants.title}</h2>
              </div>
              <ul className="space-y-4">
                {t.tenants.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.process.title}</h2>
            <p className="text-lg text-muted-foreground">
              {language === "en" 
                ? "Simple steps that ensure trust and transparency"
                : "Intambwe zoroshye ziranga ubwiyunge n'ubwumvikane"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.process.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="p-6 text-center border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </Card>
                
                {idx < t.process.steps.length - 1 && idx % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en" ? "Ready to Get Started?" : "Witeguye Gutangira?"}
          </h2>
          <p className="text-xl mb-10 opacity-90">
            {language === "en" 
              ? "Join thousands of Rwandans using SmartRent360 for their housing needs"
              : "Injira mu banyarwanda barimo gukoresha SmartRent360 mu bikenewe by'inyubako"}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="px-8 py-4 bg-white text-primary hover:bg-white/90 gap-2">
                <Search className="w-5 h-5" />
                {language === "en" ? "Browse Properties" : "Reba Inyubako"}
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="px-8 py-4 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm gap-2">
                <Users className="w-5 h-5" />
                {language === "en" ? "Join as Agent" : "Injira nka Agent"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
