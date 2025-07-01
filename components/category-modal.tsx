"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, BarChart3 } from "lucide-react"
import type { Product } from "@/app/page"

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  category: string | null
  products: Product[]
  onProductClick: (product: Product) => void
  onAddToCart: (product: Product) => void
  onAddToWishlist: (product: Product) => void
}

export function CategoryModal({
  isOpen,
  onClose,
  category,
  products,
  onProductClick,
  onAddToCart,
  onAddToWishlist,
}: CategoryModalProps) {
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
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Categoría: {category}</span>
            <Badge variant="secondary">{products.length} productos</Badge>
          </DialogTitle>
        </DialogHeader>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hay productos en esta categoría</h3>
            <p className="text-gray-500 mb-6">Pronto agregaremos más productos</p>
            <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
              Explorar otras categorías
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Category filters/sorting could go here */}
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Mostrando {products.length} productos</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Precio: Menor a mayor
                </Button>
                <Button variant="outline" size="sm">
                  Más populares
                </Button>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-600 text-white">-{product.discount}%</Badge>
                    )}
                    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        className="bg-white/80 hover:bg-white text-gray-700"
                        onClick={(e) => {
                          e.stopPropagation()
                          onAddToWishlist(product)
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        className="bg-white/80 hover:bg-white text-gray-700"
                        onClick={(e) => {
                          e.stopPropagation()
                          // onAddToCompare(product) - if you want to add compare functionality
                        }}
                      >
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    <h3
                      className="font-semibold text-lg line-clamp-2 hover:text-red-600 transition-colors cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      {product.name}
                    </h3>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-red-600">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-green-600 font-medium">Envío gratis</p>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => onAddToCart(product)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination could go here */}
            <div className="flex justify-center pt-6">
              <Button variant="outline">Ver más productos</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
