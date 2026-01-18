// Complete Electronics Product Catalog with Mock Data
// Organized by category with detailed specifications, images, and pricing

export interface ProductImage {
  url: string;
  alt: string;
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface SpecificationCategory {
  category: string;
  items: SpecificationItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'phones' | 'laptops' | 'accessories' | 'displays';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  image: string;
  images: ProductImage[];
  rating: number;
  reviews: Review[] | number;
  description: string;
  shortDescription: string;
  warranty: string;
  shipping: string;
  returns: string;
  specifications: SpecificationCategory[];
  stock: number;
  badge?: string;
}

// SMARTPHONES CATEGORY
export const smartphones: Product[] = [
  {
    id: 'phone-1',
    name: 'هاتف ذكي Pro Max 15',
    category: 'phones',
    categoryLabel: 'هواتف ذكية',
    price: 3499,
    originalPrice: 4299,
    image: '/products/phone-pro-max.jpg',
    images: [
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف من الأمام' },
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف من الخلف' },
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف من الجانب' },
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف والملحقات' }
    ],
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        author: 'أحمد محمد',
        rating: 5,
        title: 'ممتاز جداً!',
        content: 'الهاتف ممتاز والكاميرا تصور بشكل احترافي جداً. الشاشة رائعة والأداء سريع جداً. أنصح الكل به.',
        verified: true,
        helpful: 245,
        date: 'قبل 5 أيام'
      },
      {
        id: 'r2',
        author: 'فاطمة علي',
        rating: 5,
        title: 'الأفضل في فئته',
        content: 'شراء استثماري رائع. الجودة عالية جداً والسعر منطقي. خدمة التوصيل كانت سريعة وآمنة.',
        verified: true,
        helpful: 189,
        date: 'قبل أسبوع'
      },
      {
        id: 'r3',
        author: 'محمود يوسف',
        rating: 4,
        title: 'جيد جداً',
        content: 'الهاتف جميل لكن السعر مرتفع قليلاً. الأداء والكاميرا رائعة. أنصح به للمحترفين.',
        verified: true,
        helpful: 123,
        date: 'قبل أسبوعين'
      }
    ],
    description: 'أحدث هاتف ذكي بمواصفات احترافية وكاميرا فائقة الجودة مع شاشة LTPO OLED 6.9 بوصة وبطارية طويلة الأمد.',
    shortDescription: 'هاتف ذكي بمواصفات احترافية وكاميرا فائقة الجودة',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'A18 Pro' },
          { label: 'الذاكرة العشوائية', value: '12GB' },
          { label: 'التخزين', value: '256GB/512GB/1TB' },
          { label: 'نظام التشغيل', value: 'iOS 18' }
        ]
      },
      {
        category: 'الشاشة',
        items: [
          { label: 'الحجم', value: '6.9 بوصات' },
          { label: 'دقة العرض', value: 'LTPO OLED' },
          { label: 'معدل التحديث', value: '120 هرتز' },
          { label: 'الحماية', value: 'Corning Gorilla Glass Armor' }
        ]
      },
      {
        category: 'الكاميرا',
        items: [
          { label: 'الكاميرا الخلفية', value: '48MP + 12MP + 12MP' },
          { label: 'الكاميرا الأمامية', value: '12MP' },
          { label: 'التصوير 8K', value: 'نعم' },
          { label: 'الفيديو', value: 'حتى 4K بـ 120fps' }
        ]
      },
      {
        category: 'البطارية والشحن',
        items: [
          { label: 'السعة', value: '4685 mAh' },
          { label: 'الشحن السريع', value: '45 واط' },
          { label: 'الشحن اللاسلكي', value: '25 واط' },
          { label: 'استقرار البطارية', value: 'حتى 35 ساعة' }
        ]
      }
    ],
    stock: 45,
    badge: 'الأكثر مبيعاً'
  },
  {
    id: 'phone-2',
    name: 'هاتف ذكي Ultra 14',
    category: 'phones',
    categoryLabel: 'هواتف ذكية',
    price: 2899,
    originalPrice: 3699,
    image: '/products/phone-pro-max.jpg',
    images: [
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف من الأمام' },
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف من الخلف' }
    ],
    rating: 4.6,
    reviews: 189,
    description: 'هاتف ذكي متميز بشاشة AMOLED وأداء عالية وكاميرا احترافية.',
    shortDescription: 'هاتف ذكي بشاشة AMOLED وأداء عالية',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'Snapdragon 8 Gen 3' },
          { label: 'الذاكرة العشوائية', value: '12GB/16GB' },
          { label: 'التخزين', value: '256GB/512GB' },
          { label: 'نظام التشغيل', value: 'Android 14' }
        ]
      },
      {
        category: 'الشاشة',
        items: [
          { label: 'الحجم', value: '6.7 بوصات' },
          { label: 'دقة العرض', value: 'AMOLED' },
          { label: 'معدل التحديث', value: '144 هرتز' },
          { label: 'الحماية', value: 'Gorilla Glass Armor' }
        ]
      },
      {
        category: 'الكاميرا',
        items: [
          { label: 'الكاميرا الخلفية', value: '50MP + 12MP + 10MP' },
          { label: 'الكاميرا الأمامية', value: '32MP' },
          { label: 'التصوير 4K', value: 'نعم' },
          { label: 'الفيديو', value: 'حتى 8K بـ 60fps' }
        ]
      },
      {
        category: 'البطارية والشحن',
        items: [
          { label: 'السعة', value: '5000 mAh' },
          { label: 'الشحن السريع', value: '65 واط' },
          { label: 'الشحن اللاسلكي', value: '50 واط' },
          { label: 'استقرار البطارية', value: 'حتى 48 ساعة' }
        ]
      }
    ],
    stock: 32
  },
  {
    id: 'phone-3',
    name: 'هاتف ذكي Pro 13',
    category: 'phones',
    categoryLabel: 'هواتف ذكية',
    price: 2199,
    originalPrice: 2899,
    image: '/products/phone-pro-max.jpg',
    images: [
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف من الجانب' }
    ],
    rating: 4.5,
    reviews: 156,
    description: 'هاتف ذكي بسعر مناسب وأداء متوازنة.',
    shortDescription: 'هاتف ذكي بسعر مناسب وأداء متوازنة',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 14 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'A17 Pro' },
          { label: 'الذاكرة العشوائية', value: '8GB' },
          { label: 'التخزين', value: '128GB/256GB' },
          { label: 'نظام التشغيل', value: 'iOS 17' }
        ]
      }
    ],
    stock: 28
  },
  {
    id: 'phone-4',
    name: 'هاتف ذكي Standard',
    category: 'phones',
    categoryLabel: 'هواتف ذكية',
    price: 1299,
    originalPrice: 1699,
    image: '/products/phone-pro-max.jpg',
    images: [
      { url: '/products/phone-pro-max.jpg', alt: 'الهاتف والملحقات' }
    ],
    rating: 4.2,
    reviews: 87,
    description: 'هاتف ذكي موثوق وبسيط للاستخدام اليومي.',
    shortDescription: 'هاتف ذكي موثوق وبسيط للاستخدام اليومي',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 14 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'Snapdragon 7 Gen 2' },
          { label: 'الذاكرة العشوائية', value: '6GB' },
          { label: 'التخزين', value: '128GB' },
          { label: 'نظام التشغيل', value: 'Android 13' }
        ]
      }
    ],
    stock: 60
  }
];

