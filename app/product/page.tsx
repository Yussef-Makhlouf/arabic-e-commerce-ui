'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductGallery from '@/components/product-gallery'
import ProductSpecs from '@/components/product-specs'
import ProductReviews from '@/components/product-reviews'
import ProductCard from '@/components/product-card'
import { Star, Shield, Truck, RotateCcw, Heart, Share2 } from 'lucide-react'
import { getFeaturedProducts } from '@/lib/product-utils'

// Use first iPhone product as the featured product detail
const featuredProduct = getFeaturedProducts(1)[0]

const productData = {
  id: featuredProduct.id,
  name: featuredProduct.name,
  price: featuredProduct.price,
  originalPrice: featuredProduct.originalPrice,
  rating: featuredProduct.rating,
  reviews: featuredProduct.reviews,
  description: featuredProduct.descriptionAr,
  images: [
    featuredProduct.image,
    'https://images.unsplash.com/photo-1516321318423-f06f70674b0c?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=800&fit=crop'
  ],
  warranty: featuredProduct.warrantyAr,
  shipping: featuredProduct.shippingAr,
  returns: 'إرجاع مجاني لمدة 30 يوم',
  specifications: [
    {
      category: 'المعالج والأداء',
      items: [
        { label: 'المعالج', value: 'A18 Pro' },
        { label: 'الذاكرة العشوائية', value: '12GB' },
        { label: 'التخزين', value: '256GB/512GB/1TB' },
        { label: 'نظام التشغيل', value: 'iOS 18' }
      ]
    },
    {
      category: 'الشاشة',
      items: [
        { label: 'الحجم', value: '6.9 بوصات' },
        { label: 'دقة العرض', value: 'LTPO OLED' },
        { label: 'معدل التحديث', value: '120 هرتز' },
        { label: 'الحماية', value: 'Corning Gorilla Glass Armor' }
      ]
    },
    {
      category: 'الكاميرا',
      items: [
        { label: 'الكاميرا الخلفية', value: '48MP + 12MP + 12MP' },
        { label: 'الكاميرا الأمامية', value: '12MP' },
        { label: 'التصوير 8K', value: 'نعم' },
        { label: 'الفيديو', value: 'حتى 4K بـ 120fps' }
      ]
    },
    {
      category: 'البطارية والشحن',
      items: [
        { label: 'السعة', value: '4685 mAh' },
        { label: 'الشحن السريع', value: '45 واط' },
        { label: 'الشحن اللاسلكي', value: '25 واط' },
        { label: 'استقرار البطارية', value: 'حتى 35 ساعة' }
      ]
    }
  ],
  reviews: [
    {
      id: 'r1',
      author: 'أحمد محمد',
      rating: 5,
      title: 'ممتاز جداً!',
      content: 'الهاتف ممتاز والكاميرا تصور بشكل احترافي جداً. الشاشة رائعة والأداء سريع جداً. أنصح الكل به.',
      verified: true,
      helpful: 245,
      date: 'قبل 5 أيام'
    },
    {
      id: 'r2',
      author: 'فاطمة علي',
      rating: 5,
      title: 'الأفضل في فئته',
      content: 'شراء استثماري رائع. الجودة عالية جداً والسعر منطقي. خدمة التوصيل كانت سريعة وآمنة.',
      verified: true,
      helpful: 189,
      date: 'قبل أسبوع'
    },
    {
      id: 'r3',
      author: 'محمود يوسف',
      rating: 4,
      title: 'جيد جداً',
      content: 'الهاتف جميل لكن السعر مرتفع قليلاً. الأداء والكاميرا رائعة. أنصح به للمحترفين.',
      verified: true,
      helpful: 123,
      date: 'قبل أسبوعين'
    }
  ],
  relatedProducts: [
    {
      id: '2',
      name: 'كمبيوتر محمول Ultra',
      price: 6999,
      originalPrice: 8499,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 156
    },
    {
      id: '3',
      name: 'سماعات لاسلكية Elite',
      price: 1299,
      originalPrice: 1799,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 412
    },
    {
      id: '4',
      name: 'ساعة ذكية Premium',
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 289
    },
    {
      id: '5',
      name: 'شاشة منحنية 4K',
      price: 2199,
      originalPrice: 2899,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 178
    }
  ]
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)

  const discount = Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100)
  const totalPrice = productData.price * quantity

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Product Details Section */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-foreground">الرئيسية</a> / <span>هواتف ذكية</span> / <span className="text-foreground">{productData.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <ProductGallery images={productData.images} productName={productData.name} />

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name}</h1>
                <div className="flex items-center gap-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(productData.rating)
                            ? 'fill-secondary text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {productData.rating} ({productData.reviews} تقييم)
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-card rounded-lg p-6 border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-accent">
                      {productData.price.toLocaleString('ar-SA')} ر.س
                    </span>
                    <span className="text-lg line-through text-muted-foreground">
                      {productData.originalPrice.toLocaleString('ar-SA')} ر.س
                    </span>
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      -{discount}%
                    </span>
                  </div>
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
                      onClick={() => setQuantity(quantity + 1)}
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
                    <p className="font-semibold text-sm">{productData.warranty}</p>
                    <p className="text-xs text-muted-foreground">جودة معتمدة وأصلية 100%</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Truck className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-sm">{productData.shipping}</p>
                    <p className="text-xs text-muted-foreground">خلال 24-48 ساعة</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <RotateCcw className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-sm">{productData.returns}</p>
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
              <ProductSpecs specifications={productData.specifications} />
            </div>

            {/* Reviews */}
            <div className="lg:col-span-2">
              <ProductReviews
                reviews={productData.reviews}
                averageRating={productData.rating}
                totalReviews={productData.reviews.length}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">منتجات مشابهة</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productData.relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
