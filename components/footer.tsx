'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, CreditCard, Smartphone } from 'lucide-react'

const footerSections = [
  {
    title: 'حول إلكترونيات برو',
    links: [
      { label: 'من نحن', href: '#' },
      { label: 'الرؤية والرسالة', href: '#' },
      { label: 'الأخبار', href: '#' },
      { label: 'الوظائف', href: '#' }
    ]
  },
  {
    title: 'المساعدة والدعم',
    links: [
      { label: 'مركز المساعدة', href: '#' },
      { label: 'الأسئلة الشائعة', href: '#' },
      { label: 'سياسة الإرجاع', href: '#' },
      { label: 'تتبع الطلب', href: '#' }
    ]
  },
  {
    title: 'الشروط والسياسات',
    links: [
      { label: 'شروط الخدمة', href: '#' },
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'سياسة الأمان', href: '#' },
      { label: 'سياسة الملفات', href: '#' }
    ]
  }
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' }
]

const paymentMethods = [
  { icon: CreditCard, label: 'بطاقات ائتمان' },
  { icon: Smartphone, label: 'المحفظة الرقمية' }
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">ع</span>
              </div>
              <span className="font-bold text-lg">إلكترونيات برو</span>
            </div>
            <p className="text-sm text-muted-foreground">
              متجر إلكترونيات موثوق متخصص بأحدث التقنيات والأجهزة بأسعار تنافسية.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">طرق الدفع المقبولة</p>
            <div className="flex gap-3">
              {paymentMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <div
                    key={idx}
                    className="p-3 border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    <Icon size={20} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold">تواصل معنا</p>
            <p className="text-muted-foreground">رقم الدعم: <span className="text-accent">1234-567-8900</span></p>
            <p className="text-muted-foreground">البريد: <span className="text-accent">support@electronics.com</span></p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>جميع الحقوق محفوظة © 2024 إلكترونيات برو</p>
            <p className="mt-1">صُنع بعناية لك</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
