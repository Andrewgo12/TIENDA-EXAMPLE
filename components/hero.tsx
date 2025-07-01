"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    title: "Cyber Monday",
    subtitle: "Hasta 70% de descuento",
    description: "En tecnología, electrodomésticos y más",
    image: "/placeholder.svg?height=400&width=800",
    cta: "Ver ofertas",
    bgColor: "bg-gradient-to-r from-purple-600 to-blue-600",
  },
  {
    id: 2,
    title: "Nueva colección",
    subtitle: "Moda para toda la familia",
    description: "Descubre las últimas tendencias",
    image: "/placeholder.svg?height=400&width=800",
    cta: "Comprar ahora",
    bgColor: "bg-gradient-to-r from-pink-500 to-rose-500",
  },
  {
    id: 3,
    title: "Electrodomésticos",
    subtitle: "Renueva tu hogar",
    description: "Financiación hasta 36 meses sin intereses",
    image: "/placeholder.svg?height=400&width=800",
    cta: "Ver catálogo",
    bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[500px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`${slide.bgColor} h-full flex items-center`}>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                  <h2 className="text-2xl md:text-3xl font-semibold">{slide.subtitle}</h2>
                  <p className="text-xl opacity-90">{slide.description}</p>
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                  >
                    {slide.cta}
                  </Button>
                </div>
                <div className="hidden md:block">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
