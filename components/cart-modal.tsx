"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import type { CartItem } from "@/app/page"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (productId: number, quantity: number) => void
  onRemoveItem: (productId: number) => void
  totalPrice: number
}

export function CartModal({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, totalPrice }: CartModalProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            Mi carrito ({totalItems} {totalItems === 1 ? "producto" : "productos"})
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-500 mb-6">Agrega productos para comenzar a comprar</p>
            <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
              Continuar comprando
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium line-clamp-2">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-red-600">{formatPrice(item.price)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(item.originalPrice)}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-3 py-1 font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Envío:</span>
                <span className="text-green-600 font-medium">Gratis</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-red-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">Proceder al pago</Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
                  Continuar comprando
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
