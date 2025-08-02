"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Code,
  Briefcase,
  ArrowDown,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
     title: "Shopify Platform",
     description: "An e-commerce storefront powered by Shopify, offering seamless product management, checkout, and payment processing.",

      image: "/filturo.png",
      tags: ["liquid", "javascript", "CSS"],
      link: "https://filturo.com/",
      featured: true,
    },
    {
      title: "WooCommerce Platform",
      description: "A fully customizable e-commerce store powered by WooCommerce, designed for seamless product listings, cart functionality, and payment processing within WordPress.",
      image: "/woocommerce.jpg",
      tags: ["Wordpress", "Javascript", "PHP", "PayPal"],
      link: "https://www.jusjenneh.com/",
      featured: true,
    },
    {
      title: "Bible App - Android App",
      description: "A bible app that was developed for our church",
      image: "/bible.png",
      tags: ["Vue.js", "Quasar", "Rich UI", "Cordova"],
      link: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website for a creative and personal website",
      image: "/portfolio.png",
      tags: ["React", "Next.js", "Typescript", "Tailwind"],
      link: "https://v0-joey-ventulan-portfolio.vercel.app/",
      featured: true,
    },
    {
      title: "TodoBudget App - Mobile App",
      description: "A todo and budget app",
      image: "/todobudget.png",
      tags: ["Quasar", "Cordova", "Pinia", "Vue", "Rich UI"],
      link: "#",
      featured: false,
    },
    {
      title: "Church Websites",
      description: "A modern, responsive website designed for a local church, featuring service schedules, online sermons, event updates, and donation capabilities.",
      image: "/church.png",
      tags: ["React", "Typescript", "Next", "Tailwind"],
      link: "#",
      featured: true,
    },
  ]

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development in 2024.",
      date: "August 01, 2025",
      readTime: "5 min video",
      image: "/dev.png",
      link: "https://www.youtube.com/watch?v=EJA-T6vcoX0",
      category: "Technology",
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for building large-scale React applications that can grow with your team.",
      date: "August 01, 2025",
      readTime: "1 min video",
      image: "/react.png",
      link: "https://www.youtube.com/watch?v=9r_hRMzbjOM",
      category: "Development",
    },
    {
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to modern CSS layout techniques for creating responsive designs.",
      date: "August 01, 2025",
      readTime: "206 min video",
      image: "/css.png",
      link: "https://www.youtube.com/watch?v=wsTv9y931o8",
      category: "Design",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text animate-fade-in">Joey Ventulan</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Home
              </Link>
              <Link href="#about" className="hover:text-primary transition-all duration-300 hover:scale-105">
                About
              </Link>
              <Link href="#gallery" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Gallery
              </Link>
              <Link href="#blog" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Blog
              </Link>
              <Link href="#contact" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Contact
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#gallery"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="#blog"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 animated-bg opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center py-20">
            <div className="mb-8 animate-bounce-in">
              <div className="relative inline-block">
                <Image
                  src="/pp.jpg?height=200&width=200"
                  alt="Joey Ventulan"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-8 border-4 border-primary/30 glow animate-float"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-2 animate-bounce">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="gradient-text">Joey Ventulan</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-left">
              Full-Stack Developer passionate about creating beautiful, functional digital experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button size="lg" className="glow hover:scale-105 transition-all duration-300" asChild>
                <Link href="#gallery">
                  <Zap className="h-5 w-5 mr-2" />
                  View My Work
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="#contact">
                  <Heart className="h-5 w-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="mt-16 animate-bounce">
              <ArrowDown className="h-6 w-6 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with over 2 years of experience creating digital solutions that make a
              difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                Started as a curious student exploring the world of programming, I've evolved into a full-stack
                developer who loves turning complex problems into simple, beautiful solutions. My expertise spans across
                modern web technologies, and mobile development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 glass rounded-xl hover:scale-105 transition-all duration-300 glow">
                  <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold text-2xl gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-6 glass rounded-xl hover:scale-105 transition-all duration-300 glow">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-accent-500" />
                  <div className="font-semibold text-2xl gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "vue.js",
                  "Quasar",
                  "Laravel",
                  "PHP",
                  "CodeIgniter",
                  "PostgreSQL",
                  "MySQL",
                  "Docker",
                  "Git",
                ].map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="hover:scale-110 transition-all duration-300 cursor-pointer glass"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 glass border-0 ${
                  project.featured ? "glow" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                    <Button size="sm" className="glow" asChild>
                      <Link href={project.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:scale-110 transition-transform duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my journey as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 glass border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Badge className="absolute top-4 left-4 z-10 bg-accent-500 text-white">{post.category}</Badge>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                    <span>•</span>
                    {post.readTime}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    <Link href={post.link}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-300" asChild>
                    <Link href={post.link}>
                      View More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-left">
            I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-in-right">
            <Button size="lg" className="glow hover:scale-105 transition-all duration-300" asChild>
              <Link href="mailto:joeyventulan@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="https://www.linkedin.com/in/joey-ventulan-03951527b/" target="_blank">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="https://github.com/devjoe101291" target="_blank">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t glass">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Joey Ventulan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
