"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Términos y Condiciones</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-lg mb-3">1. Aceptación de los Términos</h3>
              <p className="text-gray-700 leading-relaxed">
                Al acceder y utilizar el sitio web de EXAMPLE, usted acepta estar sujeto a estos términos y condiciones
                de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">2. Uso del Sitio Web</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Usted puede utilizar nuestro sitio web para:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Navegar y buscar productos</li>
                <li>Realizar compras de productos disponibles</li>
                <li>Crear y gestionar su cuenta de usuario</li>
                <li>Acceder a información sobre productos y servicios</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">3. Cuenta de Usuario</h3>
              <p className="text-gray-700 leading-relaxed">
                Para realizar compras, debe crear una cuenta proporcionando información precisa y actualizada. Es
                responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo
                su cuenta.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">4. Productos y Precios</h3>
              <p className="text-gray-700 leading-relaxed">
                Todos los productos están sujetos a disponibilidad. Los precios pueden cambiar sin previo aviso. Nos
                reservamos el derecho de limitar las cantidades de cualquier producto o servicio que ofrecemos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">5. Proceso de Compra</h3>
              <p className="text-gray-700 leading-relaxed">
                Al realizar un pedido, usted hace una oferta para comprar el producto. Nos reservamos el derecho de
                aceptar o rechazar su pedido por cualquier motivo. La confirmación del pedido se enviará por correo
                electrónico.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">6. Pagos</h3>
              <p className="text-gray-700 leading-relaxed">
                Aceptamos varios métodos de pago incluyendo tarjetas de crédito, débito y transferencias bancarias.
                Todos los pagos deben realizarse en pesos colombianos (COP).
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">7. Envío y Entrega</h3>
              <p className="text-gray-700 leading-relaxed">
                Los tiempos de entrega son estimados y pueden variar según la ubicación y disponibilidad del producto.
                No somos responsables por retrasos causados por circunstancias fuera de nuestro control.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">8. Devoluciones y Reembolsos</h3>
              <p className="text-gray-700 leading-relaxed">
                Puede devolver productos dentro de los 30 días posteriores a la compra, siempre que estén en condiciones
                originales. Los gastos de envío de devolución corren por cuenta del cliente, excepto en casos de
                productos defectuosos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">9. Limitación de Responsabilidad</h3>
              <p className="text-gray-700 leading-relaxed">
                EXAMPLE no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten
                del uso o la imposibilidad de usar nuestros productos o servicios.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">10. Modificaciones</h3>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">11. Contacto</h3>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                <li>Correo electrónico: legal@example.com</li>
                <li>Teléfono: 01 8000 123 456</li>
                <li>Dirección: Bogotá, Colombia</li>
              </ul>
            </section>

            <div className="border-t pt-4 mt-6">
              <p className="text-xs text-gray-500">Última actualización: Diciembre 2024</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
