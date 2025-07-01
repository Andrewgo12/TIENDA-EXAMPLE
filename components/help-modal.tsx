"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MessageCircle, Phone, Mail, Package } from "lucide-react"

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
  onOrderTrackingClick: () => void
}

export function HelpModal({ isOpen, onClose, onOrderTrackingClick }: HelpModalProps) {
  const faqs = [
    {
      question: "¿Cómo puedo rastrear mi pedido?",
      answer:
        "Puedes rastrear tu pedido ingresando el número de orden en la sección de seguimiento o desde tu cuenta de usuario.",
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer: "Aceptamos tarjetas de crédito, débito, PSE, Nequi, Daviplata y pago contra entrega en algunas ciudades.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer:
        "Las entregas en Bogotá tardan 1-2 días hábiles, en otras ciudades principales 2-3 días, y en municipios 3-5 días hábiles.",
    },
    {
      question: "¿Puedo devolver un producto?",
      answer:
        "Sí, tienes 30 días para devolver productos en perfecto estado. Los gastos de envío de devolución corren por cuenta del cliente.",
    },
    {
      question: "¿Cómo cambio o cancelo mi pedido?",
      answer:
        "Puedes cambiar o cancelar tu pedido dentro de las primeras 2 horas después de realizarlo, contactando nuestro servicio al cliente.",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Centro de ayuda
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq">Preguntas frecuentes</TabsTrigger>
            <TabsTrigger value="contact">Contacto</TabsTrigger>
            <TabsTrigger value="tracking">Seguimiento</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Preguntas frecuentes</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Métodos de contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Línea de atención</p>
                      <p className="text-sm text-gray-600">01 8000 123 456</p>
                      <p className="text-xs text-gray-500">Lun - Dom: 7:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <MessageCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Chat en línea</p>
                      <p className="text-sm text-gray-600">Respuesta inmediata</p>
                      <p className="text-xs text-gray-500">Lun - Dom: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Mail className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Correo electrónico</p>
                      <p className="text-sm text-gray-600">ayuda@example.com</p>
                      <p className="text-xs text-gray-500">Respuesta en 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Envíanos un mensaje</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Nombre" />
                    <Input placeholder="Apellido" />
                  </div>
                  <Input type="email" placeholder="Correo electrónico" />
                  <Input placeholder="Número de pedido (opcional)" />
                  <Textarea placeholder="Describe tu consulta o problema..." rows={4} />
                  <Button className="w-full bg-red-600 hover:bg-red-700">Enviar mensaje</Button>
                </form>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-4">
            <div className="text-center space-y-4">
              <Package className="h-16 w-16 text-red-600 mx-auto" />
              <h3 className="text-lg font-semibold">Rastrea tu pedido</h3>
              <p className="text-gray-600">Ingresa tu número de pedido para ver el estado de tu envío</p>
              <Button
                onClick={() => {
                  onOrderTrackingClick()
                  onClose()
                }}
                className="bg-red-600 hover:bg-red-700"
              >
                Ir a seguimiento de pedidos
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
