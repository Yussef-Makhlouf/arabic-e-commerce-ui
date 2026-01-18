'use client'

import ProductCard from './product-card'
import { getFeaturedProducts } from '@/lib/product-utils'
import Link from 'next/link'

export default function ProductsSection() {
  const featuredProducts = getFeaturedProducts(8)

  return (
    <section id="products" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            الأكثر مبيعاً
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            أشهر الأجهزة والملحقات المختارة بعناية لك
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
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

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/products" className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors inline-block">
            عرض جميع المنتجات
          </Link>
        </div>
      </div>
    </section>
  )
}
