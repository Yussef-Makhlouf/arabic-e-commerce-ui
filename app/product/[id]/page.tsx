'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductGallery from '@/components/product-gallery'
import ProductSpecs from '@/components/product-specs'
import ProductReviews from '@/components/product-reviews'
import ProductCard from '@/components/product-card'
import { getProductById, allProducts } from '@/lib/products'
import { Star, Shield, Truck, RotateCcw, Heart, Share2 } from 'lucide-react'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">المنتج غير موجود</h1>
          <p className="text-muted-foreground mb-8">عذراً، لم نتمكن من العثور على المنتج المطلوب</p>
          <a href="/" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
            العودة للرئيسية
          </a>
        </div>
        <Footer />
      </main>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
  const totalPrice = product.price * quantity

  // Get related products from the same category
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const productImages = product.images.map(img => ({
    url: img.url,
    alt: img.alt
  }))

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Product Details Section */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-foreground">الرئيسية</a> / <span>{product.categoryLabel}</span> / <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <ProductGallery images={productImages} productName={product.name} />

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'fill-secondary text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({typeof product.reviews === 'number' ? product.reviews : product.reviews.length} تقييم)
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-card rounded-lg p-6 border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-accent">
                      {product.price.toLocaleString('ar-SA')} ر.س
                    </span>
                    <span className="text-lg line-through text-muted-foreground">
                      {product.originalPrice.toLocaleString('ar-SA')} ر.س
                    </span>
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      -{discount}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">المخزون: {product.stock} وحدة</p>
                </div>

                {/* Quantity Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold">الكمية</label>
                  <div className="flex items-center gap-3 border border-border rounded-lg p-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-secondary transition-colors"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 hover:bg-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <button className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-lg">
                    أضف إلى السلة ({totalPrice.toLocaleString('ar-SA')} ر.س)
                  </button>
                  <button className="w-full border-2 border-accent text-accent py-4 rounded-lg font-semibold hover:bg-accent/10 transition-colors">
                    اشترِ الآن
                  </button>
                </div>

                {/* Wishlist & Share */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`flex-1 py-2 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                      isFavorited
                        ? 'bg-secondary border-secondary text-secondary-foreground'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
                    {isFavorited ? 'في المفضلة' : 'أضف للمفضلة'}
                  </button>
                  <button className="flex-1 py-2 rounded-lg border border-border hover:border-accent transition-colors flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    شارك
                  </button>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <Shield className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-sm">{product.warranty}</p>
                    <p className="text-xs text-muted-foreground">جودة معتمدة وأصلية 100%</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Truck className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-sm">{product.shipping}</p>
                    <p className="text-xs text-muted-foreground">خلال 24-48 ساعة</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <RotateCcw className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-sm">{product.returns}</p>
                    <p className="text-xs text-muted-foreground">بدون أسئلة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Reviews */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Specs */}
            <div className="lg:col-span-1">
              <ProductSpecs specifications={product.specifications} />
            </div>

            {/* Reviews */}
            <div className="lg:col-span-2">
              <ProductReviews
                reviews={typeof product.reviews === 'object' ? product.reviews : []}
                averageRating={product.rating}
                totalReviews={typeof product.reviews === 'number' ? product.reviews : product.reviews.length}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">منتجات مشابهة</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  id={relProduct.id}
                  name={relProduct.name}
                  price={relProduct.price}
                  originalPrice={relProduct.originalPrice}
                  image={relProduct.image}
                  rating={relProduct.rating}
                  reviews={typeof relProduct.reviews === 'number' ? relProduct.reviews : relProduct.reviews.length}
                  badge={relProduct.badge}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
