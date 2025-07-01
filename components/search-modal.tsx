"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, Star } from "lucide-react"
import type { Product } from "@/app/page"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
  onProductClick: (product: Product) => void
  onFiltersClick: () => void
}

export function SearchModal({ isOpen, onClose, products, onProductClick, onFiltersClick }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [recentSearches] = useState(["iPhone", "Samsung TV", "Nike", "PlayStation", "Nevera LG"])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleProductClick = (product: Product) => {
    onProductClick(product)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">Búsqueda de productos</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search bar */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="¿Qué estás buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
                autoFocus
              />
            </div>
            <Button onClick={onFiltersClick} variant="outline" className="px-4 bg-transparent">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Recent searches */}
          {!searchQuery && (
            <div>
              <h3 className="font-semibold mb-3">Búsquedas recientes</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search) => (
                  <Badge
                    key={search}
                    variant="secondary"
                    className="cursor-pointer hover:bg-red-100"
                    onClick={() => setSearchQuery(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Search results */}
          {searchQuery && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  Resultados para "{searchQuery}" ({filteredProducts.length})
                </h3>
                {searchQuery && (
                  <Button variant="ghost" size="sm" onClick={() => setSearchQuery("")}>
                    <X className="h-4 w-4 mr-1" />
                    Limpiar
                  </Button>
                )}
              </div>

              <div className="max-h-96 overflow-y-auto space-y-3">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Search className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>No se encontraron productos</p>
                    <p className="text-sm">Intenta con otros términos de búsqueda</p>
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="flex gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 space-y-1">
                        <h4 className="font-medium line-clamp-2">{product.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-red-600">{formatPrice(product.price)}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
