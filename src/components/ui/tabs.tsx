"use client"

import type { ReactNode } from "react"
import React, { useState } from "react"

interface TabsProps {
  defaultValue: string
  children: ReactNode
  className?: string
}

interface TabListProps {
  children: ReactNode
  className?: string
}

interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: ReactNode
}

interface TabContentProps {
  value: string
  children: ReactNode
  className?: string
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              activeTab,
              setActiveTab,
            })
          : child,
      )}
    </div>
  )
}

export function TabList({ children, className = "" }: TabListProps) {
  return <div className={`flex border-b border-neutral-200 ${className}`}>{children}</div>
}

export function TabTrigger({
  value,
  children,
  activeTab,
  setActiveTab,
  ...props
}: TabTriggerProps & { activeTab?: string; setActiveTab?: (v: string) => void }) {
  return (
    <button
      onClick={() => setActiveTab?.(value)}
      className={`
        px-4 py-3 font-medium text-sm transition-colors border-b-2
        ${activeTab === value ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabContent({ value, children, className = "", activeTab }: TabContentProps & { activeTab?: string }) {
  if (activeTab !== value) return null

  return <div className={`py-4 ${className}`}>{children}</div>
}
