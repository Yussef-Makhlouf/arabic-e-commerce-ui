'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Truck, Shield, Award, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">عن إلكترونيات برو</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            متجرك الموثوق الأول للحصول على أحدث وأفضل الأجهزة الإلكترونية بأسعار تنافسية
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">رسالتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن نسعى لتوفير أفضل تجربة تسوق إلكترونية في المنطقة العربية، بتقديم منتجات أصلية عالية الجودة مع خدمة عملاء استثنائية وأسعار عادلة.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                أن نصبح المنصة الأولى في المنطقة العربية للتكنولوجيا والإلكترونيات، حيث يشعر العملاء بالثقة والأمان والرضا الكامل عند التعامل معنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto">
                <Shield size={24} />
              </div>
              <h3 className="font-semibold">منتجات أصلية 100%</h3>
              <p className="text-sm text-muted-foreground">جميع منتجاتنا مضمونة وأصلية من المصادر الموثوقة</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto">
                <Truck size={24} />
              </div>
              <h3 className="font-semibold">شحن سريع آمن</h3>
              <p className="text-sm text-muted-foreground">توصيل سريع وآمن إلى جميع أنحاء المملكة</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-secondary text-foreground rounded-lg flex items-center justify-center mx-auto">
                <Award size={24} />
              </div>
              <h3 className="font-semibold">ضمان شامل</h3>
              <p className="text-sm text-muted-foreground">ضمان رسمي وخدمة ما بعد البيع ممتازة</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/30 text-primary rounded-lg flex items-center justify-center mx-auto">
                <Users size={24} />
              </div>
              <h3 className="font-semibold">فريق مختص</h3>
              <p className="text-sm text-muted-foreground">فريق دعم متاح للإجابة على جميع استفساراتك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-accent">15,000+</h3>
              <p className="text-muted-foreground mt-2">عميل سعيد</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">1,200+</h3>
              <p className="text-muted-foreground mt-2">منتج متوفر</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary">99%</h3>
              <p className="text-muted-foreground mt-2">معدل الرضا</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <h3 className="font-semibold">البريد الإلكتروني</h3>
              <p className="text-muted-foreground">support@electronitech.com</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold">رقم الهاتف</h3>
              <p className="text-muted-foreground">+966 11 123 4567</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold">ساعات العمل</h3>
              <p className="text-muted-foreground">السبت - الخميس: 8:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
