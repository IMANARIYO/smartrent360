"use client"

import type { ReactNode } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
}

export function Modal({ isOpen, onClose, title, children, footer, size = "md" }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={`bg-white rounded-lg shadow-lg ${sizeClasses[size]} w-full`} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 id="modal-title" className="text-xl font-bold text-neutral-900">
              {title}
            </h2>
          </div>
        )}
        <div className="px-6 py-4">{children}</div>
        {footer && <div className="px-6 py-4 border-t border-neutral-200 flex gap-2 justify-end">{footer}</div>}
      </div>
    </div>
  )
}
