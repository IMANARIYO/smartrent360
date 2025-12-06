/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useI18n } from "@/i18n/i18n-provider"
import { propertyService, PropertyFilters } from "./_services"
import { Property, PropertyType } from "./_types"
import { PropertyCard } from "./_components/property-card"
import { useRwandaGeo } from "@/hooks/useRwandaGeo"
import { Search, Filter } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function PropertiesPage() {
  const { language } = useI18n()
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [totalItems, setTotalItems] = useState(0)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(12)
  const [filters, setFilters] = useState<PropertyFilters>({})
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { selection, provinces, districts, sectors, cells, villages, setProvince, setDistrict, setSector, setCell, setVillage, reset } = useRwandaGeo()

  useEffect(() => {
    fetchProperties()
  }, [page, filters])

  useEffect(() => {
    if (selection.province || selection.district || selection.sector || selection.cell || selection.village) {
      applyGeoFilters()
    }
  }, [selection.province, selection.district, selection.sector, selection.cell, selection.village])

  const fetchProperties = async () => {
    setLoading(true)
    try {
      const { data } = await propertyService.search({ ...filters, page, pageSize })
      setProperties(data.data)
      setTotalItems(data.meta.totalItems)
    } catch (error) {
      console.error('Failed to fetch properties:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyGeoFilters = () => {
    setPage(1)
    setFilters(prev => ({
      ...prev,
      province: selection.province || undefined,
      district: selection.district || undefined,
      sector: selection.sector || undefined,
      cell: selection.cell || undefined,
      village: selection.village || undefined
    }))
  }

  const applyFilters = () => {
    setPage(1)
    setIsFilterOpen(false)
  }

  const resetAllFilters = () => {
    setFilters({})
    reset()
    setPage(1)
    setIsFilterOpen(false)
  }

  const totalPages = Math.ceil(totalItems / pageSize)

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-linear-to-r from-primary/10 to-primary/5 py-12">
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

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-4 flex gap-2">
            <Input
              placeholder={language === "en" ? "Search by location" : "Shakisha aho"}
              value={filters.search || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="flex-1"
            />

            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  {language === "en" ? "Filters" : "Mushyire"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4 space-y-4">
                <div className="space-y-3">
                  <select
                    value={filters.type || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value as PropertyType || undefined }))}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">{language === "en" ? "Property Type" : "Ubwoko"}</option>
                    {Object.values(PropertyType).map(type => <option key={type} value={type}>{type}</option>)}
                  </select>

                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="number"
                      placeholder={language === "en" ? "Min Price" : "Gito"}
                      value={filters.minPrice || ''}
                      onChange={(e) => setFilters(prev => ({ ...prev, minPrice: Number(e.target.value) || undefined }))}
                    />
                    <Input
                      type="number"
                      placeholder={language === "en" ? "Max Price" : "Kinini"}
                      value={filters.maxPrice || ''}
                      onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) || undefined }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <select value={selection.province} onChange={(e) => setProvince(e.target.value)} className="w-full px-3 py-2 border rounded-md">
                      <option value="">{language === "en" ? "Province" : "Intara"}</option>
                      {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>

                    <select value={selection.district} onChange={(e) => setDistrict(e.target.value)} className="w-full px-3 py-2 border rounded-md" disabled={!selection.province}>
                      <option value="">{language === "en" ? "District" : "Akarere"}</option>
                      {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>

                    <select value={selection.sector} onChange={(e) => setSector(e.target.value)} className="w-full px-3 py-2 border rounded-md" disabled={!selection.district}>
                      <option value="">{language === "en" ? "Sector" : "Umurenge"}</option>
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>

                    <select value={selection.cell} onChange={(e) => setCell(e.target.value)} className="w-full px-3 py-2 border rounded-md" disabled={!selection.sector}>
                      <option value="">{language === "en" ? "Cell" : "Akagari"}</option>
                      {cells.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <select value={selection.village} onChange={(e) => setVillage(e.target.value)} className="w-full px-3 py-2 border rounded-md" disabled={!selection.cell}>
                      <option value="">{language === "en" ? "Village" : "Umudugudu"}</option>
                      {villages.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={resetAllFilters} variant="outline" className="flex-1">
                      {language === "en" ? "Reset" : "Siba"}
                    </Button>
                    <Button onClick={applyFilters} className="flex-1 bg-primary">
                      <Search className="w-4 h-4 mr-2" />
                      {language === "en" ? "Apply" : "Emeza"}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Button onClick={applyFilters} className="bg-primary hover:bg-primary/90">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {language === "en"
                ? `Showing ${properties.length} of ${totalItems} properties`
                : `Erekana ${properties.length} muri ${totalItems}`}
            </p>
          </div>

          {loading && properties.length === 0 ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} language={language} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <Button variant="outline" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1 || loading}>
                    {language === "en" ? "Previous" : "Ibanze"}
                  </Button>
                  <span className="px-4">{page} / {totalPages}</span>
                  <Button variant="outline" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages || loading}>
                    {language === "en" ? "Next" : "Ibikurikira"}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </MainLayout>
  )
}