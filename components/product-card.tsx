'use client'

import { Star, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/hooks/use-toast'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge
}: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(id, 1)
    setIsAdded(true)
    toast({
      title: "تم إضافة المنتج للسلة",
      description: `${name} - تم الإضافة بنجاح`,
    })

    setTimeout(() => setIsAdded(false), 2000)
  }

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <Link href={`/product/${id}`}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted aspect-square">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Badge and Discount */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {badge && (
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {badge}
              </div>
            )}
            {discount > 0 && (
              <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                -{discount}%
              </div>
            )}
          </div>

          {/* Quick Add to Cart - Revealed on Hover */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 inset-x-0 bg-accent text-accent-foreground py-3 flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart size={18} />
            <span className="font-semibold">أضف للسلة</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-sm line-clamp-2 text-foreground">{name}</h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-accent">{price.toLocaleString('ar-SA')} ر.س</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice.toLocaleString('ar-SA')} ر.س</span>
            )}
          </div>

          {/* Add to Cart Button - Mobile */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 rounded-lg transition-all font-semibold text-sm md:hidden ${isAdded
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
          >
            {isAdded ? '✓ تم الإضافة' : 'أضف للسلة'}
          </button>
        </div>
      </div>
    </Link>
  )
}
