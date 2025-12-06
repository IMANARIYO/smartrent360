import api from "@/lib/apiConfig";
import {
  RegisterRequest,
  LoginRequest,
  LoginResponse,
  User,
  ApiResponse,
  PaginatedResponse,
  PaginationParams,
} from "../_types/auth_types";

// Auth endpoints
export const userApi = {
  register: (data: RegisterRequest) =>
    api.post<ApiResponse<User>>("/users/register", data),

  login: (data: LoginRequest) =>
    api.post<ApiResponse<LoginResponse>>("/users/login", data),

  getUserById: (id: string) => api.get<ApiResponse<User>>(`/users/${id}`),

  verifyUser: (id: string) =>
    api.patch<ApiResponse<User>>(`/users/${id}/verify`),

  getPendingUsers: (params?: PaginationParams) =>
    api.get<PaginatedResponse<User>>("/users/pending/verification", { params }),
};
