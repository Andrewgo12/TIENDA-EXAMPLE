"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Truck, Package, Clock, MapPin, RotateCcw } from "lucide-react"

interface ShippingInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ShippingInfoModal({ isOpen, onClose }: ShippingInfoModalProps) {
  const shippingZones = [
    {
      zone: "Bogotá y área metropolitana",
      time: "1-2 días hábiles",
      cost: "Gratis desde $80.000",
      icon: "🏙️",
    },
    {
      zone: "Ciudades principales",
      time: "2-3 días hábiles",
      cost: "Gratis desde $120.000",
      icon: "🌆",
    },
    {
      zone: "Municipios y zonas rurales",
      time: "3-5 días hábiles",
      cost: "Gratis desde $150.000",
      icon: "🏘️",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Truck className="h-6 w-6" />
            Información de Envío y Devoluciones
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Shipping zones */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Zonas de Envío
            </h3>
            <div className="grid gap-4">
              {shippingZones.map((zone) => (
                <div key={zone.zone} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{zone.icon}</span>
                    <h4 className="font-medium">{zone.zone}</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Tiempo: {zone.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-green-600" />
                      <span>{zone.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping process */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Proceso de Envío</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <h4 className="font-medium mb-2">Confirmación</h4>
                <p className="text-sm text-gray-600">Procesamos tu pedido en 2-4 horas</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <h4 className="font-medium mb-2">Preparación</h4>
                <p className="text-sm text-gray-600">Empacamos tu pedido con cuidado</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <h4 className="font-medium mb-2">Envío</h4>
                <p className="text-sm text-gray-600">Tu pedido sale de nuestro centro</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold">4</span>
                </div>
                <h4 className="font-medium mb-2">Entrega</h4>
                <p className="text-sm text-gray-600">Recibe tu pedido en casa</p>
              </div>
            </div>
          </div>

          {/* Returns policy */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              Política de Devoluciones
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Condiciones para Devolución</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Producto en estado original y sin usar</li>
                    <li>• Empaque y etiquetas originales</li>
                    <li>• Dentro de los 30 días de la compra</li>
                    <li>• Factura de compra</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Productos No Retornables</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Productos de higiene personal</li>
                    <li>• Ropa interior y trajes de baño</li>
                    <li>• Productos personalizados</li>
                    <li>• Software y productos digitales</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Proceso de Devolución</h4>
                  <ol className="text-sm text-gray-600 space-y-1">
                    <li>1. Solicita la devolución en tu cuenta</li>
                    <li>2. Empaca el producto correctamente</li>
                    <li>3. Programa la recolección gratuita</li>
                    <li>4. Recibe tu reembolso en 5-7 días</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Reembolsos</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mismo método de pago original</li>
                    <li>• Procesamiento en 5-7 días hábiles</li>
                    <li>• Notificación por email</li>
                    <li>• Sin costos adicionales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for shipping */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">¿Preguntas sobre tu envío?</h4>
            <p className="text-sm text-blue-700 mb-3">Nuestro equipo de logística está disponible para ayudarte</p>
            <div className="flex gap-4 text-sm">
              <span>📞 01 8000 123 456</span>
              <span>✉️ envios@example.com</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