// LAPTOPS CATEGORY
export const laptops: Product[] = [
  {
    id: 'laptop-1',
    name: 'كمبيوتر محمول Pro Ultra',
    category: 'laptops',
    categoryLabel: 'أجهزة محمولة',
    price: 6999,
    originalPrice: 8499,
    image: '/products/laptop-pro-ultra.jpg',
    images: [
      { url: '/products/laptop-pro-ultra.jpg', alt: 'الجهاز مفتوح' },
      { url: '/products/laptop-pro-ultra.jpg', alt: 'الجهاز من الجانب' }
    ],
    rating: 4.9,
    reviews: [
      {
        id: 'r1',
        author: 'علي أحمد',
        rating: 5,
        title: 'الأفضل للعمل الاحترافي',
        content: 'جهاز رائع للعمل الاحترافي والبرمجة. الأداء ممتاز والبطارية تدوم طويلاً. شاشة جميلة وواضحة جداً.',
        verified: true,
        helpful: 156,
        date: 'قبل أسبوع'
      },
      {
        id: 'r2',
        author: 'ليلى محمود',
        rating: 5,
        title: 'استثمار ممتاز',
        content: 'جودة بناء عالية جداً. الأداء يتحمل البرامج الثقيلة بسهولة. أنصح به كل من يعمل في التصميم والمحتوى.',
        verified: true,
        helpful: 134,
        date: 'قبل أسبوعين'
      }
    ],
    description: 'كمبيوتر محمول احترافي بمعالج M3 Max وأداء عالية جداً مناسب للعمل الاحترافي والبرمجة والتصميم.',
    shortDescription: 'كمبيوتر محمول احترافي بمعالج M3 Max',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'Apple M3 Max' },
          { label: 'الذاكرة العشوائية', value: '36GB' },
          { label: 'التخزين', value: '1TB SSD' },
          { label: 'نظام التشغيل', value: 'macOS Sonoma' }
        ]
      },
      {
        category: 'الشاشة',
        items: [
          { label: 'الحجم', value: '16 بوصة' },
          { label: 'دقة العرض', value: 'ProMotion 120Hz' },
          { label: 'الدقة', value: '3456x2234' },
          { label: 'نوع الشاشة', value: 'Liquid Retina XDR' }
        ]
      },
      {
        category: 'البطارية',
        items: [
          { label: 'استقرار البطارية', value: 'حتى 18 ساعة' },
          { label: 'الشحن السريع', value: '140 واط' }
        ]
      }
    ],
    stock: 15,
    badge: 'للمحترفين'
  },
  {
    id: 'laptop-2',
    name: 'كمبيوتر محمول Business Pro',
    category: 'laptops',
    categoryLabel: 'أجهزة محمولة',
    price: 4999,
    originalPrice: 6299,
    image: '/products/laptop-pro-ultra.jpg',
    images: [
      { url: '/products/laptop-pro-ultra.jpg', alt: 'الجهاز من الأعلى' }
    ],
    rating: 4.7,
    reviews: 142,
    description: 'كمبيوتر محمول متوازن للعمل والترفيه مع معالج قوي وشاشة عالية الجودة.',
    shortDescription: 'كمبيوتر محمول للعمل والترفيه',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'Intel Core i7-13th Gen' },
          { label: 'الذاكرة العشوائية', value: '16GB' },
          { label: 'التخزين', value: '512GB SSD' },
          { label: 'البطاقة الرسومية', value: 'NVIDIA RTX 4060' }
        ]
      },
      {
        category: 'الشاشة',
        items: [
          { label: 'الحجم', value: '15.6 بوصة' },
          { label: 'دقة العرض', value: 'IPS' },
          { label: 'الدقة', value: '2560x1600' },
          { label: 'معدل التحديث', value: '165Hz' }
        ]
      }
    ],
    stock: 22
  },
  {
    id: 'laptop-3',
    name: 'كمبيوتر محمول Standard',
    category: 'laptops',
    categoryLabel: 'أجهزة محمولة',
    price: 2299,
    originalPrice: 2999,
    image: '/products/laptop-pro-ultra.jpg',
    images: [
      { url: '/products/laptop-pro-ultra.jpg', alt: 'الجهاز مفتوح' }
    ],
    rating: 4.3,
    reviews: 98,
    description: 'كمبيوتر محمول بسيط وموثوق للاستخدام اليومي والعمل المكتبي.',
    shortDescription: 'كمبيوتر محمول بسيط وموثوق',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 14 يوم',
    specifications: [
      {
        category: 'المعالج والأداء',
        items: [
          { label: 'المعالج', value: 'AMD Ryzen 5 7530U' },
          { label: 'الذاكرة العشوائية', value: '8GB' },
          { label: 'التخزين', value: '256GB SSD' }
        ]
      }
    ],
    stock: 35
  }
];

