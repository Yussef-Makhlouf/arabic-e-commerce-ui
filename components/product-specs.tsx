'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface Spec {
  category: string
  items: Array<{ label: string; value: string }>
}

interface ProductSpecsProps {
  specifications: Spec[]
}

export default function ProductSpecs({ specifications }: ProductSpecsProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(specifications[0]?.category || null)

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold mb-4">المواصفات التقنية</h3>
      
      {specifications.map((spec) => (
        <div key={spec.category} className="border border-border rounded-lg">
          {/* Header */}
          <button
            onClick={() => setExpandedCategory(
              expandedCategory === spec.category ? null : spec.category
            )}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
          >
            <h4 className="font-semibold">{spec.category}</h4>
            <ChevronDown
              size={18}
              className={`transition-transform ${
                expandedCategory === spec.category ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Content */}
          {expandedCategory === spec.category && (
            <div className="border-t border-border px-4 py-3 bg-card/50">
              <div className="space-y-3">
                {spec.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
