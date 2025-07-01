"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

// Actualizar la interfaz
interface NewsletterProps {
  onSubscribe: () => void
}

export function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState("")

  // Actualizar el handleSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      onSubscribe()
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto text-white space-y-6">
          <Mail className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">¡No te pierdas nuestras ofertas exclusivas!</h2>
          <p className="text-xl opacity-90">
            Suscríbete a nuestro newsletter y recibe descuentos especiales, promociones y las últimas novedades
            directamente en tu correo.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button type="submit" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
              Suscribirse
            </Button>
          </form>

          <p className="text-sm opacity-75">
            Al suscribirte, aceptas recibir correos promocionales. Puedes cancelar tu suscripción en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
