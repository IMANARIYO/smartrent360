"use client"

import { useState } from "react"
import { PropertyRequest, PropertyType } from "../_types"
import { useRwandaGeo } from "@/hooks/useRwandaGeo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface PropertyFormProps {
  initialData?: Partial<PropertyRequest>
  onSubmit: (data: PropertyRequest) => void
  isLoading?: boolean
}

export function PropertyForm({ initialData, onSubmit, isLoading }: PropertyFormProps) {
  const [formData, setFormData] = useState<Partial<PropertyRequest>>({
    title: initialData?.title || '',
    type: initialData?.type || PropertyType.HOUSE,
    price: initialData?.price || 0,
    location: initialData?.location || '',
    rooms: initialData?.rooms || 0,
    ownerId: initialData?.ownerId || '',
    gpsLat: initialData?.gpsLat,
    gpsLng: initialData?.gpsLng,
    rules: initialData?.rules || []
  })

  const { selection, provinces, districts, sectors, cells, villages, setProvince, setDistrict, setSector, setCell, setVillage } = useRwandaGeo({
    province: initialData?.province,
    district: initialData?.district,
    sector: initialData?.sector,
    cell: initialData?.cell,
    village: initialData?.village
  })
  const [ruleInput, setRuleInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      province: selection.province,
      district: selection.district,
      sector: selection.sector,
      cell: selection.cell,
      village: selection.village
    } as PropertyRequest)
  }

  const addRule = () => {
    if (ruleInput.trim()) {
      setFormData(prev => ({ ...prev, rules: [...(prev.rules || []), ruleInput.trim()] }))
      setRuleInput('')
    }
  }

  const removeRule = (index: number) => {
    setFormData(prev => ({ ...prev, rules: prev.rules?.filter((_, i) => i !== index) }))
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            gpsLat: position.coords.latitude,
            gpsLng: position.coords.longitude
          }))
        },
        (error) => alert('Unable to get location: ' + error.message)
      )
    } else {
      alert('Geolocation is not supported by your browser')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? 'Edit Property' : 'Add Property'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input value={formData.title} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} required />
          </div>

          <div>
            <Label>Type</Label>
            <select value={formData.type} onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as PropertyType }))} className="w-full px-3 py-2 border rounded-md" required>
              {Object.values(PropertyType).map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div>
            <Label>Price</Label>
            <Input type="number" value={formData.price} onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))} required />
          </div>

          <div>
            <Label>Location</Label>
            <Input value={formData.location} onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))} required />
          </div>

          <div>
            <Label>Rooms</Label>
            <Input type="number" value={formData.rooms} onChange={(e) => setFormData(prev => ({ ...prev, rooms: Number(e.target.value) }))} />
          </div>

          <div>
            <Label>Owner ID</Label>
            <Input value={formData.ownerId} onChange={(e) => setFormData(prev => ({ ...prev, ownerId: e.target.value }))} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Province</Label>
              <select value={selection.province} onChange={(e) => setProvince(e.target.value)} className="w-full px-3 py-2 border rounded-md" required>
                <option value="">Select Province</option>
                {provinces.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <Label>District</Label>
              <select value={selection.district} onChange={(e) => setDistrict(e.target.value)} className="w-full px-3 py-2 border rounded-md" required disabled={!selection.province}>
                <option value="">Select District</option>
                {districts.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <Label>Sector</Label>
              <select value={selection.sector} onChange={(e) => setSector(e.target.value)} className="w-full px-3 py-2 border rounded-md" required disabled={!selection.district}>
                <option value="">Select Sector</option>
                {sectors.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <Label>Cell</Label>
              <select value={selection.cell} onChange={(e) => setCell(e.target.value)} className="w-full px-3 py-2 border rounded-md" required disabled={!selection.sector}>
                <option value="">Select Cell</option>
                {cells.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <Label>Village</Label>
              <select value={selection.village} onChange={(e) => setVillage(e.target.value)} className="w-full px-3 py-2 border rounded-md" required disabled={!selection.cell}>
                <option value="">Select Village</option>
                {villages.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <Label>GPS Coordinates</Label>
              <Button type="button" variant="outline" size="sm" onClick={getCurrentLocation}>
                <MapPin className="w-4 h-4 mr-2" />
                Use Current Location
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Latitude</Label>
                <Input type="number" step="any" value={formData.gpsLat || ''} onChange={(e) => setFormData(prev => ({ ...prev, gpsLat: Number(e.target.value) }))} />
              </div>
              <div>
                <Label>Longitude</Label>
                <Input type="number" step="any" value={formData.gpsLng || ''} onChange={(e) => setFormData(prev => ({ ...prev, gpsLng: Number(e.target.value) }))} />
              </div>
            </div>
          </div>

          <div>
            <Label>Rules</Label>
            <div className="flex gap-2">
              <Input value={ruleInput} onChange={(e) => setRuleInput(e.target.value)} placeholder="Add a rule" />
              <Button type="button" onClick={addRule}>Add</Button>
            </div>
            <div className="mt-2 space-y-1">
              {formData.rules?.map((rule, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <span>{rule}</span>
                  <Button type="button" variant="primary" size="sm" onClick={() => removeRule(i)}>Remove</Button>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Submitting...' : initialData ? 'Update Property' : 'Add Property'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