// ACCESSORIES CATEGORY
export const accessories: Product[] = [
  {
    id: 'acc-1',
    name: 'سماعات لاسلكية Elite',
    category: 'accessories',
    categoryLabel: 'الملحقات',
    price: 1299,
    originalPrice: 1799,
    image: '/products/headphones-elite.jpg',
    images: [
      { url: '/products/headphones-elite.jpg', alt: 'السماعات' }
    ],
    rating: 4.8,
    reviews: 412,
    description: 'سماعات لاسلكية بجودة صوت عالية مع إلغاء الضوضاء النشط.',
    shortDescription: 'سماعات لاسلكية بجودة صوت عالية',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'الخصائص',
        items: [
          { label: 'نوع الاتصال', value: 'بلوتوث 5.3' },
          { label: 'إلغاء الضوضاء', value: 'نعم - نشط' },
          { label: 'مدة البطارية', value: 'حتى 40 ساعة' },
          { label: 'الشحن السريع', value: 'شحن سريع 5 دقائق' }
        ]
      }
    ],
    stock: 78,
    badge: 'الخيار الأول'
  },
  {
    id: 'acc-2',
    name: 'ساعة ذكية Premium',
    category: 'accessories',
    categoryLabel: 'الملحقات',
    price: 899,
    originalPrice: 1299,
    image: '/products/smartwatch-premium.jpg',
    images: [
      { url: '/products/smartwatch-premium.jpg', alt: 'الساعة الذكية' }
    ],
    rating: 4.6,
    reviews: 289,
    description: 'ساعة ذكية برياضية مراقبة صحتك وأنشطتك اليومية.',
    shortDescription: 'ساعة ذكية برياضية ومراقبة صحية',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'الخصائص',
        items: [
          { label: 'نوع الشاشة', value: 'AMOLED' },
          { label: 'حجم الشاشة', value: '1.4 بوصة' },
          { label: 'مدة البطارية', value: 'حتى 14 يوم' },
          { label: 'المقاوم للماء', value: 'نعم - 5ATM' }
        ]
      }
    ],
    stock: 54
  },
  {
    id: 'acc-3',
    name: 'لوحة مفاتيح ميكانيكية',
    category: 'accessories',
    categoryLabel: 'الملحقات',
    price: 599,
    originalPrice: 799,
    image: '/products/keyboard-mechanical.jpg',
    images: [
      { url: '/products/keyboard-mechanical.jpg', alt: 'لوحة المفاتيح' }
    ],
    rating: 4.7,
    reviews: 345,
    description: 'لوحة مفاتيح ميكانيكية بتقنية RGB مناسبة للألعاب والعمل.',
    shortDescription: 'لوحة مفاتيح ميكانيكية بـ RGB',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'الخصائص',
        items: [
          { label: 'نوع المفاتيح', value: 'ميكانيكية RGB' },
          { label: 'الاتصال', value: 'سلكي + لاسلكي' },
          { label: 'الألوان', value: '16 مليون لون' },
          { label: 'الأزرار', value: '104 زر' }
        ]
      }
    ],
    stock: 41
  },
  {
    id: 'acc-4',
    name: 'ماوس لاسلكي برو',
    category: 'accessories',
    categoryLabel: 'الملحقات',
    price: 299,
    originalPrice: 449,
    image: '/products/keyboard-mechanical.jpg',
    images: [
      { url: '/products/keyboard-mechanical.jpg', alt: 'الماوس' }
    ],
    rating: 4.5,
    reviews: 267,
    description: 'ماوس لاسلكي احترافي بدقة عالية مناسب للعمل والألعاب.',
    shortDescription: 'ماوس لاسلكي احترافي عالي الدقة',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'الخصائص',
        items: [
          { label: 'الدقة', value: 'حتى 16000 DPI' },
          { label: 'الاتصال', value: '2.4GHz لاسلكي' },
          { label: 'الأزرار', value: '8 أزرار قابلة للبرمجة' },
          { label: 'البطارية', value: 'حتى 70 ساعة' }
        ]
      }
    ],
    stock: 89
  },
  {
    id: 'acc-5',
    name: 'شاحن سريع 100W',
    category: 'accessories',
    categoryLabel: 'الملحقات',
    price: 199,
    originalPrice: 299,
    image: '/products/headphones-elite.jpg',
    images: [
      { url: '/products/headphones-elite.jpg', alt: 'الشاحن' }
    ],
    rating: 4.6,
    reviews: 156,
    description: 'شاحن سريع متعدد الأجهزة بقوة 100W مع حماية ذكية.',
    shortDescription: 'شاحن سريع 100W متعدد الأجهزة',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'الخصائص',
        items: [
          { label: 'القوة', value: '100W' },
          { label: 'المنافذ', value: '2 USB-C + 1 USB-A' },
          { label: 'التوافق', value: 'جميع الأجهزة' },
          { label: 'الحماية', value: 'ذكية 5 طبقات' }
        ]
      }
    ],
    stock: 125
  },
  {
    id: 'acc-6',
    name: 'حقيبة محمول مقاومة الماء',
    category: 'accessories',
    categoryLabel: 'الملحقات',
    price: 149,
    originalPrice: 249,
    image: '/products/laptop-pro-ultra.jpg',
    images: [
      { url: '/products/laptop-pro-ultra.jpg', alt: 'الحقيبة' }
    ],
    rating: 4.4,
    reviews: 203,
    description: 'حقيبة محمول مقاومة للماء والصدمات لحماية جهازك.',
    shortDescription: 'حقيبة محمول مقاومة للماء',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'الخصائص',
        items: [
          { label: 'الحماية', value: 'مقاومة الماء + الصدمات' },
          { label: 'السعة', value: 'حتى 17 بوصة' },
          { label: 'المقاسات', value: '42 × 29 × 13 سم' },
          { label: 'الوزن', value: '350 غ' }
        ]
      }
    ],
    stock: 97
  }
];

