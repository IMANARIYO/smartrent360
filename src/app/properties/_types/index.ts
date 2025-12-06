export enum PropertyType {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT',
  PLOT = 'PLOT',
  ROOM = 'ROOM'
}

export enum PropertyStatus {
  AVAILABLE = 'AVAILABLE',
  RENTED = 'RENTED',
  SOLD = 'SOLD'
}

export enum Role {
  ADMIN = 'ADMIN',
  COMMISSIONER = 'COMMISSIONER',
  LANDLORD = 'LANDLORD',
  TENANT = 'TENANT'
}

export interface User {
  id: string
  name: string
  phone: string
  role: Role
  verified: boolean
  nationalId?: string
  createdAt: string
  updatedAt: string
}

export interface Media {
  id: string
  propertyId: string
  url: string
  name?: string
  description?: string
  createdAt: string
}

export interface Property {
  id: string
  title: string
  type: PropertyType
  price: number
  description: string
  rooms?: number
  status: PropertyStatus
  verified: boolean
  ownerId: string
  province: string
  district: string
  sector: string
  cell: string
  village: string
  gpsLat?: number
  gpsLng?: number
  rules: string[]
  owner: User
  media: Media[]
  createdAt: string
  updatedAt: string
}

export interface PropertyRequest {
  title: string
  type: PropertyType
  price: number
  location: string
  description?: string
  rooms?: number
  ownerId: string
  province: string
  district: string
  sector: string
  cell: string
  village: string
  gpsLat?: number
  gpsLng?: number
  rules?: string[]
}
