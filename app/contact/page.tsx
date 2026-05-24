"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer } from "@/components/stagger-container"
import { Mail, Phone, Github, Linkedin, Twitter, Send, Clock, Globe, MessageSquare, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MessageCircle, // تم تغيير Mail إلى MessageCircle
      title: "WhatsApp", // تم تغيير Email إلى WhatsApp
      value: "+20 115 348 2672", // رقم الواتساب
      href: "https://wa.me/201153482672", // رابط الواتساب
      description: "Send me a message anytime", // وصف جديد
    },
    {
      // إضافة الإيميل كخيار ثانوي
      icon: Mail,
      title: "Email",
      value: "abdelwahab.codes@gmail.com",
      href: "mailto:abdelwahab.codes@gmail.com",
      description: "Professional inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 115 348 2672",
      href: "tel:+201153482672",
      description: "Call me during business hours",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      href: "#",
      description: "I typically respond within a day",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/abdelwahabazhary311",
      username: "@abdelwahabazhary311",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abdoazhary/",
      username: "/in/abdoazhary",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageSquare,
      name: "whatsapp",
      href: "https://wa.me/201153482672",
      username: "@abdelwahabazhary",
      color: "hover:text-blue-400",
    },
    // {
    //   icon: Globe,
    //   name: "Portfolio",
    //   href: "https://abdelwahab.dev",
    //   username: "abdelwahab.dev",
    //   color: "hover:text-green-600",
    // },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" duration={800}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              I'd love to hear about your project! Feel free to reach out.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <MessageSquare className="h-5 w-5" />
              <span>I'm always excited to discuss new opportunities and interesting projects</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left" duration={800}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-slate-900 dark:text-slate-50">
                  <Send className="h-6 w-6 text-blue-600" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <ScrollReveal direction="right" duration={800} delay={200}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-slate-50">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <StaggerContainer staggerDelay={150}>
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-50">{info.title}</h3>
                          <a href={info.href} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                            {info.value}
                          </a>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="right" duration={800} delay={400}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-slate-50">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-105 ${social.color} bg-white dark:bg-slate-800`}
                      >
                        <social.icon className="h-6 w-6" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-50">{social.name}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{social.username}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Availability */}
            <ScrollReveal direction="right" duration={800} delay={600}>
              <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-50">
                      Available for New Projects
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      I'm currently accepting new freelance projects and full-time opportunities. Let's discuss how we
                      can work together!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
