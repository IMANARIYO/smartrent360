import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Input({ label, error, helperText, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 rounded-lg
          border-2 border-neutral-200
          focus:border-primary-500 focus:outline-none
          disabled:bg-neutral-100 disabled:cursor-not-allowed
          text-neutral-900 placeholder-neutral-400
          transition-colors duration-200
          ${error ? "border-error" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
      {helperText && !error && <p className="text-neutral-500 text-sm mt-1">{helperText}</p>}
    </div>
  )
}
