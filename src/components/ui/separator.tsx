interface SeparatorProps {
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function Separator({ className = "", orientation = "horizontal" }: SeparatorProps) {
  return (
    <div
      className={`
        bg-neutral-200
        ${orientation === "horizontal" ? "h-px w-full" : "w-px h-full"}
        ${className}
      `}
    />
  )
}
