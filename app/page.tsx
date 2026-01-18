import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import PromoBanners from '@/components/promo-banners'
import ProductsSection from '@/components/products-section'
import CategoriesSection from '@/components/categories-section'
import CategoryShowcase from '@/components/category-showcase'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PromoBanners />
      <CategoriesSection />
      <ProductsSection />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryShowcase />
      </section>
      <Footer />
    </main>
  )
}
