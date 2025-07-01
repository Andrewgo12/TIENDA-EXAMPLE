"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, X } from "lucide-react"
import type { Product } from "@/app/page"

interface WishlistModalProps {
  isOpen: boolean
  onClose: () => void
  items: Product[]
  onRemoveItem: (productId: number) => void
  onAddToCart: (product: Product) => void
  onProductClick: (product: Product) => void
}

export function WishlistModal({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onAddToCart,
  onProductClick,
}: WishlistModalProps) {
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

  const handleAddToCart = (product: Product) => {
    onAddToCart(product)
    onRemoveItem(product.id)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-600" />
            Mi lista de favoritos ({items.length} productos)
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tu lista de favoritos está vacía</h3>
            <p className="text-gray-500 mb-6">Guarda productos que te gusten para encontrarlos fácilmente</p>
            <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
              Explorar productos
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => handleProductClick(item)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <h3
                    className="font-medium line-clamp-2 cursor-pointer hover:text-red-600"
                    onClick={() => handleProductClick(item)}
                  >
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">{formatPrice(item.price)}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{formatPrice(item.originalPrice)}</span>
                    )}
                  </div>

                  <Button onClick={() => handleAddToCart(item)} className="w-full bg-red-600 hover:bg-red-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
