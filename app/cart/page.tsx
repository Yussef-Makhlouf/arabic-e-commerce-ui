'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Trash2, Plus, Minus, ArrowRight, Gift } from 'lucide-react'
import Link from 'next/link'
import { getAllProducts } from '@/lib/product-utils'

const products = getAllProducts()

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

// Initialize cart with real products from mock data
const initialCartItems: CartItem[] = [
  {
    id: products[0].id,
    name: products[0].name,
    price: products[0].price,
    quantity: 1,
    image: products[0].image
  },
  {
    id: products[5].id,
    name: products[5].name,
    price: products[5].price,
    quantity: 1,
    image: products[5].image
  },
  {
    id: products[9].id,
    name: products[9].name,
    price: products[9].price,
    quantity: 2,
    image: products[9].image
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.15)
  const promoDiscount = appliedPromo ? Math.round(subtotal * 0.1) : 0
  const shippingCost = subtotal > 200 ? 0 : 50
  const total = subtotal + tax + shippingCost - promoDiscount

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id)
      return
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setAppliedPromo(promoCode)
      setPromoCode('')
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">الرئيسية</Link> / <span className="text-foreground">سلة التسوق</span>
          </div>

          {cartItems.length === 0 ? (
            // Empty Cart State
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold mb-3">سلتك فارغة</h2>
              <p className="text-muted-foreground mb-6">لم تضف أي منتجات بعد. ابدأ التسوق الآن!</p>
              <Link href="/" className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                متابعة التسوق
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold mb-6">سلة التسوق ({cartItems.length})</h2>

                {cartItems.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-4 md:p-6 flex gap-4 md:gap-6 bg-card">
                    {/* Image */}
                    <div className="relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-semibold text-sm md:text-base line-clamp-2">{item.name}</h3>
                        <p className="text-accent font-bold mt-2 text-sm md:text-base">
                          {item.price.toLocaleString('ar-SA')} ر.س
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-border rounded-lg p-1">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-secondary transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1 font-semibold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-secondary transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Total */}
                        <div className="text-right">
                          <p className="text-muted-foreground text-xs md:text-sm">المجموع</p>
                          <p className="font-bold">
                            {(item.price * item.quantity).toLocaleString('ar-SA')} ر.س
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 hover:bg-destructive/10 transition-colors rounded-lg self-start"
                    >
                      <Trash2 size={18} className="text-destructive" />
                    </button>
                  </div>
                ))}

                {/* Continue Shopping */}
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 text-accent hover:text-accent/80 transition-colors py-4"
                >
                  <ArrowRight size={18} />
                  متابعة التسوق
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-border rounded-lg p-6 bg-card sticky top-24 space-y-4">
                  <h3 className="text-lg font-bold">ملخص الطلب</h3>

                  {/* Summary Items */}
                  <div className="space-y-3 border-b border-border pb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">المجموع</span>
                      <span>{subtotal.toLocaleString('ar-SA')} ر.س</span>
                    </div>

                    {shippingCost > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">الشحن</span>
                        <span>{shippingCost.toLocaleString('ar-SA')} ر.س</span>
                      </div>
                    )}

                    {shippingCost === 0 && (
                      <div className="flex justify-between text-sm text-accent">
                        <span>الشحن المجاني ✓</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الضريبة (15%)</span>
                      <span>{tax.toLocaleString('ar-SA')} ر.س</span>
                    </div>

                    {promoDiscount > 0 && (
                      <div className="flex justify-between text-sm text-accent">
                        <span>خصم الكوبون</span>
                        <span>-{promoDiscount.toLocaleString('ar-SA')} ر.س</span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold">المجموع النهائي</span>
                    <span className="text-2xl font-bold text-accent">
                      {total.toLocaleString('ar-SA')} ر.س
                    </span>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2 bg-secondary/10 p-3 rounded-lg">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="رمز الخصم"
                        className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="px-3 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm font-semibold"
                      >
                        تطبيق
                      </button>
                    </div>
                    {appliedPromo && (
                      <p className="text-xs text-accent">تم تطبيق الكوبون: {appliedPromo}</p>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <button className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                      إتمام الشراء
                    </button>
                    <button className="w-full border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                      <Gift size={18} />
                      شحن كهدية
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="text-xs text-muted-foreground space-y-1 border-t border-border pt-4">
                    <p>✓ ضمان سنتين على جميع المنتجات</p>
                    <p>✓ توصيل آمن مع تتبع الطلب</p>
                    <p>✓ إرجاع مجاني لمدة 30 يوم</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
