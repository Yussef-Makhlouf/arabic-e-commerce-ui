// Comprehensive Mock Data for Arabic Electronics E-Commerce Store
// Realistic product data with all categories and details

export interface Product {
  id: string
  name: string
  nameEn: string
  category: 'smartphones' | 'laptops' | 'accessories' | 'displays' | 'audio'
  categoryAr: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  description: string
  descriptionAr: string
  badge?: string
  badgeAr?: string
  specs: {
    label: string
    labelAr: string
    value: string
  }[]
  stock: number
  warranty: string
  warrantyAr: string
  shipping: string
  shippingAr: string
}

export const products: Product[] = [
  // Smartphones
  {
    id: 'phone-001',
    name: 'iPhone 15 Pro Max',
    nameEn: 'iPhone 15 Pro Max',
    category: 'smartphones',
    categoryAr: 'الهواتف الذكية',
    price: 3199,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 324,
    description: 'Latest flagship iPhone with advanced A17 Pro chip, Pro Motion display, and advanced camera system.',
    descriptionAr: 'آخر هاتف رائد مع معالج A17 Pro متقدم وشاشة Pro Motion ونظام كاميرا متطور.',
    badge: 'Best Seller',
    badgeAr: 'الأفضل مبيعاً',
    specs: [
      { label: 'Storage', labelAr: 'السعة التخزينية', value: '512GB' },
      { label: 'RAM', labelAr: 'الذاكرة العشوائية', value: '8GB' },
      { label: 'Screen', labelAr: 'الشاشة', value: '6.7 inches' },
      { label: 'Battery', labelAr: 'البطارية', value: '4323 mAh' },
      { label: 'Camera', labelAr: 'الكاميرا', value: '48MP + 12MP' }
    ],
    stock: 15,
    warranty: '1 Year Official Warranty',
    warrantyAr: 'ضمان رسمي لمدة سنة واحدة',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'phone-002',
    name: 'Samsung Galaxy S24 Ultra',
    nameEn: 'Samsung Galaxy S24 Ultra',
    category: 'smartphones',
    categoryAr: 'الهواتف الذكية',
    price: 2899,
    originalPrice: 3199,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf7ce3350?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 287,
    description: 'Premium Android flagship with 200MP main camera, 6.8" Dynamic AMOLED display, and Snapdragon 8 Gen 3.',
    descriptionAr: 'هاتف Android رائد بكاميرا رئيسية 200 ميجابكسل وشاشة Dynamic AMOLED 6.8 بوصة.',
    badge: 'Hot Deal',
    badgeAr: 'عرض ساخن',
    specs: [
      { label: 'Storage', labelAr: 'السعة التخزينية', value: '256GB' },
      { label: 'RAM', labelAr: 'الذاكرة العشوائية', value: '12GB' },
      { label: 'Screen', labelAr: 'الشاشة', value: '6.8 inches' },
      { label: 'Battery', labelAr: 'البطارية', value: '5000 mAh' },
      { label: 'Camera', labelAr: 'الكاميرا', value: '200MP + 50MP' }
    ],
    stock: 22,
    warranty: '2 Year Official Warranty',
    warrantyAr: 'ضمان رسمي لمدة سنتين',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'phone-003',
    name: 'Google Pixel 8 Pro',
    nameEn: 'Google Pixel 8 Pro',
    category: 'smartphones',
    categoryAr: 'الهواتف الذكية',
    price: 2399,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98fadeef6?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 156,
    description: 'Google\'s flagship with advanced AI camera features, Tensor G3 chip, and 6.7" OLED display.',
    descriptionAr: 'هاتف Google الرائد مع ميزات كاميرا متقدمة ومعالج Tensor G3.',
    specs: [
      { label: 'Storage', labelAr: 'السعة التخزينية', value: '256GB' },
      { label: 'RAM', labelAr: 'الذاكرة العشوائية', value: '12GB' },
      { label: 'Screen', labelAr: 'الشاشة', value: '6.7 inches' },
      { label: 'Battery', labelAr: 'البطارية', value: '5050 mAh' },
      { label: 'Camera', labelAr: 'الكاميرا', value: '50MP + 48MP' }
    ],
    stock: 18,
    warranty: '1 Year Official Warranty',
    warrantyAr: 'ضمان رسمي لمدة سنة واحدة',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'phone-004',
    name: 'OnePlus 12',
    nameEn: 'OnePlus 12',
    category: 'smartphones',
    categoryAr: 'الهواتف الذكية',
    price: 1799,
    originalPrice: 2099,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 198,
    description: 'Powerful flagship killer with Snapdragon 8 Gen 3, 120Hz OLED, and incredible speed.',
    descriptionAr: 'هاتف قوي مع معالج Snapdragon 8 Gen 3 وسرعة لا تصدق.',
    badge: 'Value King',
    badgeAr: 'ملك القيمة',
    specs: [
      { label: 'Storage', labelAr: 'السعة التخزينية', value: '256GB' },
      { label: 'RAM', labelAr: 'الذاكرة العشوائية', value: '12GB' },
      { label: 'Screen', labelAr: 'الشاشة', value: '6.7 inches' },
      { label: 'Battery', labelAr: 'البطارية', value: '5400 mAh' },
      { label: 'Camera', labelAr: 'الكاميرا', value: '50MP + 48MP' }
    ],
    stock: 28,
    warranty: '1 Year Official Warranty',
    warrantyAr: 'ضمان رسمي لمدة سنة واحدة',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },

  // Laptops
  {
    id: 'laptop-001',
    name: 'MacBook Pro 16" M3 Max',
    nameEn: 'MacBook Pro 16" M3 Max',
    category: 'laptops',
    categoryAr: 'أجهزة الحاسوب المحمولة',
    price: 4999,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 412,
    description: 'Professional laptop with M3 Max chip, 36GB RAM, stunning 16" Liquid Retina XDR display.',
    descriptionAr: 'جهاز محمول احترافي مع معالج M3 Max وذاكرة 36GB.',
    badge: 'Premium',
    badgeAr: 'فاخر',
    specs: [
      { label: 'Processor', labelAr: 'المعالج', value: 'Apple M3 Max' },
      { label: 'RAM', labelAr: 'الذاكرة', value: '36GB' },
      { label: 'Storage', labelAr: 'التخزين', value: '1TB SSD' },
      { label: 'Screen', labelAr: 'الشاشة', value: '16" Liquid Retina XDR' },
      { label: 'Battery', labelAr: 'البطارية', value: '~18 hours' }
    ],
    stock: 8,
    warranty: '1 Year AppleCare',
    warrantyAr: 'AppleCare لمدة سنة واحدة',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },
  {
    id: 'laptop-002',
    name: 'Dell XPS 15',
    nameEn: 'Dell XPS 15',
    category: 'laptops',
    categoryAr: 'أجهزة الحاسوب المحمولة',
    price: 2599,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde8f5?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 289,
    description: 'Premium Windows laptop with Intel Core i7, RTX 4080, 32GB RAM, OLED display.',
    descriptionAr: 'جهاز محمول Windows فاخر مع معالج Intel Core i7 وبطاقة رسوميات RTX 4080.',
    badge: 'Best for Creators',
    badgeAr: 'الأفضل للمبدعين',
    specs: [
      { label: 'Processor', labelAr: 'المعالج', value: 'Intel Core i7-13700H' },
      { label: 'Graphics', labelAr: 'البطاقة الرسومية', value: 'RTX 4080' },
      { label: 'RAM', labelAr: 'الذاكرة', value: '32GB DDR5' },
      { label: 'Storage', labelAr: 'التخزين', value: '1TB SSD' },
      { label: 'Screen', labelAr: 'الشاشة', value: '15.6" OLED' }
    ],
    stock: 12,
    warranty: '2 Year Warranty',
    warrantyAr: 'ضمان لمدة سنتين',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },
  {
    id: 'laptop-003',
    name: 'HP Spectre x360 16',
    nameEn: 'HP Spectre x360 16',
    category: 'laptops',
    categoryAr: 'أجهزة الحاسوب المحمولة',
    price: 2299,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 234,
    description: '2-in-1 convertible with Intel Core i7, RTX 4070, 32GB RAM, touchscreen display.',
    descriptionAr: 'جهاز 2 في 1 قابل للتحويل مع معالج Intel Core i7 وشاشة لمسية.',
    specs: [
      { label: 'Processor', labelAr: 'المعالج', value: 'Intel Core i7-13700H' },
      { label: 'Graphics', labelAr: 'البطاقة الرسومية', value: 'RTX 4070' },
      { label: 'RAM', labelAr: 'الذاكرة', value: '32GB DDR5' },
      { label: 'Storage', labelAr: 'التخزين', value: '1TB SSD' },
      { label: 'Screen', labelAr: 'الشاشة', value: '16" OLED Touch' }
    ],
    stock: 14,
    warranty: '2 Year Warranty',
    warrantyAr: 'ضمان لمدة سنتين',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },
  {
    id: 'laptop-004',
    name: 'Lenovo ThinkPad X1 Carbon',
    nameEn: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops',
    categoryAr: 'أجهزة الحاسوب المحمولة',
    price: 1799,
    originalPrice: 2099,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 167,
    description: 'Business ultrabook with Intel Core i5, 16GB RAM, lightweight design.',
    descriptionAr: 'كمبيوتر محمول بسيط وخفيف الوزن مع معالج Intel Core i5.',
    badge: 'Best for Business',
    badgeAr: 'الأفضل للعمل',
    specs: [
      { label: 'Processor', labelAr: 'المعالج', value: 'Intel Core i5-1335U' },
      { label: 'RAM', labelAr: 'الذاكرة', value: '16GB DDR5' },
      { label: 'Storage', labelAr: 'التخزين', value: '512GB SSD' },
      { label: 'Screen', labelAr: 'الشاشة', value: '14" FHD' },
      { label: 'Weight', labelAr: 'الوزن', value: '1.18 kg' }
    ],
    stock: 20,
    warranty: '3 Year Warranty',
    warrantyAr: 'ضمان لمدة 3 سنوات',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },

  // Displays & Monitors
  {
    id: 'display-001',
    name: 'ASUS ProArt Display 32"',
    nameEn: 'ASUS ProArt Display 32"',
    category: 'displays',
    categoryAr: 'الشاشات والعروض',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 187,
    description: '4K professional display with 100% Adobe RGB, factory calibrated, USB-C connectivity.',
    descriptionAr: 'شاشة احترافية 4K مع معايرة المصنع وتوصيل USB-C.',
    badge: 'Professional',
    badgeAr: 'احترافية',
    specs: [
      { label: 'Resolution', labelAr: 'الدقة', value: '3840 x 2160 (4K)' },
      { label: 'Size', labelAr: 'الحجم', value: '32 inches' },
      { label: 'Color Gamut', labelAr: 'نطاق الألوان', value: '100% Adobe RGB' },
      { label: 'Brightness', labelAr: 'السطوع', value: '350 nits' },
      { label: 'Refresh Rate', labelAr: 'معدل التحديث', value: '60Hz' }
    ],
    stock: 6,
    warranty: '3 Year Warranty',
    warrantyAr: 'ضمان لمدة 3 سنوات',
    shipping: 'Free Shipping - 3-5 Days',
    shippingAr: 'شحن مجاني - 3-5 أيام'
  },
  {
    id: 'display-002',
    name: 'LG UltraWide 34"',
    nameEn: 'LG UltraWide 34"',
    category: 'displays',
    categoryAr: 'الشاشات والعروض',
    price: 699,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 245,
    description: '34" ultrawide curved monitor, 3440x1440, 144Hz refresh rate, perfect for gaming and productivity.',
    descriptionAr: 'شاشة عريضة 34 بوصة منحنية مع معدل تحديث 144Hz.',
    badge: 'Ultrawide',
    badgeAr: 'عريضة فائقة',
    specs: [
      { label: 'Resolution', labelAr: 'الدقة', value: '3440 x 1440' },
      { label: 'Size', labelAr: 'الحجم', value: '34 inches' },
      { label: 'Curved', labelAr: 'منحنية', value: '1900R' },
      { label: 'Refresh Rate', labelAr: 'معدل التحديث', value: '144Hz' },
      { label: 'Response Time', labelAr: 'وقت الاستجابة', value: '1ms' }
    ],
    stock: 11,
    warranty: '2 Year Warranty',
    warrantyAr: 'ضمان لمدة سنتين',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },
  {
    id: 'display-003',
    name: 'Dell S2721DGF 27" Gaming',
    nameEn: 'Dell S2721DGF 27" Gaming',
    category: 'displays',
    categoryAr: 'الشاشات والعروض',
    price: 399,
    originalPrice: 549,
    image: 'https://images.unsplash.com/photo-1555707519-a7b2e9d4a7b5?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 312,
    description: '1440p gaming monitor with 165Hz refresh rate, 1ms response time, FreeSync Premium.',
    descriptionAr: 'شاشة ألعاب 1440p مع معدل تحديث 165Hz.',
    badge: 'Gaming',
    badgeAr: 'للألعاب',
    specs: [
      { label: 'Resolution', labelAr: 'الدقة', value: '2560 x 1440' },
      { label: 'Size', labelAr: 'الحجم', value: '27 inches' },
      { label: 'Panel Type', labelAr: 'نوع اللوحة', value: 'IPS' },
      { label: 'Refresh Rate', labelAr: 'معدل التحديث', value: '165Hz' },
      { label: 'Response Time', labelAr: 'وقت الاستجابة', value: '1ms' }
    ],
    stock: 19,
    warranty: '3 Year Warranty',
    warrantyAr: 'ضمان لمدة 3 سنوات',
    shipping: 'Free Shipping - 2-3 Days',
    shippingAr: 'شحن مجاني - 2-3 أيام'
  },

  // Accessories
  {
    id: 'acc-001',
    name: 'Sony WH-1000XM5 Headphones',
    nameEn: 'Sony WH-1000XM5 Headphones',
    category: 'accessories',
    categoryAr: 'الملحقات',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 456,
    description: 'Premium noise-cancelling headphones with 30-hour battery, multipoint connection.',
    descriptionAr: 'سماعات حذف الضوضاء المتميزة ببطارية 30 ساعة.',
    badge: 'Top Rated',
    badgeAr: 'الأكثر تقييماً',
    specs: [
      { label: 'Noise Cancelling', labelAr: 'إلغاء الضوضاء', value: 'Industry Leading' },
      { label: 'Battery Life', labelAr: 'عمر البطارية', value: '30 hours' },
      { label: 'Connectivity', labelAr: 'الاتصال', value: 'Bluetooth 5.3' },
      { label: 'Weight', labelAr: 'الوزن', value: '250g' },
      { label: 'Driver Size', labelAr: 'حجم السماعة', value: '40mm' }
    ],
    stock: 25,
    warranty: '2 Year Warranty',
    warrantyAr: 'ضمان لمدة سنتين',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'acc-002',
    name: 'Apple Watch Series 9',
    nameEn: 'Apple Watch Series 9',
    category: 'accessories',
    categoryAr: 'الملحقات',
    price: 1199,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 389,
    description: 'Advanced fitness and health smartwatch with Always-On display, ECG, blood oxygen monitoring.',
    descriptionAr: 'ساعة ذكية متقدمة مع شاشة دائمة التشغيل ومراقبة صحية.',
    badge: 'Latest',
    badgeAr: 'الأحدث',
    specs: [
      { label: 'Display', labelAr: 'الشاشة', value: 'Always-On Retina' },
      { label: 'Battery Life', labelAr: 'عمر البطارية', value: '18 hours' },
      { label: 'Water Resistance', labelAr: 'مقاومة الماء', value: '50m' },
      { label: 'Size', labelAr: 'الحجم', value: '41mm / 45mm' },
      { label: 'Features', labelAr: 'المميزات', value: 'ECG, Oxygen' }
    ],
    stock: 17,
    warranty: '1 Year AppleCare',
    warrantyAr: 'AppleCare لمدة سنة واحدة',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'acc-003',
    name: 'Logitech MX Master 3S Mouse',
    nameEn: 'Logitech MX Master 3S Mouse',
    category: 'accessories',
    categoryAr: 'الملحقات',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 267,
    description: 'Professional wireless mouse with 8K pixel tracking, customizable buttons, USB-C charging.',
    descriptionAr: 'ماوس احترافي لاسلكي مع 8 أزرار قابلة للتخصيص.',
    specs: [
      { label: 'Tracking', labelAr: 'التتبع', value: '8K DPI' },
      { label: 'Connectivity', labelAr: 'الاتصال', value: 'Bluetooth + USB' },
      { label: 'Battery Life', labelAr: 'عمر البطارية', value: '70 days' },
      { label: 'Programmable Buttons', labelAr: 'أزرار قابلة للتخصيص', value: '8' },
      { label: 'Weight', labelAr: 'الوزن', value: '141g' }
    ],
    stock: 32,
    warranty: '3 Year Warranty',
    warrantyAr: 'ضمان لمدة 3 سنوات',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'acc-004',
    name: 'Samsung T9 Portable SSD 4TB',
    nameEn: 'Samsung T9 Portable SSD 4TB',
    category: 'accessories',
    categoryAr: 'الملحقات',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 298,
    description: 'Ultra-portable SSD with 1050MB/s speed, USB 3.2, rugged design, shock-resistant.',
    descriptionAr: 'محرك تخزين محمول فائق مع سرعة 1050 ميجابايت/ث.',
    badge: 'Storage',
    badgeAr: 'تخزين',
    specs: [
      { label: 'Capacity', labelAr: 'السعة', value: '4TB' },
      { label: 'Speed', labelAr: 'السرعة', value: '1050MB/s' },
      { label: 'Interface', labelAr: 'الواجهة', value: 'USB 3.2' },
      { label: 'Size', labelAr: 'الحجم', value: '57 x 29 x 13mm' },
      { label: 'Weight', labelAr: 'الوزن', value: '250g' }
    ],
    stock: 13,
    warranty: '5 Year Warranty',
    warrantyAr: 'ضمان لمدة 5 سنوات',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  },
  {
    id: 'acc-005',
    name: 'Magic Keyboard with Touch ID',
    nameEn: 'Magic Keyboard with Touch ID',
    category: 'accessories',
    categoryAr: 'الملحقات',
    price: 449,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1587829191301-48b03e30eeab?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 178,
    description: 'Wireless keyboard with Touch ID, numeric keypad, rechargeable battery.',
    descriptionAr: 'لوحة مفاتيح لاسلكية مع معرّف اللمس وحشوة أرقام.',
    specs: [
      { label: 'Connectivity', labelAr: 'الاتصال', value: 'Bluetooth' },
      { label: 'Battery Life', labelAr: 'عمر البطارية', value: '~1 month' },
      { label: 'Keys', labelAr: 'المفاتيح', value: 'Scissor mechanism' },
      { label: 'Numeric Pad', labelAr: 'حشوة الأرقام', value: 'Yes' },
      { label: 'Weight', labelAr: 'الوزن', value: '591g' }
    ],
    stock: 29,
    warranty: '1 Year Warranty',
    warrantyAr: 'ضمان لمدة سنة واحدة',
    shipping: 'Free Shipping - 1-2 Days',
    shippingAr: 'شحن مجاني - 1-2 أيام'
  }
]

