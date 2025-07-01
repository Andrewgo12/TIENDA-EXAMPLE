"use client"

import { useState } from "react"
import { Search, ShoppingCart, User, Menu, MapPin, Phone, Heart, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  cartItemsCount: number
  wishlistCount: number
  onCartClick: () => void
  onAuthClick: () => void
  onSearchClick: () => void
  onWishlistClick: () => void
  onHelpClick: () => void
  onCategoryClick: (category: string) => void
  onHomeClick: () => void
}

export function Header({
  cartItemsCount,
  wishlistCount,
  onCartClick,
  onAuthClick,
  onSearchClick,
  onWishlistClick,
  onHelpClick,
  onCategoryClick,
  onHomeClick,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
              <MapPin className="h-4 w-4" />
              <span>Envío gratis desde $80.000</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200" onClick={onHelpClick}>
              <Phone className="h-4 w-4" />
              <span>Línea de atención: 01 8000 123 456</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={onHelpClick} className="hover:underline">
              Vende en nuestra tienda
            </button>
            <button onClick={onHelpClick} className="hover:underline">
              Ayuda
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl cursor-pointer hover:bg-blue-700 transition-colors"
              onClick={onHomeClick}
            >
              EXAMPLE
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative" onClick={onSearchClick}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="¿Qué estás buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-full border-2 border-gray-200 focus:border-blue-500 cursor-pointer"
                readOnly
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full px-6">
                Buscar
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onHomeClick} className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span className="hidden md:inline">Inicio</span>
            </Button>

            <Button variant="ghost" size="sm" onClick={onAuthClick} className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Mi cuenta</span>
            </Button>

            <Button variant="ghost" size="sm" onClick={onWishlistClick} className="flex items-center gap-2 relative">
              <Heart className="h-5 w-5" />
              <span className="hidden md:inline">Favoritos</span>
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" onClick={onCartClick} className="flex items-center gap-2 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Carrito</span>
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3 overflow-x-auto">
            <button
              onClick={() => onCategoryClick("ofertas")}
              className="text-sm font-medium text-blue-600 whitespace-nowrap hover:text-blue-800"
            >
              Ofertas del día
            </button>
            <button
              onClick={() => onCategoryClick("Tecnología")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Tecnología
            </button>
            <button
              onClick={() => onCategoryClick("Electrodomésticos")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Electrodomésticos
            </button>
            <button
              onClick={() => onCategoryClick("Moda")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Moda
            </button>
            <button
              onClick={() => onCategoryClick("Deportes")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Deportes
            </button>
            <button
              onClick={() => onCategoryClick("Hogar")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Hogar
            </button>
            <button
              onClick={() => onCategoryClick("Belleza")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Belleza
            </button>
            <button
              onClick={() => onCategoryClick("Supermercado")}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap"
            >
              Supermercado
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
