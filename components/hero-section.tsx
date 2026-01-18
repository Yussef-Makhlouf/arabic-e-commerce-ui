'use client'

import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-background to-background pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content - Right side (RTL) */}
          <div className="space-y-6 order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <Zap size={16} />
              عروض محدودة هذا الأسبوع
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              أحدث التقنيات
              <span className="block text-accent">بأفضل الأسعار</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground max-w-md">
              اكتشف أحدث الأجهزة الإلكترونية من أعرق العلامات التجارية. ضمان أصلي وخدمة عملاء متميزة.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#products"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2 justify-center"
              >
                تسوق الآن
                <ArrowLeft size={18} />
              </Link>

              <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-card transition-colors">
                عرض الفئات
              </button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">ضمان أصلي</p>
                <p className="font-semibold">ضمان سنتين</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">شحن سريع</p>
                <p className="font-semibold">توصيل خلال 24 ساعة</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">استرجاع مجاني</p>
                <p className="font-semibold">خلال 30 يوماً</p>
              </div>
            </div>
          </div>

          {/* Image - Left side (RTL) */}
          <div className="order-1 md:order-2">
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-primary/5 rounded-2xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
