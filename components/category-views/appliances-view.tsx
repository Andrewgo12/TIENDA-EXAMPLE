"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, BarChart3, ArrowLeft, Filter } from "lucide-react"
import { appliancesProducts } from "@/data/products"
import type { Product } from "@/app/page"

interface AppliancesViewProps {
  onProductClick: (product: Product) => void
  onAddToCart: (product: Product) => void
  onAddToWishlist: (product: Product) => void
  onAddToCompare: (product: Product) => void
  onBackToHome: () => void
}

export function AppliancesView({
  onProductClick,
  onAddToCart,
  onAddToWishlist,
  onAddToCompare,
  onBackToHome,
}: AppliancesViewProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const brands = [...new Set(appliancesProducts.map((p) => p.brand).filter(Boolean))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de categoría */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={onBackToHome} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold mb-4">Electrodomésticos</h1>
              <p className="text-xl opacity-90">Renueva tu hogar con la mejor tecnología</p>
              <p className="text-lg opacity-75">{appliancesProducts.length} productos disponibles</p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl">🏠</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y ordenamiento */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Todos los productos
            </Button>
            {brands.map((brand) => (
              <Button key={brand} variant="outline" size="sm">
                {brand}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Precio: Menor a mayor
            </Button>
            <Button variant="outline" size="sm">
              Más populares
            </Button>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {appliancesProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer bg-white">
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
                    className="font-semibold text-lg line-clamp-2 hover:text-purple-600 transition-colors"
                    onClick={() => onProductClick(product)}
                  >
                    {product.name}
                  </h3>

                  {product.brand && <p className="text-sm text-gray-500">Marca: {product.brand}</p>}

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-600">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <p className="text-sm text-green-600 font-medium">Envío gratis • Instalación incluida</p>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => onAddToCart(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">🔧 Instalación Gratis</h3>
            <p className="text-gray-600">Instalación profesional incluida en electrodomésticos grandes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">🛡️ Garantía Extendida</h3>
            <p className="text-gray-600">Hasta 5 años de garantía en productos seleccionados</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">💰 Financiación</h3>
            <p className="text-gray-600">Cuotas fijas hasta 36 meses sin intereses</p>
          </div>
        </div>
      </div>
    </div>
  )
}
