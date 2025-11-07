import type React from "react"

type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "error" | "info"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  children: React.ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-neutral-200 text-neutral-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  error: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
}

export function Badge({ variant = "primary", children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5 rounded-full
        text-xs font-medium
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
