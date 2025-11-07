import type React from "react"

type AlertVariant = "info" | "success" | "warning" | "error"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; text: string; icon: string }> = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    icon: "text-blue-600",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    icon: "text-green-600",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    icon: "text-yellow-600",
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    icon: "text-red-600",
  },
}

export function Alert({ variant = "info", title, children, className = "", ...props }: AlertProps) {
  const styles = variantStyles[variant]

  return (
    <div
      className={`
        ${styles.bg} ${styles.border}
        border rounded-lg p-4
        ${className}
      `}
      role="alert"
      {...props}
    >
      {title && <h3 className={`${styles.text} font-medium mb-2`}>{title}</h3>}
      <div className={`${styles.text} text-sm`}>{children}</div>
    </div>
  )
}
