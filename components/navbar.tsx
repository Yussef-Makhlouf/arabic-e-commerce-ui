'use client'

import Link from 'next/link'
import { ShoppingCart, User, Menu, X, LogIn } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '@/lib/cart-context'
import { useAuth } from '@/lib/auth-context'
import Image from 'next/image'

const navItems = [
  { label: 'الرئيسية', href: '/' },
  { label: 'المنتجات', href: '/products' },
  { label: 'الفئات', href: '/products' },
  { label: 'عن المتجر', href: '/about' },
  { label: 'تواصل معنا', href: '/about' }
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount } = useCart()
  const { user, loading } = useAuth()
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - RTL Aligned */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">ع</span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">إلكترونيات برو</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart-page" className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                {mounted ? cartCount : 0}
              </span>
            </Link>

            {/* User Account */}
            {mounted && !loading && (
              <>
                {user ? (
                  <Link href="/profile" className="flex items-center gap-2 p-1.5 hover:bg-secondary rounded-lg transition-colors group">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border group-hover:border-accent">
                      <Image
                        src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium hidden md:inline-block max-w-[100px] truncate">
                      {user.name.split(' ')[0]}
                    </span>
                  </Link>
                ) : (
                  <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <LogIn size={16} />
                    <span className="hidden sm:inline">دخول</span>
                  </Link>
                )}
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {!user && (
              <div className="pt-2 border-t border-border mt-2">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-sm text-primary font-medium"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-sm text-muted-foreground"
                >
                  إنشاء حساب
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
