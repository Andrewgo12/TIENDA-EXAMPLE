"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, X, ShoppingCart, Star } from "lucide-react"
import type { Product } from "@/app/page"

interface CompareModalProps {
  isOpen: boolean
  onClose: () => void
  items: Product[]
  onRemoveItem: (productId: number) => void
  onAddToCart: (product: Product) => void
}

export function CompareModal({ isOpen, onClose, items, onRemoveItem, onAddToCart }: CompareModalProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Comparar productos ({items.length}/3)
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hay productos para comparar</h3>
            <p className="text-gray-500 mb-6">Agrega hasta 3 productos para compararlos lado a lado</p>
            <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
              Explorar productos
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Products comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <td className="p-4 font-semibold">Producto</td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4 text-center relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.id)}
                          className="absolute top-2 right-2 text-red-600 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-lg mx-auto mb-3"
                        />
                        <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-semibold">Precio</td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4 text-center">
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-red-600">{formatPrice(item.price)}</div>
                          {item.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{formatPrice(item.originalPrice)}</div>
                          )}
                          {item.discount && <Badge className="bg-red-600 text-white">-{item.discount}%</Badge>}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Calificación</td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({item.reviews})</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Categoría</td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4 text-center">
                        <Badge variant="secondary">{item.category}</Badge>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Características</td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4">
                        <ul className="text-sm space-y-1">
                          {item.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Acciones</td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4 text-center">
                        <Button onClick={() => onAddToCart(item)} className="bg-red-600 hover:bg-red-700">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Agregar
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
