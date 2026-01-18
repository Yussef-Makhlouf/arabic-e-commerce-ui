'use client'

import { useCart } from '@/lib/cart-context'
import { getProductById } from '@/lib/products'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null)

  const tax = Math.round(subtotal * 0.15 * 100) / 100 // 15% tax
  const shipping = subtotal > 200 ? 0 : 30 // Free shipping over 200
  const promoDiscount = appliedPromo ? Math.round(subtotal * (appliedPromo.discount / 100) * 100) / 100 : 0
  const total = Math.round((subtotal + tax + shipping - promoDiscount) * 100) / 100

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE20') {
      setAppliedPromo({ code: 'SAVE20', discount: 20 })
    } else if (promoCode.toUpperCase() === 'TECH10') {
      setAppliedPromo({ code: 'TECH10', discount: 10 })
    }
    setPromoCode('')
  }

  const cartItems = items.map(item => {
    const product = getProductById(item.productId)
    return { ...item, product }
  }).filter(item => item.product)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">السلة</h1>
          <p className="text-muted-foreground mt-2">({cartItems.length} منتجات)</p>
        </div>
      </section>

      {cartItems.length > 0 ? (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => {
                  if (!item.product) return null
                  return (
                    <div key={item.productId} className="bg-card rounded-lg border border-border p-4 flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <a href={`/product/${item.productId}`} className="font-semibold text-foreground hover:text-accent transition-colors">
                          {item.product.name}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          السعر: {item.price.toLocaleString('ar-SA')} ر.س
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 border border-border rounded hover:bg-muted transition-colors"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 bg-muted rounded text-center w-12">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="px-2 py-1 border border-border rounded hover:bg-muted transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <p className="text-lg font-bold text-accent">
                          {(item.price * item.quantity).toLocaleString('ar-SA')} ر.س
                        </p>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-destructive hover:text-destructive/80 transition-colors p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  )
                })}

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-destructive border border-destructive rounded-lg hover:bg-destructive/10 transition-colors font-semibold"
                >
                  مسح السلة
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg border border-border p-6 space-y-4 sticky top-20">
                  <h2 className="text-xl font-bold">ملخص الطلب</h2>

                  {/* Subtotal */}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">المجموع الفرعي:</span>
                    <span>{subtotal.toLocaleString('ar-SA')} ر.س</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">الشحن:</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-accent font-semibold">مجاني</span>
                      ) : (
                        <span>{shipping.toLocaleString('ar-SA')} ر.س</span>
                      )}
                    </span>
                  </div>

                  {/* Tax */}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">الضريبة (15%):</span>
                    <span>{tax.toLocaleString('ar-SA')} ر.س</span>
                  </div>

                  {/* Promo Discount */}
                  {appliedPromo && (
                    <div className="flex justify-between text-sm bg-primary/10 p-2 rounded">
                      <span className="text-primary font-semibold">
                        خصم {appliedPromo.code} ({appliedPromo.discount}%):
                      </span>
                      <span className="text-primary font-semibold">
                        -{promoDiscount.toLocaleString('ar-SA')} ر.س
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="border-t border-border"></div>

                  {/* Total */}
                  <div className="flex justify-between text-lg font-bold">
                    <span>الإجمالي:</span>
                    <span className="text-accent">{total.toLocaleString('ar-SA')} ر.س</span>
                  </div>

                  {/* Promo Code Input */}
                  <div className="space-y-2 pt-2">
                    <label className="text-sm font-semibold">رمز العرض</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="أدخل رمز العرض"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground"
                      />
                      <button
                        onClick={applyPromo}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
                      >
                        تطبيق
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">رموز متاحة: SAVE20, TECH10</p>
                  </div>

                  {/* Checkout Button */}
                  <Link href="/checkout" className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-lg flex items-center justify-center gap-2 block">
                    <ShoppingBag size={20} />
                    إتمام الشراء
                  </Link>

                  {/* Continue Shopping */}
                  <a
                    href="/products"
                    className="w-full border-2 border-accent text-accent py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowRight size={20} />
                    متابعة التسوق
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <ShoppingBag size={64} className="mx-auto text-muted-foreground" />
            <h2 className="text-3xl font-bold">السلة فارغة</h2>
            <p className="text-muted-foreground mb-8">لم تضف أي منتجات إلى السلة حتى الآن</p>
            <a
              href="/products"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              ابدأ التسوق
            </a>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
