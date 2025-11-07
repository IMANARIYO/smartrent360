"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut, LayoutDashboard, User, Home, Plus, TrendingUp, Bell, AlertCircle } from "lucide-react"

export default function CommissionerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { language } = useI18n()

  const navItems = [
    {
      href: "/commissioner/dashboard",
      label: language === "en" ? "Dashboard" : "Icyiciro",
      icon: LayoutDashboard,
    },
    {
      href: "/commissioner/profile",
      label: language === "en" ? "My Profile" : "Umwimerere Wanjye",
      icon: User,
    },
    {
      href: "/commissioner/properties",
      label: language === "en" ? "My Properties" : "Ibigitabo Byanjye",
      icon: Home,
    },
    {
      href: "/commissioner/add-property",
      label: language === "en" ? "Add Property" : "Ongeraho Igitabo",
      icon: Plus,
    },
    {
      href: "/commissioner/leads",
      label: language === "en" ? "Leads" : "Amagambo",
      icon: TrendingUp,
    },
    {
      href: "/commissioner/commission-tracker",
      label: language === "en" ? "Commission" : "Komisyon",
      icon: TrendingUp,
    },
    {
      href: "/commissioner/notifications",
      label: language === "en" ? "Notifications" : "Amakumenyetso",
      icon: Bell,
    },
    {
      href: "/commissioner/reports",
      label: language === "en" ? "Reports" : "Raporo",
      icon: AlertCircle,
    },
  ]

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="text-lg font-bold text-primary-500">SmartRent360</h2>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-primary-500">
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start sidebar-nav-item"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} className="mr-3" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <Button variant="outline" className="w-full justify-start text-error bg-transparent">
            <LogOut size={20} className="mr-3" />
            {language === "en" ? "Logout" : "Sohoka"}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <div className="dashboard-topbar">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-primary-500">
            <Menu size={24} />
          </button>

          <div className="topbar-right">
            <div className="user-info">
              <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                JC
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Jean Claude</p>
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "Verified Agent" : "Umwihangane Wemewe"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="dashboard-content">{children}</div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  )
}
