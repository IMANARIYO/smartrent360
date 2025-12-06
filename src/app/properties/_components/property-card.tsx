import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Property } from "../_types"
import { MapPin, Bed } from "lucide-react"

interface PropertyCardProps {
  property: Property
  language: string
}

export function PropertyCard({ property, language }: PropertyCardProps) {
  const imageUrl = property.media[0]?.url || "/placeholder-property.jpg"

  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
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
            {property.status}
          </Badge>
        </div>

        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.district}, {property.province}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-primary">{property.price.toLocaleString()} RWF</p>
            {property.rooms && (
              <div className="flex items-center text-muted-foreground">
                <Bed className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.rooms}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
