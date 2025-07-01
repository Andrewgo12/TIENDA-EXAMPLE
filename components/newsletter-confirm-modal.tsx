"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail } from "lucide-react"

interface NewsletterConfirmModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterConfirmModal({ isOpen, onClose }: NewsletterConfirmModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Confirmación de suscripción</DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-6 py-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">¡Suscripción exitosa!</h3>
            <p className="text-gray-600">
              Te has suscrito correctamente a nuestro newsletter. Pronto recibirás las mejores ofertas y novedades
              directamente en tu correo electrónico.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-red-600" />
              <div className="text-left">
                <h4 className="font-medium text-red-800">¿Qué recibirás?</h4>
                <ul className="text-sm text-red-700 mt-1 space-y-1">
                  <li>• Ofertas exclusivas para suscriptores</li>
                  <li>• Nuevos productos antes que nadie</li>
                  <li>• Descuentos especiales en fechas importantes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button onClick={onClose} className="w-full bg-red-600 hover:bg-red-700">
              Continuar comprando
            </Button>
            <p className="text-xs text-gray-500">
              Puedes cancelar tu suscripción en cualquier momento desde los emails que recibas.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
