import type React from "react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`
        w-full px-4 py-2 rounded-lg
        border border-neutral-200
        focus:border-primary focus:ring-2 focus:ring-primary/20
        transition-colors
        resize-none
        ${className}
      `}
      {...props}
    />
  )
}
