"use client"

import React, { ReactElement } from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionProps {
  children: React.ReactNode
  className?: string
  type?: "single" | "multiple"
  collapsible?: boolean
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

export function Accordion({ children, className = "", type = "single", collapsible = true }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              openItem,
              setOpenItem,
            })
          : child,
      )}
    </div>
  )
}

export function AccordionItem({
  value,
  children,
  className = "",
  ...props
}: AccordionItemProps & { openItem?: string | null; setOpenItem?: (v: string | null) => void }) {
  const { openItem, setOpenItem } = props as any
  
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              value,
              openItem,
              setOpenItem,
            })
          : child,
      )}
    </div>
  )
}

export function AccordionTrigger({
  children,
  className = "",
  ...props
}: AccordionTriggerProps & {
  value?: string
  openItem?: string | null
  setOpenItem?: (v: string | null) => void
}) {
  const { value, openItem, setOpenItem } = props as any
  const isOpen = openItem === value

  return (
    <button
      onClick={() => setOpenItem?.(isOpen ? null : value)}
      className={`w-full flex items-center justify-between text-left font-medium hover:no-underline transition-colors ${className}`}
    >
      {children}
      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
  )
}

export function AccordionContent({
  children,
  className = "",
  ...props
}: AccordionContentProps & { value?: string; openItem?: string | null }) {
  const { value, openItem } = props as any

  if (openItem !== value) return null

  return <div className={className}>{children}</div>
}
