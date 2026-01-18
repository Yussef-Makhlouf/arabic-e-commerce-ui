'use client'

import Link from 'next/link'
import { Zap, Percent, Truck } from 'lucide-react'
import { promotions } from '@/lib/mock-data'

const promos = [
  {
    id: 1,
    title: 'عرض الأسبوع',
    subtitle: 'هواتف ذكية مختارة',
    discount: '40%',
    description: 'خصم على أحدث الهواتف الذكية - iPhone 15 Pro Max بـ 3199 ريال فقط',
    icon: Zap,
    color: 'from-blue-600 to-cyan-600',
    size: 'lg'
  },
  {
    id: 2,
    title: 'تجميع وأوفّر',
    subtitle: 'أجهزة حاسوب محمولة',
    discount: 'حتى 35%',
    description: 'على أجهزة الحاسوب المحمولة - من 1799 ريال',
    icon: Percent,
    color: 'from-purple-600 to-pink-600',
    size: 'sm'
  },
  {
    id: 3,
    title: 'شحن مجاني',
    subtitle: 'جميع الطلبات',
    discount: 'مجاني',
    description: 'توصيل سريع 1-2 أيام على كل المنتجات',
    icon: Truck,
    color: 'from-orange-600 to-red-600',
    size: 'sm'
  }
]

export default function PromoBanners() {
  return (
    <section id="offers" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid with Mixed Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {promos.map((promo) => {
            const Icon = promo.icon

            return (
              <Link
                key={promo.id}
                href="#"
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                  promo.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-90`} />

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl group-hover:blur-2xl transition-all" />
                </div>

                {/* Content */}
                <div className={`relative px-6 py-8 md:px-8 md:py-12 h-full flex flex-col justify-between group-hover:translate-x-1 transition-transform ${
                  promo.size === 'lg' ? 'min-h-64' : 'min-h-40'
                }`}>
                  {/* Top Content */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon size={24} className="text-white" />
                      <span className="text-white/80 text-sm font-semibold">{promo.title}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg md:text-2xl">
                      {promo.subtitle}
                    </h3>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-3">
                    <div className="text-white/80 text-sm">{promo.description}</div>
                    <div className="flex items-end justify-between pt-2">
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-white">
                          {promo.discount}
                        </div>
                      </div>
                      <div className="text-white/60 text-sm">اكتشف →</div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
