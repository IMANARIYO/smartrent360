"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold">SR</span>
            </div>
            <p className="text-sm">SmartRent360 - Modern property management for Rwanda</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="hover:text-primary-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-primary-400 transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">© {currentYear} SmartRent360. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
