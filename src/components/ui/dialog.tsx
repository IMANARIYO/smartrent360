"use client"

import React from "react"

import { useState, type ReactNode } from "react"
import { X } from "lucide-react"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

interface DialogTriggerProps {
  asChild?: boolean
  children: ReactNode
  onClick?: () => void
}

interface DialogContentProps {
  children: ReactNode
  className?: string
}

interface DialogHeaderProps {
  children: ReactNode
  className?: string
}

interface DialogTitleProps {
  children: ReactNode
  className?: string
}

interface DialogDescriptionProps {
  children: ReactNode
  className?: string
}

interface DialogFooterProps {
  children: ReactNode
  className?: string
}

interface DialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextType | undefined>(undefined)

function useDialog() {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("Dialog components must be used within Dialog")
  }
  return context
}

export function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const setOpen = (newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen)
    } else {
      setUncontrolledOpen(newOpen)
    }
  }

  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>
}

export function DialogTrigger({ children, onClick }: DialogTriggerProps) {
  const { setOpen } = useDialog()
  return (
    <div
      onClick={() => {
        setOpen(true)
        onClick?.()
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  )
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
  const { open, setOpen } = useDialog()

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 max-w-md w-full mx-4 ${className}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-1 hover:bg-neutral-100 rounded transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </>
  )
}

export function DialogHeader({ children, className = "" }: DialogHeaderProps) {
  return <div className={`px-6 pt-6 pb-4 border-b border-neutral-200 ${className}`}>{children}</div>
}

export function DialogTitle({ children, className = "" }: DialogTitleProps) {
  return <h2 className={`text-xl font-bold text-foreground ${className}`}>{children}</h2>
}

export function DialogDescription({ children, className = "" }: DialogDescriptionProps) {
  return <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
}

export function DialogFooter({ children, className = "" }: DialogFooterProps) {
  return <div className={`px-6 py-4 border-t border-neutral-200 flex gap-3 justify-end ${className}`}>{children}</div>
}
