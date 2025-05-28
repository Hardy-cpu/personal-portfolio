"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Twitter, Linkedin, Youtube, ArrowRight, Mail, Phone, ChevronLeft, ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Portfolio() {
  // State for the slideshow
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { 
      title: "CLEATUS",
      description: "Developing engaging content and strategic marketing plans",
      image: "/images/cover.png",
      thumbnailImage: "/images/small-frame.png"
    },
    { 
      title: "College of Charleston",
      description: "Sports Marketing and fan experience",
      image: "/images/collegeathletics.jpeg",
      thumbnailImage: "/images/collegeathletics.jpeg"
    },
    { 
      title: "Social Media Management",
      description: "Building and managing brand presence across platforms",
      image: "/images/twitter-header.png",
      thumbnailImage: "/images/X-logo.png"
    },
    {
      title: "Agency Analytics",
      description: "Comprehensive guides and API documentation",
      image: "/images/linkedin-analytics.png",
      thumbnailImage: "/images/image.png"
    }
  ]

  // Auto-cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/cole-profile.JPEG"
              alt="Cole Hardister Profile"
              width={90}
              height={90}
              className="rounded-md border-2 border-white"
            />
            <div>
              <h1 className="text-2xl font-mono">COLE HARDISTER</h1>
              <p className="text-gray-400">DIGITAL MARKETING & COMMUNICATIONS</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed font-mono">
              I've combined years of writing experience with my passion for branding, business, and technology. I am
              obsessed with creating valuable content within any industry, for any business, and based on any guidelines.
              
              
              I see myself as someone who could come into a brand new business and quickly create marketing plans,
              strategize re-branding, edit existing content, create new content, and assist with the necessary sourcing
              of important jobs. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-mono mt-4">
              Giving me an opportunity to create, edit, or improve something, is almost always a
              profitable investment.
            </p>
            <Button variant="outline" className="rounded-full hover:bg-white hover:text-black transition-colors">
              More about Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/colehardister" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© 2024 Cole Hardister</p>
              <div className="flex gap-4">
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Projects Section - 2/3 width */}
            <section className="space-y-8">
              {/* Project Highlights Carousel */}
              <div className="relative h-[300px] bg-gray-900 rounded-xl overflow-hidden group">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold">{slides[currentSlide].title}</h3>
                  <p className="text-gray-200 mt-2">{slides[currentSlide].description}</p>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={previousSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Project Thumbnails */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {slides.map((project, index) => (
                  <Link key={index} href={`/projects/project${index + 1}`} className="block">
                    <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300">
                      <Image
                        src={project.thumbnailImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Contact Section - 1/3 width */}
            <section className="bg-gray-900 rounded-xl p-6 space-y-6">
              <h2 className="text-2xl font-mono">Contact</h2>
              <div className="space-y-4">
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <Link href="mailto:hardisterw@g.cofc.edu">
                    <Mail className="w-5 h-5" />
                    <span>Email Me</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <Link href="tel:+15034905874">
                    <Phone className="w-5 h-5" />
                    <span>Call Me</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <Link href="/Cole-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5" />
                    <span>View Resume</span>
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Marketing Tools Section */}
          <section className="bg-gray-900 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">Tools/Skills</h2>
              <Button variant="ghost" size="icon" className="text-white" asChild>
                <Link href="/tools">
                  <ArrowRight className="w-5 h-5" />
                  <span className="sr-only">View all tools</span>
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/Figma.png"
                  alt="Figma"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/Twitter-Logo.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/LinkedIn.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/cursor-logo.jpeg"
                  alt="Cursor"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/semrush.png"
                  alt="SEMrush"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/screen-studio.jpeg"
                  alt="Screen Studio"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/meta-logo.jpeg"
                  alt="Meta"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/github-logo.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/capcut-logo.png"
                  alt="CapCut"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