// DISPLAYS CATEGORY
export const displays: Product[] = [
  {
    id: 'display-1',
    name: 'شاشة منحنية 4K 32"',
    category: 'displays',
    categoryLabel: 'الشاشات',
    price: 2199,
    originalPrice: 2899,
    image: '/products/monitor-4k-curved.jpg',
    images: [
      { url: '/products/monitor-4k-curved.jpg', alt: 'الشاشة' }
    ],
    rating: 4.7,
    reviews: 178,
    description: 'شاشة منحنية بدقة 4K بمعدل تحديث 120Hz مناسبة للألعاب والعمل الاحترافي.',
    shortDescription: 'شاشة منحنية 4K عالية الأداء',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المواصفات',
        items: [
          { label: 'الحجم', value: '32 بوصة' },
          { label: 'الدقة', value: '3840 × 2160 (4K)' },
          { label: 'معدل التحديث', value: '120Hz' },
          { label: 'وقت الاستجابة', value: '1ms' }
        ]
      },
      {
        category: 'الألوان',
        items: [
          { label: 'نطاق الألوان', value: '99% DCI-P3' },
          { label: 'سطوع الشاشة', value: '400 nits' },
          { label: 'التباين', value: '1000:1' }
        ]
      }
    ],
    stock: 18
  },
  {
    id: 'display-2',
    name: 'شاشة 27" 4K IPS',
    category: 'displays',
    categoryLabel: 'الشاشات',
    price: 1599,
    originalPrice: 2199,
    image: '/products/monitor-4k-curved.jpg',
    images: [
      { url: '/products/monitor-4k-curved.jpg', alt: 'الشاشة' }
    ],
    rating: 4.6,
    reviews: 145,
    description: 'شاشة 27 بوصة بدقة 4K مناسبة للتصميم والعمل المكتبي.',
    shortDescription: 'شاشة 27" 4K IPS للعمل الاحترافي',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المواصفات',
        items: [
          { label: 'الحجم', value: '27 بوصة' },
          { label: 'الدقة', value: '3840 × 2160 (4K)' },
          { label: 'معدل التحديث', value: '60Hz' },
          { label: 'نوع اللوحة', value: 'IPS' }
        ]
      }
    ],
    stock: 25
  },
  {
    id: 'display-3',
    name: 'شاشة 24" 1080p 144Hz Gaming',
    category: 'displays',
    categoryLabel: 'الشاشات',
    price: 899,
    originalPrice: 1299,
    image: '/products/monitor-4k-curved.jpg',
    images: [
      { url: '/products/monitor-4k-curved.jpg', alt: 'شاشة الألعاب' }
    ],
    rating: 4.8,
    reviews: 234,
    description: 'شاشة للألعاب بدقة 1080p ومعدل تحديث 144Hz مع استجابة سريعة.',
    shortDescription: 'شاشة ألعاب 24" 1080p 144Hz',
    warranty: 'ضمان سنة',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المواصفات',
        items: [
          { label: 'الحجم', value: '24 بوصة' },
          { label: 'الدقة', value: '1920 × 1080 (FHD)' },
          { label: 'معدل التحديث', value: '144Hz' },
          { label: 'وقت الاستجابة', value: '1ms' }
        ]
      }
    ],
    stock: 42,
    badge: 'للألعاب'
  },
  {
    id: 'display-4',
    name: 'شاشة 34" ألترا واسعة منحنية',
    category: 'displays',
    categoryLabel: 'الشاشات',
    price: 3499,
    originalPrice: 4499,
    image: '/products/monitor-4k-curved.jpg',
    images: [
      { url: '/products/monitor-4k-curved.jpg', alt: 'الشاشة الواسعة' }
    ],
    rating: 4.9,
    reviews: 89,
    description: 'شاشة الترا واسعة 34 بوصة بدقة 3440×1440 مثالية للمهام المتعددة.',
    shortDescription: 'شاشة الترا واسعة 34" محترفة',
    warranty: 'ضمان سنتين',
    shipping: 'توصيل مجاني فوق 200 ريال',
    returns: 'إرجاع مجاني لمدة 30 يوم',
    specifications: [
      {
        category: 'المواصفات',
        items: [
          { label: 'الحجم', value: '34 بوصة' },
          { label: 'الدقة', value: '3440 × 1440' },
          { label: 'معدل التحديث', value: '100Hz' },
          { label: 'نسبة العرض', value: '21:9 الترا واسعة' }
        ]
      }
    ],
    stock: 12
  }
];

// Complete Products List
export const allProducts = [
  ...smartphones,
  ...laptops,
  ...accessories,
  ...displays
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => product.category === category);
}

export function getFeaturedProducts(limit: number = 8): Product[] {
  return allProducts.slice(0, limit);
}

export function getDiscountedProducts(): Product[] {
  return allProducts.filter(product => product.originalPrice > product.price);
}
