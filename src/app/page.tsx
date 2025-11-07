"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Users, Search, UserPlus, Shield, MapPin, Star, Home } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { MainLayout } from "@/components/layout/main-layout"

export default function HomePage() {
  const { language } = useI18n()

  const content = {
    en: {
      hero: {
        title: "Rwanda's Trusted Online Housing & Real Estate Platform",
        subtitle: "Connect with verified agents, landlords, and find your perfect home across all districts of Rwanda.",
        cta1: "Find a House",
        cta2: "Learn More",
      },
      howItWorks: "How It Works",
      steps: [
        {
          icon: "verify",
          title: "Agent Verification",
          description: "Agents undergo strict verification process for platform credibility",
        },
        {
          icon: "property",
          title: "Verified Properties",
          description: "All properties verified and inspected for authenticity",
        },
        {
          icon: "connect",
          title: "Tenant Connection",
          description: "Seamless connection between renters and verified landlords",
        },
        {
          icon: "commission",
          title: "Fair Commissions",
          description: "Transparent commission structure ensuring fairness for all",
        },
      ],
      whyChoose: "Why Choose SmartRent360?",
      benefits: [
        {
          title: "Verified Listings",
          description: "All properties and agents verified by our admin team for your safety and peace of mind.",
          icon: "check",
        },
        {
          title: "No Hidden Fees",
          description: "Transparent pricing with no surprise charges. Know exactly what you pay upfront.",
          icon: "home",
        },
        {
          title: "Easy Connection",
          description: "Direct connection to verified agents and landlords through our secure platform.",
          icon: "users",
        },
        {
          title: "Multi-District Coverage",
          description: "Access properties across all 30 districts of Rwanda in one convenient platform.",
          icon: "trending",
        },
      ],
      stats: [
        { label: "Verified Properties", value: "1,000+" },
        { label: "Trusted Agents", value: "500+" },
        { label: "Happy Clients", value: "2,000+" },
        { label: "Districts Covered", value: "30" },
      ],
      impact: "Built on Trust, Verified by Technology",
      cta: "Ready to Find Your Home?",
      ctaDesc: "Join thousands of Rwandans using SmartRent360 to find verified, fair housing.",
      browse: "Start Browsing",
    },
    rw: {
      hero: {
        title: "Porofesiyoni y'Inyubako n'Umutungo w'Ubwisanzuye mu Rwanda",
        subtitle: "Guhuza n'abamukozi verifiwe, abakunda inzu, kandi shakisha inzu yacu neza mu Rwanda.",
        cta1: "Shakisha Inzu",
        cta2: "Menya Byinshi",
      },
      howItWorks: "Uburyo Bwo Gukora",
      steps: [
        {
          icon: "verify",
          title: "Verifikasyon y'Umukozi",
          description: "Abamukozi baharura muri porofesiyoni neza cyane",
        },
        {
          icon: "property",
          title: "Inyubako Zemewe",
          description: "Inyubako zose zemewe kandi zisuzumwa",
        },
        {
          icon: "connect",
          title: "Guhuza Abakozi",
          description: "Guhuza mu buhoro abakura inzu n'abakunda inzu verifiwe",
        },
        {
          icon: "commission",
          title: "Igiciro Cyukuri",
          description: "Igiciro cyukuri gitanga ubwiyunge kuri bose",
        },
      ],
      whyChoose: "Kuki Uhitamo SmartRent360?",
      benefits: [
        {
          title: "Inyambo Zemewe",
          description: "Inyubako n'abamukozi verifiwe n'ikipe yacu kugira neza.",
          icon: "check",
        },
        {
          title: "Nta Magana Mashakwa",
          description: "Igiciro cyubwiyunge nta magana mashakwa.",
          icon: "home",
        },
        {
          title: "Guhuza Byoroshye",
          description: "Guhuza cyoroshye n'abamukozi verifiwe kuri iyi porofesiyoni.",
          icon: "users",
        },
        {
          title: "Kuva Mu Rwanda",
          description: "Shakisha inyubako mu nzira 30 z'u Rwanda mu ndege rimwe.",
          icon: "trending",
        },
      ],
      stats: [
        { label: "Inyubako Zemewe", value: "1,000+" },
        { label: "Abamukozi Yizewe", value: "500+" },
        { label: "Abakozi Bashimwe", value: "2,000+" },
        { label: "Nzira", value: "30" },
      ],
      impact: "Yitegekeza Ubwiyunge, Verifiwe mu Teknologiya",
      cta: "Witeguye Gushakisha Inzu Yacu?",
      ctaDesc: "Injira mu banyarwanda barimo gukoresha SmartRent360.",
      browse: "Tangira Kureba",
    },
  }

  const t = language === "en" ? content.en : content.rw

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "check":
        return <CheckCircle className="w-10 h-10 text-primary" />
      case "home":
        return <Home className="w-10 h-10 text-primary" />
      case "users":
        return <Users className="w-10 h-10 text-primary" />
      case "trending":
        return <MapPin className="w-10 h-10 text-primary" />
      default:
        return null
    }
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-house-rwanda.jpg"
            alt="Modern house in Rwanda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center text-white">
          <Badge className="mb-6 inline-block bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {language === "en" ? "Welcome to Rwanda's Housing Platform" : "Karibu kuri Rwanda's Housing Platform"}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 gap-2">
                <Search className="w-5 h-5" />
                {t.hero.cta1}
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm gap-2">
                <UserPlus className="w-5 h-5" />
                {language === "en" ? "Register as Agent" : "Andikisha nka Agent"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-linear-to-r from-primary/10 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === "en" ? "Built on Trust, Verified by Technology" : "Yitegekeza Ubwiyunge, Verifiwe mu Teknologiya"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.howItWorks}</h2>
            <Separator className="w-12 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: t.steps[0].title, desc: t.steps[0].description, color: "bg-green-100 text-green-600" },
              { icon: Home, title: t.steps[1].title, desc: t.steps[1].description, color: "bg-blue-100 text-blue-600" },
              { icon: Users, title: t.steps[2].title, desc: t.steps[2].description, color: "bg-purple-100 text-purple-600" },
              { icon: Star, title: t.steps[3].title, desc: t.steps[3].description, color: "bg-yellow-100 text-yellow-600" }
            ].map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div key={idx} className="relative text-center">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-6`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-linear-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.whyChoose}</h2>
            <Separator className="w-12 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.benefits.map((benefit, idx) => (
              <Card key={idx} className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="pt-8 pb-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(benefit.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-villa-kigali.jpg"
            alt="Luxury villa in Kigali"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.cta}</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 gap-2">
                <Search className="w-5 h-5" />
                {t.browse}
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm gap-2">
                <UserPlus className="w-5 h-5" />
                {language === "en" ? "Join as Agent" : "Injira nka Agent"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
