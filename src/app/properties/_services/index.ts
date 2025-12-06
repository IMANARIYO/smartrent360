import api from "@/lib/apiConfig";
import { PropertyRequest, PropertyType } from "../_types";

export enum PropertyStatus {
  AVAILABLE = "AVAILABLE",
  RENTED = "RENTED",
  SOLD = "SOLD",
}

export interface PropertyFilters {
  type?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  rooms?: number;
  status?: PropertyStatus;
  verified?: boolean;
  province?: string;
  district?: string;
  sector?: string;
  cell?: string;
  village?: string;
  page?: number;
  pageSize?: number;
}

export const propertyService = {
  search: (params: PropertyFilters) => api.get("/properties", { params }),

  create: (data: PropertyRequest) => api.post("/properties", data),

  getById: (id: string) => api.get(`/properties/${id}`),

  update: (id: string, data: Partial<PropertyRequest>) =>
    api.patch(`/properties/${id}`, data),

  verify: (id: string) => api.patch(`/properties/${id}/verify`),

  getPendingVerification: (page = 1, pageSize = 10) =>
    api.get("/properties/pending/verification", { params: { page, pageSize } }),
};
