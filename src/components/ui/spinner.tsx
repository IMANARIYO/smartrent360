interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
}

export function Spinner({ size = "md", className = "" }: SpinnerProps) {
  return (
    <div
      className={`
        inline-block ${sizeClasses[size]}
        border-2 border-neutral-300 border-t-primary-500
        rounded-full animate-spin
        ${className}
      `}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading</span>
    </div>
  )
}
