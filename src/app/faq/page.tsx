"use client"

import { useI18n } from "@/i18n/i18n-provider"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainLayout } from "@/components/layout/main-layout"
import { useState } from "react"
import { Search, HelpCircle, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function FAQ() {
  const { language } = useI18n()
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      question: language === "en" ? "What is SmartRent360?" : "SmartRent360 ni iki?",
      answer:
        language === "en"
          ? "SmartRent360 is a trusted platform connecting landlords, tenants, and verified agents in Rwanda to make property rental and sales simple, secure, and transparent."
          : "SmartRent360 ni platform yizindagira ubarezi, abari ho, n'abizamizi bemewe mu Rwanda kugira ngo ubwiyunge bw'ubwato no kusiga ry'igitabo byoroshye, byizewe, n'byumva neza.",
    },
    {
      question: language === "en" ? "How are properties verified?" : "Inyubako zemewe ziteka?",
      answer:
        language === "en"
          ? "All properties go through our verification process where our admin team checks property documents, visits the location, and confirms ownership before listing."
          : "Inyubako zose zinyura mu nzira yacu yo kwemeza aho itsinda ryacu ry'ubuyobozi rigenzura inyandiko z'inyubako, risura aho biherereye, kandi rigemeza ubwite mbere yo gushyira ku rutonde.",
    },
    {
      question: language === "en" ? "Do tenants pay SmartRent360?" : "Abakura inzu barisha SmartRent360?",
      answer:
        language === "en"
          ? "No, tenants don't pay any fees to SmartRent360. Our platform is completely free for tenants to search and find properties."
          : "Oya, abakura inzu ntibatanga amafaranga kuri SmartRent360. Platform yacu ni ubuntu bwose ku bakura inzu gushakisha no kubona inyubako.",
    },
    {
      question: language === "en" ? "How do I register on SmartRent360?" : "Nitwa riki niyandikishe kuri SmartRent360?",
      answer:
        language === "en"
          ? 'Click "Sign Up", choose your role (Commissioner/Landlord/Tenant), fill in your details, and upload verification documents. Our team will verify and approve your account.'
          : 'Kanda "Andikishe", hitamo urwego rwawe (Commissioner/Umubare/Umuntu wizeye mu nzu), uzuza amakuru yawe, ugure ibivuga neza. Itsinda ryacu rizavuga neza no kwemeza akawunti yawe.',
    },
    {
      question: language === "en" ? "Is SmartRent360 free to use?" : "Kuri SmartRent360 kerekana amafaranga?",
      answer:
        language === "en"
          ? "Registration and browsing properties is free. Landlords and Commissioners pay a 20% commission on successful rentals or sales. Premium features may apply in the future."
          : "Kwiyandikisha n'kureba igitabo ki kerekana amafaranga. Ubarezi na Commissioners barisha 20% muburyo bwizewe ku buryo busungu cyangwa gusiga. Ubwenge bwita byinshi bishobora gukoreshwa mu gihe kizaza.",
    },
    {
      question: language === "en" ? "How do commissioners earn?" : "Abizamizi barahura iteka?",
      answer:
        language === "en"
          ? "Commissioners earn a commission for each successful rental or sale they facilitate. SmartRent360 takes a 20% platform fee from this commission."
          : "Abizamizi barahura komisyon ku buri subizo bwizewe ku buryo cyangwa gusiga. SmartRent360 ifata 20% iyo ikuru rinyuma.",
    },
    {
      question: language === "en" ? "How safe is my data?" : "Ingero yiyi ari yizewe?",
      answer:
        language === "en"
          ? "We use industry-standard encryption and security protocols to protect your personal and financial information. All transactions are verified and logged."
          : "Dukoreshamo encryption ibyiyeyu n'amahoro y'imiganire kugira ngo tuzigire ingero y'ubwiyunge n'imibanire. Ibiganiro byose bigaragazwa no gukoresha.",
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const searchLower = searchTerm.toLowerCase()
    return faq.question.toLowerCase().includes(searchLower) || faq.answer.toLowerCase().includes(searchLower)
  })

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Frequently Asked Questions" : "Ibibazo Byinshi Bibaziwe"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {language === "en"
              ? "Find answers to common questions about SmartRent360"
              : "Shaka ibisubizo ku ibibazo bikunze kubibaziwe kubyerekeye SmartRent360"}
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === "en" ? "Search questions..." : "Shakisha ibibazo..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <Badge variant="secondary" className="mb-4">
                    {language === "en" ? "No results" : "Nta bisobanuye"}
                  </Badge>
                  <p className="text-muted-foreground">
                    {language === "en"
                      ? "No FAQs match your search. Try different keywords."
                      : "Nta FAQ bifitanye iyo shakisha."}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === "en" ? "Still have questions?" : "Uracyafite ibibazo?"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === "en" 
              ? "Can't find what you're looking for? Contact our support team."
              : "Ntushobora kubona icyo ushakisha? Vugana n'itsinda ryacu ry'ubufasha."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                {language === "en" ? "Contact Support" : "Vugana n'Ubufasha"}
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="w-5 h-5" />
              {language === "en" ? "Call Us" : "Duhamagare"}
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
