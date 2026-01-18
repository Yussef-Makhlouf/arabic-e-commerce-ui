'use client'

import ProductCard from './product-card'
import { smartphones, laptops, accessories, displays } from '@/lib/products'

export default function CategoryShowcase() {
  const categories = [
    {
      id: 'phones',
      title: 'الهواتف الذكية',
      subtitle: 'أحدث الهواتف الذكية بمواصفات احترافية',
      products: smartphones.slice(0, 4),
      color: 'from-accent to-accent/50'
    },
    {
      id: 'laptops',
      title: 'أجهزة محمولة',
      subtitle: 'حواسيب محمولة قوية للعمل والترفيه',
      products: laptops.slice(0, 4),
      color: 'from-primary to-primary/50'
    },
    {
      id: 'accessories',
      title: 'الملحقات',
      subtitle: 'ملحقات وإكسسوارات تقنية متميزة',
      products: accessories.slice(0, 4),
      color: 'from-secondary to-secondary/50'
    },
    {
      id: 'displays',
      title: 'الشاشات',
      subtitle: 'شاشات عالية الجودة للعمل والألعاب',
      products: displays.slice(0, 4),
      color: 'from-accent to-primary/50'
    }
  ]

  return (
    <div className="space-y-16 py-12">
      {categories.map((category) => (
        <section key={category.id} className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-8 space-y-2">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground text-lg">{category.subtitle}</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.products.map((product) => (
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

            {/* View All Button */}
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                عرض جميع {category.title}
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
