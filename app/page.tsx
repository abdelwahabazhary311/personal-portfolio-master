"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer } from "@/components/stagger-container"
import {
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Code,
  Palette,
  Smartphone,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Technologies" },
  ]

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "text-blue-600",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful user experiences",
      color: "text-purple-600",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach for all devices",
      color: "text-green-600",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and efficiency",
      color: "text-orange-600",
    },
  ]

  const recentTech = [
    "React 18",
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "React Query",
    "Material UI",
    "Sass",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" duration={800}>
              <div className="text-left">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4 animate-pulse">
                    <Star className="mr-2 h-3 w-3" />
                    Available for new projects
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Abdelwahab Azhary
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
                    Senior React Frontend Developer
                  </p>
                  <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                    Passionate Frontend Developer specializing in React & Next.js, creating exceptional user experiences
                    and interactive web applications with modern technologies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://wa.me/201153482672" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Me
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:scale-105 transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://docs.google.com/document/d/12EM4Zr0_KiNOibZT6W5DFM2e3RAHDZxi/edit?usp=drive_link&ouid=108880956951811498385&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-all duration-300" asChild>
                    <a href="https://github.com/abdelwahabazhary311" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-all duration-300" asChild>
                    <a href="https://www.linkedin.com/in/abdoazhary/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={800} delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative group w-fit mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-slate-700 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                    <img
                      src="/images/my_photo.jpeg"
                      alt="Abdelwahab Azhary"
                      className="w-[280px] h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-80"></div>

                  <div className="absolute -top-2 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      React
                    </Badge>
                  </div>

                  <div className="absolute -bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    >
                      Next.js
                    </Badge>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <StaggerContainer staggerDelay={150}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                What I Bring to Your Project
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Combining technical expertise with creative problem-solving to deliver exceptional results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
                duration={600}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardContent className="pt-6">
                    <feature.icon
                      className={`h-12 w-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">{feature.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
  <div className="container mx-auto">
    <ScrollReveal direction="up" duration={600}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Certificates & Achievements
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Some of the certifications I’ve earned along my journey
        </p>
      </div>
    </ScrollReveal>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "/images/IMG_3634.jpeg",
        "/images/IMG_3635.jpeg",
        "/images/IMG_3637.jpeg",
      ].map((src, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 100} duration={600}>
          <div className="group relative overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-300">
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-72 sm:h-80 md:h-96 object-contain bg-white dark:bg-slate-800 p-2 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">View Certificate</span>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>


      {/* Recent Technologies */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Latest Technologies</h2>
              <p className="text-slate-600 dark:text-slate-300">Always learning and working with cutting-edge tools</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={800}>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {recentTech.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-110 transform"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" duration={600}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Let's discuss how we can bring your ideas to life with modern web technologies
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
