"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, Linkedin, MessageCircle, Phone } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/abdelwahabazhary311", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdoazhary/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/201153482672", label: "WhatsApp" },
    { icon: Phone, href: "tel:+201153482672", label: "Phone" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 animate-in slide-in-from-top-2 duration-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Abdelwahab AZ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                  pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links & Controls */}
          <div className="flex items-center gap-2">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Theme Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-8 w-8 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center gap-2 mt-4 px-3">
                {socialLinks.map((social) => (
                  <Button key={social.label} variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
