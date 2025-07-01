"use client"

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Truck,
  Shield,
  Headphones,
} from "lucide-react"

// Actualizar la interfaz
interface FooterProps {
  onTermsClick: () => void
  onPrivacyClick: () => void
  onPaymentInfoClick: () => void
  onShippingInfoClick: () => void
  onHelpClick: () => void
}

export function Footer({
  onTermsClick,
  onPrivacyClick,
  onPaymentInfoClick,
  onShippingInfoClick,
  onHelpClick,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="font-semibold">Envío gratis</h3>
                <p className="text-sm text-gray-400">Desde $80.000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="font-semibold">Pago seguro</h3>
                <p className="text-sm text-gray-400">Múltiples métodos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="font-semibold">Compra protegida</h3>
                <p className="text-sm text-gray-400">Garantía total</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="font-semibold">Soporte 24/7</h3>
                <p className="text-sm text-gray-400">Siempre disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl inline-block">EXAMPLE</div>
            <p className="text-gray-400">
              Tu tienda online de confianza con los mejores productos y precios del mercado.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Ofertas del día
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Nuevos productos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Gift cards
                </a>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Atención al cliente</h3>
            <ul className="space-y-2">
              {/* Hacer todos los enlaces clickeables */}
              <li>
                <button onClick={onHelpClick} className="text-gray-400 hover:text-white">
                  Centro de ayuda
                </button>
              </li>
              <li>
                <button onClick={onShippingInfoClick} className="text-gray-400 hover:text-white">
                  Devoluciones
                </button>
              </li>
              <li>
                <button onClick={onShippingInfoClick} className="text-gray-400 hover:text-white">
                  Garantías
                </button>
              </li>
              <li>
                <button onClick={onTermsClick} className="text-gray-400 hover:text-white">
                  Términos y condiciones
                </button>
              </li>
              <li>
                <button onClick={onPrivacyClick} className="text-gray-400 hover:text-white">
                  Política de privacidad
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">01 8000 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">info@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 EXAMPLE. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <button onClick={onPaymentInfoClick} className="text-gray-400 text-sm hover:text-white">
                Métodos de pago:
              </button>
              {/* Hacer clickeables los métodos de pago */}
              <div className="flex gap-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-blue-600">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-red-600">MC</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-blue-800">PSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
