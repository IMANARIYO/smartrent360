// User Types
export type UserRole = "ADMIN" | "TENANT" | "LANDLORD" | "COMMISSIONER";

export interface User {
  id: string;
  name: string;
  phone: string;
  role: UserRole;
  verified: boolean;
  nationalId: string;
  createdAt: string;
  updatedAt: string;
}

// Auth Types
export interface RegisterRequest {
  name: string;
  phone: string;
  password: string;
  role: UserRole;
  nationalId: string;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  status: "success" | "error";
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  status: "success";
  message: string;
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

// Query Parameters
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}
