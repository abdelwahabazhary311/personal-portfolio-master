"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer } from "@/components/stagger-container"
import {
  Github,
  ExternalLink,
  Search,
  Calendar,
  Star,
  Eye,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  MessageCircle,
} from "lucide-react"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects", count: 9 },
    { id: "web", name: "Web Apps", count: 8 },
    { id: "mobile", name: "Mobile", count: 0 },
    { id: "ecommerce", name: "E-Commerce", count: 0 },
    { id: "dashboard", name: "Dashboards", count: 1 },
  ]

  const projects = [
    {
      id: 1,
      title: "First project freelancer",
      description:
        "Landing page website , I am proud of myself for having my first freelance project that I worked on, from the design and choosing the colors and the entire flow, I used the Bootstrap and React libraries. ",
      // longDescription:
        // "A comprehensive e-commerce platform built from scratch with modern technologies. Includes features like product catalog, shopping cart, user reviews, order tracking, and admin panel for inventory management.",
        
      image: "/images/navlogo.png",
      category: "web",
      tech: ["React"],
      // github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://alamal.website/",
      status: "Completed",
      year: "2024",
      featured: true,
      stats: {
        stars: 45,
        views: 1200,
        forks: 12,
      },
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "Modern task management application with drag & drop functionality, team collaboration features, and real-time updates using Socket.io.",
      longDescription:
        "A comprehensive project management tool with Kanban boards, team collaboration, time tracking, and detailed analytics. Built with React and real-time capabilities.",
      image: "/images/UMS.png",
      category: "dashboard",
      tech: ["React", "TypeScript",  "Bootstrab CSS"],
      github: "https://github.com/abdelwahabazhary311/UMS-project",
      demo: "https://ums-project-vcps.vercel.app/",
      status: "Completed",
      year: "2024",
      featured: true,
      stats: {
        stars: 32,
        views: 890,
        forks: 8,
      },
    },
    {
      id: 3,
      title: "Cars-project",
      description:"RentCar is a responsive car rental web application built with React and Bootstrap. It features dynamic car listings from an API, detailed car views, and a smooth user experience across all devices.",
      longDescription:
      "RentCar is a modern car rental platform built with React, offering users a seamless way to browse, explore, and book vehicles. It includes animated UI elements, API integration, and responsive design for all devices.",
      image: "/images/CarRent.png",
      category: "web",
      tech: ["React", "React Router", "Bootstrap 5", "AOS (Animate On Scroll)", "Axios","CSS Modules", "Responsive Design" ,],
      github: "https://github.com/abdelwahabazhary311/car-vite-react",
      demo: "https://car-vite-react-5wzh.vercel.app/",
      status: "Completed",
      year: "2024",
      featured: true,
      stats: {
        stars: 28,
        views: 650,
        forks: 15,
      },
    },
    {
      id: 4,
      title: "React-portfolio",
      description:"Task on routing in react",
      longDescription:
      "This is a simple React-based portfolio project created to practice React Router. It features a sidebar navigation and multiple pages that render dynamically when clicking on different links. The goal was to simulate a multi-page app while staying within a single-page application architecture.",
      image: "/images/img_bg_1-PzvG2r05.jpg",
      category: "web",
      tech: ["React (JSX)", "React Router DOM", "Bootstrap", "CSS", "JSX"],
      github: "https://github.com/abdelwahabazhary311/Project-portfolio",
      demo: "https://project-portfolio-seven-red.vercel.app/",
      status: "Completed",
      year: "2024",
      featured: false,
      stats: {
        stars: 18,
        views: 420,
        forks: 5,
      },
    },
    {
      id: 5,
      title: "CRUDS Project",
      description:"This project is a simple CRUD (Create, Read, Update, Delete) application built using vanilla JavaScript. It allows users to add, view, edit, and delete data entries dynamically on the client side. The aim was to understand core JavaScript concepts and DOM manipulation without relying on external libraries or frameworks.",
      // longDescription:"Mobile app for food enthusiasts with recipe discovery, meal planning, nutritional information, and integrated shopping lists.",
      image: "/images/CRUD.jpg",
      category: "web",
      tech: ["JavaScript (Vanilla JS)", "HTML5 ", "CSS3 ", "Local Storage (optional)"],
      github: "https://github.com/abdelwahabazhary311/CRUDS_PROJECT",
      demo: "https://cruds-project-pearl.vercel.app/",
      status: "Completed",
      year: "2023",
      featured: false,
      stats: {
        stars: 22,
        views: 380,
        forks: 7,
      },
    },
    {
      id: 6,
      title: "Book mark project",
      description:"This is a simple Book Marker app built with JavaScript. It lets users save their favorite website links with a name, and visit or delete them easily. The goal was to practice working with forms, events, and local storage.",
      longDescription:
        "Advanced crypto portfolio management with real-time price tracking, profit/loss calculations, market trends, and price alerts.",
      image: "/images/bookMark.jpg",
      category: "web",
      tech: ["JavaScript (Vanilla JS)", "HTML5 ", "CSS3 ", "Local Storage (optional)"],
      github: "https://github.com/abdelwahabazhary311/BookMark",
      demo: "https://book-mark-sigma.vercel.app/",
      status: "Completed",
      year: "2024",
      featured: false,
      stats: {
        stars: 35,
        views: 720,
        forks: 11,
      },
    },
    {
      id: 7,
      title: "Bootstrab project",
      description:"This is a front-end project created to practice Bootstrap and enhance UI design. It features a responsive layout with styled components using Bootstrap, along with an animated typing effect for text using a JavaScript typing library.",
      longDescription:
        "Advanced crypto portfolio management with real-time price tracking, profit/loss calculations, market trends, and price alerts.",
      image: "/images/devolio.jpg",
      category: "web",
      tech: [ "HTML5 ", "CSS3 ", "Bootstrap", "Typed.js"],
      github: "https://github.com/abdelwahabazhary311/DEVOLIO_BOOTSTRAP_PROJECT",
      demo: "https://devolio-bootstrap-project.vercel.app/",
      status: "Completed",
      year: "2024",
      featured: false,
      stats: {
        stars: 35,
        views: 720,
        forks: 11,
      },
    },
    {
      id: 8,
      title: "Bootstrab project2",
      description:"This is a front-end project created to practice Bootstrap and enhance UI design. It features a responsive layout with styled components using Bootstrap, along with an animated typing effect for text using a JavaScript typing library.",
      longDescription:
        "Advanced crypto portfolio management with real-time price tracking, profit/loss calculations, market trends, and price alerts.",
      image: "/images/danils.jpg",
      category: "web",
      tech: [ "HTML5 ", "CSS3 ", "Bootstrap", "Typed.js"],
      github: "https://github.com/abdelwahabazhary311/DANILS_PROJECT_BOOTSTRAP",
      demo: "https://danils-project-bootstrap.vercel.app/",
      status: "Completed",
      year: "2023",
      featured: false,
      stats: {
        stars: 35,
        views: 720,
        forks: 11,
      },
    },
    {
      id: 9,
      title: "Bakery project",
      description:"First project HTML and CSS",
      longDescription:
        "Advanced crypto portfolio management with real-time price tracking, profit/loss calculations, market trends, and price alerts.",
      image: "/images/bakery.jpg",
      category: "web",
      tech: [ "HTML5 ", "CSS3 "],
      github: "https://github.com/abdelwahabazhary311/BAKERY-Project",
      demo: "https://bakery-project-pied.vercel.app/",
      status: "Completed",
      year: "2023",
      featured: false,
      stats: {
        stars: 35,
        views: 720,
        forks: 11,
      },
    },
    {
      id: 10,
      title: "PRODUCT PROJECT",
      description:"product project with react",
      longDescription:
        "This project is a simple product showcase application built with React. It allows users to view a list of products, each with an image, title, and description. The goal was to practice React fundamentals, component structure, and state management.",
      image: "/images/productProject.png",
      category: "web",
      tech: [ "React", "React Router", "tailwindcss", "headlessui", ""],
      github: "https://github.com/abdelwahabazhary311/project-2-products",
      demo: "https://project-2-products.vercel.app/",
      status: "Completed",
      year: "2025",
      featured: false,
      stats: {
        stars: 35,
        views: 720,
        forks: 11,
      },
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter((project) => project.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return Globe
      case "mobile":
        return Smartphone
      case "ecommerce":
        return Database
      case "dashboard":
        return Zap
      default:
        return Code
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" duration={800}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              A showcase of my recent work and side projects. Each project represents a unique challenge and learning
              experience.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <StaggerContainer staggerDelay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50k+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Lines of Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Open Source</div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-300">
                My most impactful and technically challenging projects
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 200}
                duration={800}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900">
                        <Star className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-slate-900 dark:text-slate-100">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-300">
                          {project.longDescription}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {project.stats.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">All Projects</h2>
              <p className="text-slate-600 dark:text-slate-300">Explore my complete portfolio of work</p>
            </div>
          </ScrollReveal>

          {/* Search and Filter */}
          <ScrollReveal direction="up" delay={200} duration={600}>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category, index) => {
                  const IconComponent = getCategoryIcon(category.id)
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <IconComponent className="h-4 w-4" />
                      {category.name}
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                delay={index * 100}
                duration={600}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-slate-900 dark:text-slate-100">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {project.stats.views}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{project.year}</div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 text-xs" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <ScrollReveal direction="up" duration={600}>
              <div className="text-center py-12">
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg">No projects found</p>
                  <p className="text-sm">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" duration={600}>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <a href="https://github.com/abdelwahabazhary311" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/201153482672" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
