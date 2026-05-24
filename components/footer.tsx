"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle, Phone, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/abdelwahabazhary311", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdoazhary/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/201153482672", label: "WhatsApp" },
    { icon: Phone, href: "tel:+201153482672", label: "Phone" },
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 block"
            >
              Abdelwahab.dev
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              Passionate Frontend Developer specializing in React & Next.js. Creating exceptional user experiences and
              interactive web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-300 hover:text-white"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-slate-300">
              <p>
                <a href="https://wa.me/201153482672" className="hover:text-white transition-colors">
                  WhatsApp: +20 115 348 2672
                </a>
              </p>
              <p>
                <a href="mailto:abdelwahab.codes@gmail.com" className="hover:text-white transition-colors">
                  abdelwahab.codes@gmail.com
                </a>
              </p>
              <p>Egypt</p>
              <p className="text-sm">Available for remote work worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-slate-300 mb-4 md:mb-0">
            <span>© 2024 Abdelwahab Azhary. All rights reserved.</span>
            <Heart className="h-4 w-4 text-red-500" />
          </div>

          <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-slate-300 hover:text-white">
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
