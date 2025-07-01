"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreditCard, Smartphone, Building, Shield } from "lucide-react"

interface PaymentInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PaymentInfoModal({ isOpen, onClose }: PaymentInfoModalProps) {
  const paymentMethods = [
    {
      category: "Tarjetas de Crédito y Débito",
      icon: CreditCard,
      methods: [
        { name: "Visa", description: "Todas las tarjetas Visa crédito y débito" },
        { name: "Mastercard", description: "Todas las tarjetas Mastercard crédito y débito" },
        { name: "American Express", description: "Tarjetas American Express" },
        { name: "Diners Club", description: "Tarjetas Diners Club" },
      ],
    },
    {
      category: "Billeteras Digitales",
      icon: Smartphone,
      methods: [
        { name: "Nequi", description: "Paga desde tu app Nequi" },
        { name: "Daviplata", description: "Paga desde tu app Daviplata" },
        { name: "Tpaga", description: "Paga desde tu app Tpaga" },
        { name: "PayU", description: "Plataforma de pagos segura" },
      ],
    },
    {
      category: "Transferencias Bancarias",
      icon: Building,
      methods: [
        { name: "PSE", description: "Pagos Seguros en Línea" },
        { name: "Bancolombia", description: "Transferencia desde Bancolombia" },
        { name: "Banco de Bogotá", description: "Transferencia desde Banco de Bogotá" },
        { name: "Davivienda", description: "Transferencia desde Davivienda" },
      ],
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-6 w-6" />
            Métodos de Pago
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Security banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Pagos 100% Seguros</h3>
                <p className="text-sm text-green-700">
                  Todos nuestros pagos están protegidos con encriptación SSL de 256 bits y certificación PCI DSS
                </p>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="space-y-6">
            {paymentMethods.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.category} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.methods.map((method) => (
                      <div key={method.name} className="border rounded-lg p-4 hover:bg-gray-50">
                        <h4 className="font-medium mb-1">{method.name}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional info */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">Información Adicional</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Financiación</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hasta 36 meses sin intereses con tarjetas participantes</li>
                  <li>• Cuotas fijas mensuales</li>
                  <li>• Sin costos adicionales</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Procesamiento</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Confirmación inmediata del pago</li>
                  <li>• Notificación por email y SMS</li>
                  <li>• Factura electrónica automática</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">¿Problemas con tu pago?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Si tienes inconvenientes con tu pago, nuestro equipo de soporte está disponible 24/7
            </p>
            <div className="flex gap-4 text-sm">
              <span>📞 01 8000 123 456</span>
              <span>✉️ pagos@example.com</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
