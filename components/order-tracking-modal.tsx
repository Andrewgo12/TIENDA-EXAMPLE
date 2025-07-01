"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Package, Search, CheckCircle, Clock, Truck } from "lucide-react"

interface OrderTrackingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OrderTrackingModal({ isOpen, onClose }: OrderTrackingModalProps) {
  const [orderNumber, setOrderNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)

  const handleTrack = () => {
    // Simular búsqueda de pedido
    if (orderNumber) {
      setTrackingResult({
        orderNumber: orderNumber,
        status: "En tránsito",
        estimatedDelivery: "Mañana, 28 de Diciembre",
        currentLocation: "Centro de distribución Bogotá",
        timeline: [
          {
            status: "Pedido confirmado",
            date: "25 Dic, 10:30 AM",
            completed: true,
            description: "Tu pedido ha sido confirmado y está siendo procesado",
          },
          {
            status: "En preparación",
            date: "25 Dic, 2:15 PM",
            completed: true,
            description: "Tu pedido está siendo empacado en nuestro centro",
          },
          {
            status: "Enviado",
            date: "26 Dic, 8:00 AM",
            completed: true,
            description: "Tu pedido ha salido de nuestro centro de distribución",
          },
          {
            status: "En tránsito",
            date: "27 Dic, 9:30 AM",
            completed: true,
            description: "Tu pedido está en camino a tu dirección",
          },
          {
            status: "Entregado",
            date: "28 Dic (estimado)",
            completed: false,
            description: "Tu pedido será entregado en tu dirección",
          },
        ],
      })
    }
  }

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-5 w-5 text-green-600" />
    }

    switch (status) {
      case "En tránsito":
        return <Truck className="h-5 w-5 text-blue-600" />
      case "Entregado":
        return <Package className="h-5 w-5 text-gray-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregado":
        return "bg-green-100 text-green-800"
      case "En tránsito":
        return "bg-blue-100 text-blue-800"
      case "Procesando":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            Seguimiento de Pedido
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search form */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Ingresa tu número de pedido (ej: EX123456789)"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTrack} className="bg-red-600 hover:bg-red-700">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Puedes encontrar tu número de pedido en el email de confirmación o en tu cuenta
            </p>
          </div>

          {/* Tracking result */}
          {trackingResult && (
            <div className="space-y-6 border-t pt-6">
              {/* Order summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">Pedido #{trackingResult.orderNumber}</h3>
                    <p className="text-sm text-gray-600">Entrega estimada: {trackingResult.estimatedDelivery}</p>
                  </div>
                  <Badge className={getStatusColor(trackingResult.status)}>{trackingResult.status}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-blue-600" />
                  <span>Ubicación actual: {trackingResult.currentLocation}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h4 className="font-semibold">Historial del pedido</h4>
                <div className="space-y-4">
                  {trackingResult.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        {getStatusIcon(event.status, event.completed)}
                        {index < trackingResult.timeline.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${event.completed ? "bg-green-200" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className={`font-medium ${event.completed ? "text-gray-900" : "text-gray-500"}`}>
                            {event.status}
                          </h5>
                          <span className={`text-sm ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                            {event.date}
                          </span>
                        </div>
                        <p className={`text-sm ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Información adicional</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Recibirás una notificación cuando tu pedido esté cerca</li>
                  <li>• El transportista intentará la entrega 2 veces</li>
                  <li>• Si no estás, puedes reprogramar la entrega</li>
                </ul>
              </div>
            </div>
          )}

          {/* Help section */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">¿Necesitas ayuda?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Si tienes preguntas sobre tu pedido, nuestro equipo está disponible 24/7
            </p>
            <div className="flex gap-4 text-sm">
              <span>📞 01 8000 123 456</span>
              <span>✉️ pedidos@example.com</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
