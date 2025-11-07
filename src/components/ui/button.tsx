import type React from "react"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
  secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400",
  outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100",
  ghost: "text-primary-500 hover:bg-primary-50 active:bg-primary-100",
  danger: "bg-error text-white hover:bg-red-600 active:bg-red-700",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={`
        inline-flex items-center justify-center
        rounded-lg font-medium
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <span className="inline-block mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
