"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer } from "@/components/stagger-container"
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Settings,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  MessageCircle,
} from "lucide-react"

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("frontend")

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Code2, color: "text-blue-600" },
    { id: "backend", name: "Backend", icon: Database, color: "text-green-600" },
    { id: "mobile", name: "Mobile", icon: Smartphone, color: "text-purple-600" },
    { id: "design", name: "Design", icon: Palette, color: "text-pink-600" },
    { id: "tools", name: "Tools & DevOps", icon: Settings, color: "text-orange-600" },
  ]

  const skills = {
    frontend: [
      { name: "React", level: 95, experience: "1 years", projects: 5, icon: "⚛️" },
      { name: "Next.js", level: 90, experience: "1 years", projects: 2, icon: "▲" },
      { name: "TypeScript", level: 80, experience: "1 years", projects: 2, icon: "📘" },
      { name: "JavaScript", level: 95, experience: "2+ years", projects: 8, icon: "🟨" },
      { name: "HTML5", level: 99, experience: "2+ years", projects: 15, icon: "🌐" },
      { name: "CSS3", level: 95, experience: "2+ years", projects: 10, icon: "🎨" },
      { name: "Tailwind CSS", level: 90, experience: "1+ years", projects: 4, icon: "💨" },
      { name: "Sass/SCSS", level: 85, experience: "1+ years", projects: 2, icon: "💅" },
      { name: "Material-UI", level: 90, experience: "1+ years", projects: 3, icon: "🎯" },
    ],
    backend: [
      { name: "Mysql", level: 85, experience: "1+ years", projects: 8, icon: "🟢" },
      { name: "php", level: 82, experience: "1+ years", projects: 7, icon: "🚂" },
      { name: "Laravel", level: 78, experience: "1+ years", projects: 5, icon: "🍃" },
      // { name: "PostgreSQL", level: 75, experience: "1+ years", projects: 4, icon: "🐘" },
      // { name: "Firebase", level: 80, experience: "1+ years", projects: 6, icon: "🔥" },
      // { name: "Supabase", level: 70, experience: "6 months", projects: 3, icon: "⚡" },
      // { name: "REST APIs", level: 88, experience: "2+ years", projects: 12, icon: "🔗" },
      // { name: "GraphQL", level: 65, experience: "6 months", projects: 2, icon: "📊" },
    ],
    // mobile: [
    //   { name: "React Native", level: 75, experience: "1+ years", projects: 4, icon: "📱" },
    //   { name: "Expo", level: 80, experience: "1+ years", projects: 4, icon: "🚀" },
    //   { name: "PWA", level: 70, experience: "1+ years", projects: 3, icon: "📲" },
    //   { name: "Responsive Design", level: 95, experience: "3+ years", projects: 20, icon: "📐" },
    // ],
    design: [
      { name: "UI/UX Design", level: 75, experience: "2+ years", projects: 15, icon: "🎨" },
      { name: "Figma", level: 80, experience: "2+ years", projects: 12, icon: "🎯" },
      // { name: "Adobe XD", level: 65, experience: "1+ years", projects: 5, icon: "🔷" },
      // { name: "Prototyping", level: 70, experience: "1+ years", projects: 8, icon: "🔧" },
      // { name: "Design Systems", level: 75, experience: "1+ years", projects: 6, icon: "📋" },
    ],
    tools: [
      { name: "Git & GitHub", level: 90, experience: "3+ years", projects: 25, icon: "🐙" },
      { name: "VS Code", level: 95, experience: "4+ years", projects: 30, icon: "💻" },
      // { name: "Webpack", level: 70, experience: "1+ years", projects: 5, icon: "📦" },
      { name: "Vite", level: 85, experience: "1+ years", projects: 8, icon: "⚡" },
      // { name: "Docker", level: 60, experience: "6 months", projects: 2, icon: "🐳" },
      { name: "Vercel", level: 90, experience: "1+ years", projects: 15, icon: "▲" },
      { name: "Netlify", level: 80, experience: "1+ years", projects: 2, icon: "🌐" },
      { name: "NPM/Yarn", level: 90, experience: "1+ years", projects: 5, icon: "📦" },
    ],
  }

  const achievements = [
    {
      title: "React Certification",
      issuer: "Up skilling",
      date: "2024",
      icon: Award,
      color: "text-blue-600",
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Frontend ",
      issuer: "50+ Challenges",
      date: "2023-2024",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Front end developer",
      issuer: "Route academy",
      date: "2023-2024",
      icon: CheckCircle,
      color: "text-purple-600",
    },
  ]

  // const learningGoals = [
  //   { skill: "Three.js", progress: 30, target: "Q2 2024" },
  //   { skill: "AWS", progress: 20, target: "Q3 2024" },
  //   { skill: "Python", progress: 45, target: "Q2 2024" },
  //   { skill: "React.js", progress: 15, target: "Q4 2024" },
  // ]

  const selectedSkills = skills[selectedCategory as keyof typeof skills] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" duration={800}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my technical skills, tools, and technologies I work with to create amazing
              digital experiences.
            </p>
          </ScrollReveal>

          {/* Quick Stats */}
          <StaggerContainer staggerDelay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Certifications</div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Technical Expertise</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Explore my skills across different technology domains
              </p>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal direction="up" delay={200} duration={600}>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {skillCategories.map((category, index) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <category.icon
                    className={`h-4 w-4 ${selectedCategory === category.id ? "text-white" : category.color}`}
                  />
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedSkills.map((skill, index) => (
              <ScrollReveal
                key={index}
                direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                delay={index * 100}
                duration={600}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <CardTitle className="text-lg text-slate-900 dark:text-slate-100">{skill.name}</CardTitle>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{skill.experience}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={skill.level} className="h-2" />
                      <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>{skill.projects} projects</span>
                        <span
                          className={`font-medium ${
                            skill.level >= 90
                              ? "text-green-600"
                              : skill.level >= 80
                                ? "text-blue-600"
                                : skill.level >= 70
                                  ? "text-yellow-600"
                                  : "text-orange-600"
                          }`}
                        >
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 80
                              ? "Advanced"
                              : skill.level >= 70
                                ? "Intermediate"
                                : "Learning"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                Achievements & Certifications
              </h2>
              <p className="text-slate-600 dark:text-slate-300">Recognition and milestones in my development journey</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150} duration={600}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center`}
                    >
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">{achievement.issuer}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{achievement.date}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      {/* <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Currently Learning</h2>
              <p className="text-slate-600 dark:text-slate-300">Technologies I'm actively learning and improving</p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {learningGoals.map((goal, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 200}
                  duration={600}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-slate-900 dark:text-slate-100">{goal.skill}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {goal.progress}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Progress value={goal.progress} className="h-2" />
                        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                          <span>Target: {goal.target}</span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            In Progress
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" duration={600}>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to leverage these skills for your next project? Let's discuss how we can work together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <a href="https://wa.me/201153482672" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start a Project
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                <a href="https://docs.google.com/document/d/12EM4Zr0_KiNOibZT6W5DFM2e3RAHDZxi/edit?usp=drive_link&ouid=108880956951811498385&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                  
                  VIEW RESUME
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
