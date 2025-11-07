import type React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-lg border border-neutral-200
        shadow-sm hover:shadow-md transition-shadow
        p-4 md:p-6
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`mb-4 pb-4 border-b border-neutral-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "", ...props }: CardProps) {
  return (
    <h2 className={`text-xl font-bold text-neutral-900 ${className}`} {...props}>
      {children}
    </h2>
  )
}

export function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
