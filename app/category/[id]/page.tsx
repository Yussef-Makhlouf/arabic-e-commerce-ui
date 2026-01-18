'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import ProductCard from '@/components/product-card'
import Footer from '@/components/footer'
import { getProductsByCategory } from '@/lib/products'
import { useState } from 'react'

const categoryNames: Record<string, string> = {
  'phones': 'الهواتف الذكية',
  'laptops': 'أجهزة الحاسوب المحمول',
  'accessories': 'الملحقات والإكسسوارات',
  'displays': 'الشاشات والعروض'
}

const categoryDescriptions: Record<string, string> = {
  'phones': 'أحدث الهواتف الذكية من أفضل الماركات العالمية بأسعار تنافسية',
  'laptops': 'أجهزة حاسوب محمول بقوة معالجة عالية وتصاميم عصرية',
  'accessories': 'ملحقات وإكسسوارات إلكترونية عالية الجودة',
  'displays': 'شاشات وعروض تقديمية بتقنيات حديثة'
}

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.id as string
  const [sortBy, setSortBy] = useState('newest')

  const categoryName = categoryNames[categoryId] || 'الفئة'
  const categoryDescription = categoryDescriptions[categoryId] || ''
  const products = getProductsByCategory(categoryId)

  let sortedProducts = [...products]
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    sortedProducts.sort((a, b) => b.rating - a.rating)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Category Header */}
      <section className="py-12 bg-gradient-to-b from-primary/10 to-transparent border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
          <p className="text-muted-foreground">{categoryDescription}</p>
          <p className="text-sm text-muted-foreground mt-4">
            {sortedProducts.length} منتج متوفر
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Sort */}
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-border">
            <h2 className="text-lg font-semibold">عرض المنتجات</h2>
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted-foreground">ترتيب حسب:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent"
              >
                <option value="newest">الأحدث</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">التقييم الأعلى</option>
              </select>
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  reviews={typeof product.reviews === 'number' ? product.reviews : product.reviews.length}
                  badge={product.badge}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">لا توجد منتجات في هذه الفئة</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