export const categories = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    nameAr: 'الهواتف الذكية',
    icon: '📱',
    color: '#5B5FFF'
  },
  {
    id: 'laptops',
    name: 'Laptops',
    nameAr: 'أجهزة الحاسوب',
    icon: '💻',
    color: '#FF6B6B'
  },
  {
    id: 'displays',
    name: 'Displays',
    nameAr: 'الشاشات',
    icon: '🖥️',
    color: '#4ECDC4'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    nameAr: 'الملحقات',
    icon: '🎧',
    color: '#FFA500'
  }
]

export const promotions = [
  {
    id: 'promo-1',
    title: 'iPhone 15 Pro Deal',
    titleAr: 'عرض iPhone 15 Pro',
    discount: '40%',
    description: 'Limited time offer on premium smartphones',
    descriptionAr: 'عرض محدود الوقت على الهواتف الذكية المتميزة',
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=400&fit=crop'
  },
  {
    id: 'promo-2',
    title: 'Laptop Sale',
    titleAr: 'بيع أجهزة الحاسوب',
    discount: '35%',
    description: 'Save big on gaming and professional laptops',
    descriptionAr: 'وفر على أجهزة الحاسوب للألعاب والمحترفين',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=400&fit=crop'
  },
  {
    id: 'promo-3',
    title: 'Accessories Bundle',
    titleAr: 'مجموعة الملحقات',
    discount: '25%',
    description: 'Complete your tech setup with discounted bundles',
    descriptionAr: 'أكمل إعدادك التقني مع حزم مخفضة',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=400&fit=crop'
  }
]

export const cartItems = [
  {
    id: 'cart-1',
    product: products[0], // iPhone 15 Pro Max
    quantity: 1
  },
  {
    id: 'cart-2',
    product: products[5], // Dell XPS 15
    quantity: 1
  },
  {
    id: 'cart-3',
    product: products[9], // Sony Headphones
    quantity: 2
  }
]
