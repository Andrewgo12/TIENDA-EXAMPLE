"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Política de Privacidad</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-lg mb-3">1. Información que Recopilamos</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Recopilamos información que usted nos proporciona directamente, como:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Información de cuenta (nombre, correo electrónico, contraseña)</li>
                <li>Información de contacto (dirección, teléfono)</li>
                <li>Información de pago (datos de tarjetas, información de facturación)</li>
                <li>Historial de compras y preferencias</li>
                <li>Comunicaciones con nuestro servicio al cliente</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">2. Información Recopilada Automáticamente</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cuando utiliza nuestro sitio web, recopilamos automáticamente:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Información del dispositivo (tipo, sistema operativo, navegador)</li>
                <li>Datos de uso (páginas visitadas, tiempo de navegación)</li>
                <li>Dirección IP y ubicación aproximada</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">3. Cómo Utilizamos su Información</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Procesar y completar sus pedidos</li>
                <li>Proporcionar servicio al cliente</li>
                <li>Personalizar su experiencia de compra</li>
                <li>Enviar comunicaciones promocionales (con su consentimiento)</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">4. Compartir Información</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Podemos compartir su información con:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Proveedores de servicios (procesamiento de pagos, envío)</li>
                <li>Socios comerciales (con su consentimiento explícito)</li>
                <li>Autoridades legales (cuando sea requerido por ley)</li>
                <li>Empresas afiliadas dentro de nuestro grupo corporativo</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">5. Cookies y Tecnologías Similares</h3>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies para mejorar su experiencia, recordar sus preferencias y analizar el uso del sitio.
                Puede controlar las cookies a través de la configuración de su navegador.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">6. Seguridad de los Datos</h3>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información
                personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">7. Sus Derechos</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Portabilidad de datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">8. Retención de Datos</h3>
              <p className="text-gray-700 leading-relaxed">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera un período de retención más largo.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">9. Transferencias Internacionales</h3>
              <p className="text-gray-700 leading-relaxed">
                Su información puede ser transferida y procesada en países fuera de Colombia. Nos aseguramos de que
                dichas transferencias cumplan con las leyes de protección de datos aplicables.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">10. Menores de Edad</h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información
                personal de menores sin el consentimiento parental verificable.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">11. Cambios a esta Política</h3>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios
                significativos publicando la nueva política en nuestro sitio web.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3">12. Contacto</h3>
              <p className="text-gray-700 leading-relaxed">
                Para preguntas sobre esta política de privacidad o para ejercer sus derechos, contáctenos:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                <li>Correo electrónico: privacidad@example.com</li>
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
