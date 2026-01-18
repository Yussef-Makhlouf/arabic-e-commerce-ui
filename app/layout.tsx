import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_Arabic, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

// Arabic-optimized font with Latin fallback
const arabicFont = Noto_Sans_Arabic({ 
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700']
});

const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'إلكترونيات برو | متجر الإلكترونيات الموثوق',
  description: 'متجر إلكترونيات متخصص بأحدث أجهزة وملحقات التكنولوجيا بأسعار تنافسية وضمان أصلي',
  generator: 'v0.app',
  openGraph: {
    title: 'إلكترونيات برو',
    description: 'متجر إلكترونيات متخصص بالأجهزة الحديثة والملحقات',
    type: 'website',
    locale: 'ar_SA',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className={`${arabicFont.className} font-sans antialiased bg-background text-foreground dark`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
