"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import type { Product } from "@/app/page"

interface ReviewsModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
}

export function ReviewsModal({ isOpen, onClose, product }: ReviewsModalProps) {
  const [userRating, setUserRating] = useState(0)
  const [userReview, setUserReview] = useState("")
  const [showWriteReview, setShowWriteReview] = useState(false)

  const sampleReviews = [
    {
      id: 1,
      user: "María González",
      rating: 5,
      date: "15 Dic 2024",
      comment: "Excelente producto, llegó muy rápido y en perfectas condiciones. Lo recomiendo 100%.",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      user: "Carlos Rodríguez",
      rating: 4,
      date: "10 Dic 2024",
      comment: "Muy buena calidad, aunque el precio podría ser un poco mejor. En general satisfecho con la compra.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      user: "Ana Martínez",
      rating: 5,
      date: "5 Dic 2024",
      comment: "Superó mis expectativas. El producto es tal como se describe y el servicio al cliente es excelente.",
      helpful: 15,
      verified: false,
    },
  ]

  const handleSubmitReview = () => {
    if (userRating > 0 && userReview.trim()) {
      // Aquí se enviaría la reseña
      console.log("Nueva reseña:", { rating: userRating, comment: userReview })
      setUserRating(0)
      setUserReview("")
      setShowWriteReview(false)
    }
  }

  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Reseñas de {product.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{product.rating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{product.reviews} reseñas</p>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-sm w-8">{stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${Math.random() * 80 + 10}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{Math.floor(Math.random() * 50)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Write review button */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Reseñas de clientes</h3>
            <Button onClick={() => setShowWriteReview(!showWriteReview)} className="bg-red-600 hover:bg-red-700">
              Escribir reseña
            </Button>
          </div>

          {/* Write review form */}
          {showWriteReview && (
            <div className="border rounded-lg p-4 space-y-4">
              <h4 className="font-medium">Escribe tu reseña</h4>
              <div>
                <p className="text-sm text-gray-600 mb-2">Tu calificación:</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setUserRating(star)} className="p-1">
                      <Star
                        className={`h-6 w-6 ${star <= userRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Tu comentario:</p>
                <Textarea
                  placeholder="Comparte tu experiencia con este producto..."
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSubmitReview} className="bg-red-600 hover:bg-red-700">
                  Publicar reseña
                </Button>
                <Button variant="outline" onClick={() => setShowWriteReview(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          )}

          {/* Reviews list */}
          <div className="space-y-4">
            {sampleReviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{review.user}</span>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Compra verificada</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
                    <ThumbsUp className="h-4 w-4" />
                    Útil ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
                    <ThumbsDown className="h-4 w-4" />
                    No útil
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center">
            <Button variant="outline">Ver más reseñas</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
