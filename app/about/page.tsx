"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer } from "@/components/stagger-container"
import { Code2, Palette, Zap, Award, BookOpen, Coffee, Heart, Download, Calendar } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "I believe in writing code that is not only functional but also readable, maintainable, and scalable.",
      color: "text-blue-600",
    },
    {
      icon: Palette,
      title: "User-Centered Design",
      description: "Every decision I make is driven by creating the best possible experience for end users.",
      color: "text-purple-600",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Speed and efficiency are not afterthoughts - they are built into every project from the ground up.",
      color: "text-yellow-600",
    },
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "Technology evolves rapidly, and I am committed to continuous learning and improvement.",
      color: "text-red-600",
    },
  ]

  const journey = [
    {
      year: "2023",
      title: "Started Frontend Journey",
      description: "Began learning HTML, CSS, and JavaScript. Built my first interactive websites.",
      icon: BookOpen,
    },
    {
      year: "2024",
      title: "React Mastery",
      description: "Dove deep into React ecosystem. Learned Redux, Context API, and modern React patterns.",
      icon: Code2,
    },
    {
      year: "2025",
      title: "Professional Growth",
      description: "Started working on complex projects. Mastered Next.js, TypeScript, and advanced state management.",
      icon: Award,
    },
    {
      year: "Present",
      title: "Senior Developer",
      description: "Leading frontend development projects and mentoring junior developers.",
      icon: Zap,
    },
  ]

  const interests = [
    "Open Source Contributing",
    "Tech Blogging",
    "UI/UX Design",
    "Mobile Development",
    "Web Performance",
    "Accessibility",
    "Developer Tools",
    "Teaching & Mentoring",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" duration={800}>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </h1>
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
                  <p>Hello, I'm Abdelwahab! 👋</p>
                  <p>
                    A passionate Frontend Developer with expertise in modern web technologies, especially React and
                    Next.js. I love transforming designs into interactive and responsive web applications.
                  </p>
                  <p>
                    I'm dedicated to creating high-quality, user-friendly web solutions that meet and exceed
                    expectations.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source
                    projects, or sharing knowledge through blog posts and mentoring sessions.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://docs.google.com/document/d/12EM4Zr0_KiNOibZT6W5DFM2e3RAHDZxi/edit?usp=drive_link&ouid=108880956951811498385&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={800} delay={200}>
             <div className="relative group">
                {/* Background Gradient */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main Image Container */}
                <div className="relative group w-fit mx-auto">
            {/* إطار خارجي بلون متدرج خلف الصورة */}
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* الصورة نفسها */}
                 <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-slate-700 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                   <img
                     src="/images/photo1-casual.png"
                     alt="Abdelwahab Azhary"
                     className="w-[280px] h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                   />
              {/* Overlay عند الـ hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

          {/* دوائر عائمة للتزيين */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-80"></div>

          {/* Badge "React" أعلى اليسار */}
          <div className="absolute -top-2 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-2">
            <Badge
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              React
            </Badge>
  </div>

  {/* Badge "Next.js" أسفل اليمين */}
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

      {/* Values Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">My Core Values</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                These principles guide every project I work on and every line of code I write
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
                duration={600}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                      <CardTitle className="text-xl text-slate-900 dark:text-slate-100">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">My Journey</h2>
              <p className="text-slate-600 dark:text-slate-300">From curious beginner to experienced developer</p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {journey.map((item, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 200}
                  duration={700}
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          <Calendar className="mr-1 h-3 w-3" />
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Beyond Coding</h2>
              <p className="text-slate-600 dark:text-slate-300">
                My interests and activities outside of development work
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={800}>
            <div className="max-w-4xl mx-auto">
              <StaggerContainer staggerDelay={100}>
                <div className="flex flex-wrap gap-3 justify-center">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-colors cursor-pointer hover:scale-110 transform duration-300"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400} duration={600}>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Coffee className="h-5 w-5" />
                <span>Powered by coffee and curiosity</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
