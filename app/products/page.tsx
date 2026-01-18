'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { getAllProducts, getProductsByCategory } from '@/lib/product-utils'

export default function ProductsPage() {
  const allProducts = getAllProducts()
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const categories = [
    { id: 'all', label: 'جميع المنتجات' },
    { id: 'smartphones', label: 'هواتف ذكية' },
    { id: 'laptops', label: 'أجهزة محمولة' },
    { id: 'accessories', label: 'ملحقات' },
    { id: 'displays', label: 'شاشات' }
  ]

  let products = activeCategory === 'all'
    ? allProducts
    : getProductsByCategory(activeCategory)

  // Sort products
  products = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">المنتجات</h1>
          <p className="text-muted-foreground">تصفح مجموعتنا الكاملة من المنتجات الإلكترونية المتميزة</p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-6 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">الفئة</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      activeCategory === cat.id
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-border text-foreground hover:bg-muted'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="space-y-2">
              <label htmlFor="sort" className="text-sm font-semibold">
                ترتيب حسب
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground"
              >
                <option value="newest">الأحدث</option>
                <option value="price-low">السعر: الأقل أولاً</option>
                <option value="price-high">السعر: الأعلى أولاً</option>
                <option value="rating">التقييم الأعلى</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            عدد المنتجات: <span className="font-semibold text-foreground">{products.length}</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  reviews={product.reviews}
                  badge={product.badgeAr}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">لا توجد منتجات في هذه الفئة</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
