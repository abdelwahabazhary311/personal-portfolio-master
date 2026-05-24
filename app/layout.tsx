import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdelwahab Azhary",
  description: "Senior React Frontend Developer specializing in modern web applications",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // الأيقونة الرئيسية
    shortcut: "/favicon.ico", // للأمان
    apple: "/apple-touch-icon.png", // لو عندك أيقونة لأجهزة Apple (اختياري)
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          <LanguageProvider>
            <Navigation />
            <main className="pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
