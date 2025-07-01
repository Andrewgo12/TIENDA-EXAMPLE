"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { ProductModal } from "@/components/product-modal"
import { CartModal } from "@/components/cart-modal"
import { AuthModal } from "@/components/auth-modal"
import { SearchModal } from "@/components/search-modal"
import { FiltersModal } from "@/components/filters-modal"
import { WishlistModal } from "@/components/wishlist-modal"
import { CompareModal } from "@/components/compare-modal"
import { HelpModal } from "@/components/help-modal"
import { TermsModal } from "@/components/terms-modal"
import { PrivacyModal } from "@/components/privacy-modal"
import { PaymentInfoModal } from "@/components/payment-info-modal"
import { ShippingInfoModal } from "@/components/shipping-info-modal"
import { OrderTrackingModal } from "@/components/order-tracking-modal"
import { ReviewsModal } from "@/components/reviews-modal"
import { CategoryModal } from "@/components/category-modal"
import { NewsletterConfirmModal } from "@/components/newsletter-confirm-modal"
// Importar las nuevas vistas de categorías
import { TechnologyView } from "@/components/category-views/technology-view"
import { AppliancesView } from "@/components/category-views/appliances-view"
import { FashionView } from "@/components/category-views/fashion-view"
import { SportsView } from "@/components/category-views/sports-view"
import { HomeView } from "@/components/category-views/home-view"
import { BeautyView } from "@/components/category-views/beauty-view"
import { SupermarketView } from "@/components/category-views/supermarket-view"
import { allProducts } from "@/data/products"

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  discount?: number
  description: string
  features: string[]
  brand?: string
  inStock?: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [currentView, setCurrentView] = useState<string>("home")

  // Estados para todas las modales
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isPaymentInfoOpen, setIsPaymentInfoOpen] = useState(false)
  const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false)
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false)
  const [isReviewsOpen, setIsReviewsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])
  const [compareItems, setCompareItems] = useState<Product[]>([])
  const [newsletterConfirm, setNewsletterConfirm] = useState(false)

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const addToCompare = (product: Product) => {
    setCompareItems((prev) => {
      if (prev.length >= 3 || prev.find((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFromCompare = (productId: number) => {
    setCompareItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleCategoryClick = (category: string) => {
    setCurrentView(category.toLowerCase())
  }

  const handleBackToHome = () => {
    setCurrentView("home")
  }

  // Renderizar vista según la categoría seleccionada
  const renderCurrentView = () => {
    switch (currentView) {
      case "tecnología":
        return (
          <TechnologyView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      case "electrodomésticos":
        return (
          <AppliancesView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      case "moda":
        return (
          <FashionView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      case "deportes":
        return (
          <SportsView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      case "hogar":
        return (
          <HomeView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      case "belleza":
        return (
          <BeautyView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      case "supermercado":
        return (
          <SupermarketView
            onProductClick={setSelectedProduct}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onAddToCompare={addToCompare}
            onBackToHome={handleBackToHome}
          />
        )
      default:
        return (
          <>
            <Hero />
            <Categories onCategoryClick={handleCategoryClick} />
            <FeaturedProducts
              products={allProducts.slice(0, 8)}
              onProductClick={setSelectedProduct}
              onAddToCart={addToCart}
              onAddToWishlist={addToWishlist}
              onAddToCompare={addToCompare}
            />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemsCount={getTotalItems()}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onHelpClick={() => setIsHelpOpen(true)}
        onCategoryClick={handleCategoryClick}
        onHomeClick={handleBackToHome}
      />

      {renderCurrentView()}

      <Newsletter onSubscribe={() => setNewsletterConfirm(true)} />
      <Footer
        onTermsClick={() => setIsTermsOpen(true)}
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onPaymentInfoClick={() => setIsPaymentInfoOpen(true)}
        onShippingInfoClick={() => setIsShippingInfoOpen(true)}
        onHelpClick={() => setIsHelpOpen(true)}
      />

      {/* Todas las modales */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={allProducts}
        onProductClick={setSelectedProduct}
        onFiltersClick={() => setIsFiltersOpen(true)}
      />

      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemoveItem={removeFromWishlist}
        onAddToCart={addToCart}
        onProductClick={setSelectedProduct}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        items={compareItems}
        onRemoveItem={removeFromCompare}
        onAddToCart={addToCart}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onOrderTrackingClick={() => setIsOrderTrackingOpen(true)}
      />

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      <PaymentInfoModal isOpen={isPaymentInfoOpen} onClose={() => setIsPaymentInfoOpen(false)} />

      <ShippingInfoModal isOpen={isShippingInfoOpen} onClose={() => setIsShippingInfoOpen(false)} />

      <OrderTrackingModal isOpen={isOrderTrackingOpen} onClose={() => setIsOrderTrackingOpen(false)} />

      <ReviewsModal isOpen={isReviewsOpen} onClose={() => setIsReviewsOpen(false)} product={selectedProduct} />

      <CategoryModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory}
        products={allProducts.filter((p) => (selectedCategory ? p.category === selectedCategory : false))}
        onProductClick={setSelectedProduct}
        onAddToCart={addToCart}
        onAddToWishlist={addToWishlist}
      />

      <NewsletterConfirmModal isOpen={newsletterConfirm} onClose={() => setNewsletterConfirm(false)} />
    </div>
  )
}
