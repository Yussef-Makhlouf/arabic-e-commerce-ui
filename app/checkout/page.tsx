'use client'

import React from "react"

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Check, Truck, Shield, RotateCcw } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const [orderComplete, setOrderComplete] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setOrderComplete(true)
    }
  }

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-card rounded-lg border border-border p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
              <Check size={32} />
            </div>
            <h1 className="text-3xl font-bold">تم استقبال طلبك!</h1>
            <p className="text-muted-foreground">
              شكراً لك على شراءك. تم إرسال تفاصيل الطلب إلى بريدك الإلكتروني.
            </p>
            <div className="bg-secondary/10 border border-secondary rounded-lg p-6 space-y-4 text-start">
              <div className="flex justify-between">
                <span className="text-muted-foreground">رقم الطلب:</span>
                <span className="font-semibold">#ORD-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">حالة الطلب:</span>
                <span className="text-primary font-semibold">قيد المعالجة</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">التوصيل المتوقع:</span>
                <span className="font-semibold">خلال 3-5 أيام عمل</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="space-y-2">
                <Truck className="mx-auto text-accent" size={24} />
                <p className="text-sm font-semibold">شحن سريع</p>
              </div>
              <div className="space-y-2">
                <Shield className="mx-auto text-accent" size={24} />
                <p className="text-sm font-semibold">ضمان أصلي</p>
              </div>
              <div className="space-y-2">
                <RotateCcw className="mx-auto text-accent" size={24} />
                <p className="text-sm font-semibold">سياسة الإرجاع</p>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <Link href="/" className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                العودة للرئيسية
              </Link>
              <Link href="/products" className="flex-1 border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-all">
                متابعة التسوق
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: 1, title: 'معلومات التوصيل' },
            { num: 2, title: 'بيانات الدفع' },
            { num: 3, title: 'تأكيد الطلب' }
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mx-auto mb-2 ${
                step >= s.num 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {step > s.num ? <Check size={20} /> : s.num}
              </div>
              <p className="text-sm font-semibold">{s.title}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-card rounded-lg border border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">معلومات التوصيل</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="الاسم الكامل"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الجوال"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="المدينة"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="العنوان"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent md:col-span-2"
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="الرمز البريدي"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">بيانات الدفع</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardName"
                    placeholder="اسم حامل البطاقة"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent md:col-span-2"
                    required
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="رقم البطاقة"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent md:col-span-2"
                    maxLength={19}
                    required
                  />
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    maxLength={5}
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-accent"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">تأكيد الطلب</h2>
                <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">يرجى التأكد من جميع البيانات قبل تأكيد الطلب:</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">الاسم:</span> {formData.fullName}</p>
                    <p><span className="text-muted-foreground">البريد الإلكتروني:</span> {formData.email}</p>
                    <p><span className="text-muted-foreground">رقم الجوال:</span> {formData.phone}</p>
                    <p><span className="text-muted-foreground">العنوان:</span> {formData.address}, {formData.city}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-all"
                >
                  رجوع
                </button>
              )}
              <button
                type="submit"
                className="flex-1 bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                {step === 3 ? 'تأكيد الطلب' : 'التالي'}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
