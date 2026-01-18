'use client'

import { Star, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

interface Review {
  id: string
  author: string
  rating: number
  title: string
  content: string
  verified: boolean
  helpful: number
  date: string
}

interface ProductReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export default function ProductReviews({
  reviews,
  averageRating,
  totalReviews
}: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState('helpful')
  const [helpfulReviews, setHelpfulReviews] = useState<Record<string, boolean>>({})

  const toggleHelpful = (reviewId: string) => {
    setHelpfulReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }))
  }

  const ratingDistribution = [
    { stars: 5, percentage: 65 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 }
  ]

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-bold mb-6">تقييمات العملاء</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Average Rating */}
          <div className="flex items-center gap-4">
            <div>
              <div className="text-4xl font-bold text-foreground">{averageRating}</div>
              <div className="flex gap-1 mt-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(averageRating)
                        ? 'fill-accent text-accent'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                بناءً على {totalReviews} تقييم
              </p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="md:col-span-2 space-y-2">
            {ratingDistribution.map(({ stars, percentage }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-12">{stars} ⭐</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort & Filter */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">التقييمات ({totalReviews})</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border border-border bg-card rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="helpful">الأكثر فائدة</option>
          <option value="newest">الأحدث</option>
          <option value="highest">التصنيف الأعلى</option>
          <option value="lowest">التصنيف الأقل</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{review.author}</span>
                  {review.verified && (
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      مشتري معتمد
                    </span>
                  )}
                </div>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < review.rating
                          ? 'fill-secondary text-secondary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>

            <div className="mb-3 space-y-1">
              <h4 className="font-semibold text-sm">{review.title}</h4>
              <p className="text-sm text-muted-foreground">{review.content}</p>
            </div>

            <button
              onClick={() => toggleHelpful(review.id)}
              className={`flex items-center gap-2 text-sm transition-colors ${
                helpfulReviews[review.id]
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-accent'
              }`}
            >
              <ThumbsUp size={16} />
              هل أفادك هذا التقييم؟
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
