import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مرحباً بك في إلكترونيات برو - متجر الإلكترونيات الموثوق',
  description: 'متجر إلكترونيات عربي متخصص بأحدث الهواتف الذكية وأجهزة الحاسوب والملحقات والشاشات'
}

export default function DemoShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">متجر إلكترونيات برو</h1>
          <p className="text-2xl text-muted-foreground">متجر إلكترونيات عربي شامل بتقنيات حديثة</p>
          <p className="text-lg text-accent">Demo Store Complete & Ready to Use</p>
        </div>

        {/* Project Overview */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-bold">نظرة عامة على المشروع</h2>
          <p className="text-muted-foreground leading-relaxed">
            تم بناء متجر إلكترونيات عربي احترافي مع دعم كامل للغة العربية (RTL)، تصميم عصري، ونظام إدارة منتجات شامل. المتجر يتضمن جميع الميزات الأساسية لمتجر إلكترونيات حقيقي مع بيانات وهمية واقعية.
          </p>
        </div>

        {/* Pages Built */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">الصفحات والميزات المبنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Home Page */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-primary">🏠 الصفحة الرئيسية</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ شريط تنقل ثابت بشعار المتجر وعدد السلة</li>
                <li>✓ قسم بطل Hero مع صورة منتج وعروض مميزة</li>
                <li>✓ بنرات ترويجية ديناميكية بتخطيط غير متناظر</li>
                <li>✓ قسم الفئات بـ 4 أقسام رئيسية للمنتجات</li>
                <li>✓ عرض 8 منتجات مميزة مع تقييمات وأسعار</li>
                <li>✓ عرض الفئات المختلفة بمنتجاتها</li>
                <li>✓ تذييل شامل مع معلومات المتجر والروابط</li>
              </ul>
            </div>

            {/* Product Details */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-accent">📱 صفحة تفاصيل المنتج</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ معرض صور مع صور مصغرة للمنتج</li>
                <li>✓ معلومات المنتج الكاملة والسعر</li>
                <li>✓ قسم المواصفات التقنية المفصل</li>
                <li>✓ نظام التقييمات وآراء العملاء</li>
                <li>✓ منتقي الكمية وأزرار إضافة للسلة</li>
                <li>✓ عناصر الثقة (ضمان، شحن، إرجاع)</li>
                <li>✓ منتجات ذات صلة مقترحة</li>
              </ul>
            </div>

            {/* Products Catalog */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-secondary">🛍️ متجر المنتجات</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ عرض جميع المنتجات بشكل شبكي منظم</li>
                <li>✓ تصفية حسب الفئة (هواتف، لابتوبات، إكسسوارات، شاشات)</li>
                <li>✓ ترتيب حسب: الأحدث، السعر، التقييم</li>
                <li>✓ بطاقات منتجات مع صور وتقييمات وأسعار</li>
                <li>✓ عرض عدد المنتجات الكلي</li>
                <li>✓ تصميم متجاوب يعمل على جميع الأجهزة</li>
              </ul>
            </div>

            {/* Shopping Cart */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-primary">🛒 سلة التسوق</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ إضافة وإزالة المنتجات من السلة</li>
                <li>✓ تعديل الكميات في الوقت الفعلي</li>
                <li>✓ حساب الإجمالي والضريبة والشحن تلقائياً</li>
                <li>✓ نظام رموز ترويجية (SAVE20, TECH10)</li>
                <li>✓ عرض ملخص الطلب الكامل</li>
                <li>✓ حفظ السلة في localStorage</li>
                <li>✓ رابط مباشر للدفع (Checkout)</li>
              </ul>
            </div>

            {/* Checkout Flow */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-accent">💳 عملية الدفع</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ شاشة معلومات التوصيل</li>
                <li>✓ شاشة بيانات الدفع بالبطاقة</li>
                <li>✓ شاشة تأكيد الطلب النهائي</li>
                <li>✓ صفحة تأكيد الطلب الناجح</li>
                <li>✓ عرض رقم الطلب ورسالة الشكر</li>
                <li>✓ معلومات التوصيل المتوقع</li>
              </ul>
            </div>

            {/* Category Pages */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-secondary">📂 صفحات الفئات</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ صفحة منفصلة لكل فئة منتجات</li>
                <li>✓ عرض جميع منتجات الفئة المحددة</li>
                <li>✓ ترتيب وتصفية حسب السعر والتقييم</li>
                <li>✓ وصف الفئة وعدد المنتجات</li>
                <li>✓ تصميم متسق مع باقي المتجر</li>
                <li>✓ روابط سهلة من الصفحة الرئيسية</li>
              </ul>
            </div>

            {/* About Page */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold text-primary">ℹ️ صفحة عن المتجر</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ رسالة وعرض المتجر</li>
                <li>✓ أسباب اختيار المتجر مع الأيقونات</li>
                <li>✓ إحصائيات عن المتجر (عملاء، منتجات)</li>
                <li>✓ معلومات التواصل والبريد الإلكتروني</li>
                <li>✓ ساعات العمل والدعم الفني</li>
                <li>✓ تصميم احترافي وسهل الاستخدام</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Data */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">بيانات المنتجات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">20+</p>
              <p className="text-muted-foreground">منتج</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4</p>
              <p className="text-muted-foreground">فئات</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">100%</p>
              <p className="text-muted-foreground">بيانات وهمية واقعية</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">6</p>
              <p className="text-muted-foreground">صور منتجات</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">التقنيات المستخدمة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold">Frontend</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Next.js 16 (App Router)</li>
                <li>• React 19 مع TypeScript</li>
                <li>• Tailwind CSS v4 لتصميم فريد</li>
                <li>• Lucide Icons للأيقونات</li>
                <li>• Next/Image للصور المحسّنة</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold">RTL & العربية</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Noto Sans Arabic للخطوط</li>
                <li>• دعم كامل لـ RTL (Right-to-Left)</li>
                <li>• HTML lang="ar" dir="rtl"</li>
                <li>• تصميم مخصص للغات العربية</li>
                <li>• جميع النصوص بالعربية</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-bold">الميزات</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cart Context للحالة العامة</li>
                <li>• localStorage للحفظ</li>
                <li>• Dynamic Routes للمنتجات</li>
                <li>• Server Components للأداء</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Features */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold">ميزات التصميم</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">اللون والتصميم</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ نظام ألوان احترافي (أزرق داكن + سماوي وأحمر)</li>
                <li>✓ وضع مظلم (Dark Mode) متقدم</li>
                <li>✓ تدرجات دقيقة وظلال ناعمة</li>
                <li>✓ تأثيرات Hover متطورة</li>
                <li>✓ انتقالات سلسة ومحسّنة</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">الاستجابة والأداء</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ تصميم متجاوب كامل (Mobile-first)</li>
                <li>✓ أداء محسّن للهاتف والتابلت والسطح</li>
                <li>✓ صور محسّنة باستخدام Next/Image</li>
                <li>✓ تحميل سريع وتجربة سلسة</li>
                <li>✓ أيقونات مخصصة من Lucide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links to Pages */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold">رابط صفحات المتجر</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary transition-colors text-center font-semibold hover:text-primary">
              🏠 الصفحة الرئيسية
            </a>
            <a href="/products" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors text-center font-semibold hover:text-accent">
              🛍️ المتجر الكامل
            </a>
            <a href="/category/phones" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary transition-colors text-center font-semibold hover:text-primary">
              📱 الهواتف
            </a>
            <a href="/category/laptops" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors text-center font-semibold hover:text-accent">
              💻 اللابتوبات
            </a>
            <a href="/category/accessories" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary transition-colors text-center font-semibold hover:text-primary">
              🎧 الملحقات
            </a>
            <a href="/category/displays" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors text-center font-semibold hover:text-accent">
              🖥️ الشاشات
            </a>
            <a href="/cart-page" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-secondary transition-colors text-center font-semibold hover:text-secondary">
              🛒 السلة
            </a>
            <a href="/checkout" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary transition-colors text-center font-semibold hover:text-primary">
              💳 الدفع
            </a>
            <a href="/about" className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors text-center font-semibold hover:text-accent">
              ℹ️ عن المتجر
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 text-center space-y-4">
          <p className="text-muted-foreground">
            متجر إلكترونيات عربي احترافي مع دعم كامل للغة العربية والتصميم المتجاوب
          </p>
          <p className="text-sm text-muted-foreground">
            جميع البيانات بيانات وهمية لأغراض العرض والتطوير فقط
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2024 إلكترونيات برو - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  )
}
