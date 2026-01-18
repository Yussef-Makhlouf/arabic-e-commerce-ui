'use client'

import { Smartphone, Laptop, Headphones, Monitor } from 'lucide-react'
import Link from 'next/link'
import { getProductsByCategory } from '@/lib/product-utils'

// Count products by category
const categoryCount = {
  smartphones: getProductsByCategory('smartphones').length,
  laptops: getProductsByCategory('laptops').length,
  accessories: getProductsByCategory('accessories').length,
  displays: getProductsByCategory('displays').length,
}

const categories = [
  {
    id: 'smartphones',
    name: 'الهواتف الذكية',
    icon: Smartphone,
    count: categoryCount.smartphones,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'laptops',
    name: 'أجهزة الكمبيوتر',
    icon: Laptop,
    count: categoryCount.laptops,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'accessories',
    name: 'الملحقات والإكسسوارات',
    icon: Headphones,
    count: categoryCount.accessories,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'displays',
    name: 'الشاشات والعروض',
    icon: Monitor,
    count: categoryCount.displays,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            تصفح حسب الفئات
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            اختر من مجموعة واسعة من فئات الإلكترونيات
          </p>
        </div>

        {/* Categories Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isLarge = index === 0 // First item is larger

            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer ${
                  isLarge ? 'md:col-span-1 lg:row-span-2' : ''
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                {/* Content Container */}
                <div className={`relative p-6 md:p-8 h-full flex flex-col justify-between border border-border rounded-lg group-hover:border-accent transition-colors ${
                  isLarge ? 'min-h-64' : 'min-h-56'
                }`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors ${
                    isLarge ? 'w-14 h-14' : ''
                  }`}>
                    <Icon size={isLarge ? 28 : 24} className="text-accent" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className={`font-bold group-hover:text-accent transition-colors ${
                      isLarge ? 'text-xl' : 'text-lg'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} منتج
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                    ←
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
