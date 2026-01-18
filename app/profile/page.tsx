'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { LogOut, User, Package, Settings, CreditCard } from 'lucide-react'
import Image from 'next/image'

export default function ProfilePage() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
        }
    }, [user, loading, router])

    if (loading || !user) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">الملف الشخصي</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4">
                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-accent">
                                <Image
                                    src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">{user.name}</h2>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <nav className="flex flex-col">
                                <button className="flex items-center gap-3 px-6 py-4 bg-accent/10 border-r-4 border-accent text-accent font-medium transition-colors">
                                    <User size={20} />
                                    معلوماتي
                                </button>
                                <button className="flex items-center gap-3 px-6 py-4 hover:bg-muted transition-colors text-muted-foreground">
                                    <Package size={20} />
                                    طلباتي
                                </button>
                                <button className="flex items-center gap-3 px-6 py-4 hover:bg-muted transition-colors text-muted-foreground">
                                    <CreditCard size={20} />
                                    تاريخ الدفعات
                                </button>
                                <button className="flex items-center gap-3 px-6 py-4 hover:bg-muted transition-colors text-muted-foreground">
                                    <Settings size={20} />
                                    الإعدادات
                                </button>
                                <div className="h-px bg-border my-2 mx-4" />
                                <button
                                    onClick={() => logout()}
                                    className="flex items-center gap-3 px-6 py-4 hover:bg-destructive/10 text-destructive transition-colors w-full text-right"
                                >
                                    <LogOut size={20} />
                                    تسجيل الخروج
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <User className="text-accent" />
                                المعلومات الشخصية
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">الاسم الكامل</label>
                                    <p className="font-medium p-3 bg-muted rounded-md">{user.name}</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">البريد الإلكتروني</label>
                                    <p className="font-medium p-3 bg-muted rounded-md font-mono text-sm">{user.email}</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">تاريخ الانضمام</label>
                                    <p className="font-medium p-3 bg-muted rounded-md">
                                        {new Date(user.createdAt).toLocaleDateString('ar-SA', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">رقم العضوية</label>
                                    <p className="font-medium p-3 bg-muted rounded-md font-mono text-sm text-muted-foreground line-clamp-1">
                                        {user.id}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Package className="text-accent" />
                                آخر الطلبات
                            </h3>

                            <div className="text-center py-12 text-muted-foreground bg-muted/50 rounded-lg border border-dashed border-border">
                                <Package className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                                <p>لا توجد طلبات سابقة</p>
                                <button onClick={() => router.push('/products')} className="mt-4 text-accent hover:underline">
                                    تصفح المنتجات وابدأ التسوق
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
