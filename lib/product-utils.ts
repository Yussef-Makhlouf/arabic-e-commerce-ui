import { allProducts, Product } from './products'

export function getProductById(id: string) {
  return allProducts.find(p => p.id === id)
}

export function getProductsByCategory(category: string) {
  return allProducts.filter(p => p.category === category).map(mapProductForCard)
}

export function getFeaturedProducts(limit: number = 8) {
  return allProducts.slice(0, limit).map(mapProductForCard)
}

export function getProductsWithImages() {
  return allProducts.filter(p => p.image && p.image.trim().length > 0).map(mapProductForCard)
}

export function getAllProducts() {
  return allProducts.map(mapProductForCard)
}

export function getDiscountedProducts() {
  return allProducts.filter(p => p.originalPrice && p.originalPrice > p.price).map(mapProductForCard)
}

// Helper to adapt Product to the shape expected by ProductCard and listings
// where some fields might differ (e.g. badgeAr vs badge) or need transformation
function mapProductForCard(p: Product) {
  return {
    ...p,
    reviews: typeof p.reviews === 'number' ? p.reviews : p.reviews.length,
    badgeAr: p.badge, // Map badge to badgeAr as expected by some consumers
  }
}
