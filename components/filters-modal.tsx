"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface FiltersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FiltersModal({ isOpen, onClose }: FiltersModalProps) {
  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [hasDiscount, setHasDiscount] = useState(false)
  const [freeShipping, setFreeShipping] = useState(false)

  const categories = ["Tecnología", "Electrodomésticos", "Moda", "Deportes", "Hogar", "Belleza"]
  const brands = ["Apple", "Samsung", "Nike", "Adidas", "LG", "Sony", "HP", "Dell"]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const clearAllFilters = () => {
    setPriceRange([0, 5000000])
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedRating(null)
    setHasDiscount(false)
    setFreeShipping(false)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (priceRange[0] > 0 || priceRange[1] < 5000000) count++
    if (selectedCategories.length > 0) count++
    if (selectedBrands.length > 0) count++
    if (selectedRating) count++
    if (hasDiscount) count++
    if (freeShipping) count++
    return count
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Filtros de búsqueda</span>
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary">{getActiveFiltersCount()} filtros activos</Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Price Range */}
          <div className="space-y-3">
            <h3 className="font-semibold">Rango de precio</h3>
            <div className="px-3">
              <Slider value={priceRange} onValueChange={setPriceRange} max={5000000} step={50000} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-semibold">Categorías</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <label htmlFor={category} className="text-sm cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-3">
            <h3 className="font-semibold">Marcas</h3>
            <div className="grid grid-cols-2 gap-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                  />
                  <label htmlFor={brand} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <h3 className="font-semibold">Calificación mínima</h3>
            <div className="flex gap-2">
              {[4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant={selectedRating === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  className={selectedRating === rating ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {rating}+ ⭐
                </Button>
              ))}
            </div>
          </div>

          {/* Special offers */}
          <div className="space-y-3">
            <h3 className="font-semibold">Ofertas especiales</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="discount"
                  checked={hasDiscount}
                  onCheckedChange={(checked) => setHasDiscount(checked as boolean)}
                />
                <label htmlFor="discount" className="text-sm cursor-pointer">
                  Solo productos con descuento
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="shipping"
                  checked={freeShipping}
                  onCheckedChange={(checked) => setFreeShipping(checked as boolean)}
                />
                <label htmlFor="shipping" className="text-sm cursor-pointer">
                  Envío gratis
                </label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={clearAllFilters} className="flex-1 bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Limpiar filtros
            </Button>
            <Button onClick={onClose} className="flex-1 bg-red-600 hover:bg-red-700">
              Aplicar filtros
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
