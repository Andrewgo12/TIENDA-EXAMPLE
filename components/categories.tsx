"use client"

import { Smartphone, Tv, Shirt, Dumbbell, Home, Sparkles, ShoppingBasket, Car } from "lucide-react"

interface CategoriesProps {
  onCategoryClick: (category: string) => void
}

const categories = [
  { name: "Tecnología", icon: Smartphone, color: "bg-blue-500" },
  { name: "Electrodomésticos", icon: Tv, color: "bg-purple-500" },
  { name: "Moda", icon: Shirt, color: "bg-pink-500" },
  { name: "Deportes", icon: Dumbbell, color: "bg-green-500" },
  { name: "Hogar", icon: Home, color: "bg-orange-500" },
  { name: "Belleza", icon: Sparkles, color: "bg-rose-500" },
  { name: "Supermercado", icon: ShoppingBasket, color: "bg-yellow-500" },
  { name: "Automotriz", icon: Car, color: "bg-gray-500" },
]

export function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Compra por categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                onClick={() => onCategoryClick(category.name)}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className={`${category.color} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
