"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, BarChart3 } from "lucide-react"
import type { Product } from "@/app/page"

interface FeaturedProductsProps {
  products: Product[]
  onProductClick: (product: Product) => void
  onAddToCart: (product: Product) => void
  onAddToWishlist: (product: Product) => void
  onAddToCompare: (product: Product) => void
}

export function FeaturedProducts({
  products,
  onProductClick,
  onAddToCart,
  onAddToWishlist,
  onAddToCompare,
}: FeaturedProductsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Productos destacados</h2>
          <Button variant="outline">Ver todos</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                    onClick={() => onProductClick(product)}
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
                        onAddToCompare(product)
                      }}
                    >
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-white/80 hover:bg-white text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        onAddToCart(product)
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
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
                    className="font-semibold text-lg line-clamp-2 hover:text-red-600 transition-colors"
                    onClick={() => onProductClick(product)}
                  >
                    {product.name}
                  </h3>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <p className="text-sm text-green-600 font-medium">Envío gratis</p>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => onAddToCart(product)}>
                    Agregar al carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
