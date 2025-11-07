"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/layout/main-layout"
import { Shield, Users, Target, Heart, CheckCircle, TrendingUp, MapPin, Star } from "lucide-react"

export default function AboutPage() {
  const { language } = useI18n()

  const content = {
    en: {
      title: "About SmartRent360",
      subtitle: "Transforming Housing in Rwanda",
      vision: "Our Vision",
      visionText:
        "To become Rwanda's trusted national housing platform that connects Rwandans, strengthens local housing culture, and supports the country's digital future.",
      mission: "Our Mission",
      missionText:
        "We make renting, buying, and selling property in Rwanda simple, trusted, and fair for everyone through verification, transparency, and fair commission practices.",
      whoWeAre: "Who We Are",
      whoWeAreText:
        "SmartRent360 is a digital housing platform built to improve Rwanda's housing system without replacing traditional practices. We respect the Rwandan culture of trust and personal connection while adding technology to increase safety, efficiency, and transparency.",
      ourValues: "Our Values",
      values: [
        { title: "Trust", description: "Every user is verified. Every listing is checked. Safety comes first." },
        { title: "Fairness", description: "Transparent pricing with no hidden fees or surprise charges." },
        {
          title: "Efficiency",
          description: "Direct connections between verified parties reduce middlemen and delays.",
        },
        { title: "Inclusivity", description: "Bilingual platform in English and Kinyarwanda for all Rwandans." },
      ],
      impact: "Our Impact",
      impactPoints: [
        "Reduced fraud through verification and admin oversight",
        "Created digital jobs for admins, agents, and support staff",
        "Improved economic transparency in housing sector",
        "Supporting Rwanda's smart city and digital economy vision",
      ],
    },
    rw: {
      title: "Kuri SmartRent360",
      subtitle: "Guhindura Inzu mu Rwanda",
      vision: "Iyikariro Ryacu",
      visionText: "Kuba porofesiyoni nshya mu Rwanda ikora neza ndetse ihuza Abanyarwanda hose.",
      mission: "Inzira Yacu",
      missionText: "Dukunze gushakisha, kugura, n'ugurisha inyubako mu Rwanda byoroshye, nzira nshya, n'kwacu.",
      whoWeAre: "Twe Ari Inde?",
      whoWeAreText: "SmartRent360 ni platform y'inyubako ikoreshwa guhindura sisitemu y'inyubako mu Rwanda.",
      ourValues: "Indahiro Zacu",
      values: [
        { title: "Kwizera", description: "Buri mukozi wemewe. Buri nyubako yihe. Ubwiganze bwacu." },
        { title: "Kwacu", description: "Igiciro cyubwiyunge nta magana mashakwa." },
        { title: "Byoroshye", description: "Guhuza hagati y'abamwe yemewe." },
        { title: "Ishyirahamwe", description: "Platform yo mu Kigyarwanda n'Ururimi." },
      ],
      impact: "Inyungu Zacu",
      impactPoints: [
        "Gusigara mu kwinjira mu buryo bubi",
        "Gukora akazi k'ubwenge kuri internet",
        "Kubwiyunge igiciro cy'inyubako",
        "Kumurika ubwiyunge bwa Rwanda",
      ],
    },
  }

  const t = language === "en" ? content.en : content.rw

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/apartment-kigali.jpg"
            alt="Kigali cityscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 inline-block bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {language === "en" ? "About Our Platform" : "Kuri Platform Yacu"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t.subtitle}</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-primary">{t.vision}</h2>
            </div>
            <p className="text-foreground leading-relaxed text-lg">{t.visionText}</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-600">{t.mission}</h2>
            </div>
            <p className="text-foreground leading-relaxed text-lg">{t.missionText}</p>
          </Card>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "How SmartRent360 Works" : "SmartRent360 Ikora Ite"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "en" ? "Simple steps to find your perfect home" : "Intambwe zoroshye zo kubona inzu yacu"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">
                  {language === "en" ? "Agent Verification" : "Kwemeza Umukozi"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Agents register and get verified by admin" : "Abamukozi bandikisha kandi bemezwa"}
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">
                  {language === "en" ? "Property Listing" : "Gushyira Inyubako"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Landlords list verified properties" : "Abakunda inzu bashyira inyubako zemewe"}
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">
                  {language === "en" ? "Tenant Search" : "Abakura Inzu Bashakisha"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Tenants find and express interest" : "Abakura inzu bashakisha kandi berekana ubushake"}
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="text-center relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">
                  {language === "en" ? "Admin Connection" : "Guhuza na Admin"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Admin connects parties safely" : "Admin ahuza impande mu mutekano"}
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="text-center relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">
                  {language === "en" ? "Deal Completed" : "Amasezerano Arangiye"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Fair commission shared with agent" : "Igiciro cyacu gisangiwe n'umukozi"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Are */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t.whoWeAre}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.whoWeAreText}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "For Agents" : "Ku Bamukozi"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Verified platform to showcase expertise" : "Platform yemewe yo kwerekana ubumenyi"}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "For Landlords" : "Ku Bakunda Inzu"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Safe platform to list properties" : "Platform y'umutekano yo gushyira inyubako"}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "For Tenants" : "Ku Bakura Inzu"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Trusted way to find verified homes" : "Inzira yizewe yo kubona inzu zemewe"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">{t.ourValues}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, idx) => {
              const icons = [Shield, CheckCircle, TrendingUp, Users]
              const colors = ["text-primary", "text-green-600", "text-blue-600", "text-purple-600"]
              const bgColors = ["bg-primary/10", "bg-green-100", "bg-blue-100", "bg-purple-100"]
              const IconComponent = icons[idx]
              
              return (
                <Card key={idx} className="p-6 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <div className={`w-12 h-12 rounded-full ${bgColors[idx]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-6 h-6 ${colors[idx]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-villa-kigali.jpg"
            alt="Kigali development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.impact}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.impactPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/auth/login">
              <Button size="lg" className="px-8 py-4 bg-white text-primary hover:bg-white/90">
                {language === "en" ? "Join SmartRent360 Today" : "Injira kuri SmartRent360 Uyu Munsi"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
