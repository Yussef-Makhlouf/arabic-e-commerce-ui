import { products } from './mock-data'

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(limit: number = 8) {
  return products.slice(0, limit)
}

export function getProductsWithImages() {
  return products.filter(p => p.image && p.image.trim().length > 0)
}

export function getAllProducts() {
  return products
}

export function getDiscountedProducts() {
  return products.filter(p => p.originalPrice && p.originalPrice > p.price)
}
