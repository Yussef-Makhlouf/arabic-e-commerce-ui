'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/hooks/use-toast'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function SignupPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { signup } = useAuth()
    const router = useRouter()
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await signup(name, email, password)
            toast({
                title: "تم إنشاء الحساب بنجاح",
                description: "أهلاً بك معنا!",
            })
            router.push('/')
        } catch (error: any) {
            toast({
                title: "خطأ في إنشاء الحساب",
                description: error.message,
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-lg border border-border shadow-lg">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                            إنشاء حساب جديد
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            لديك حساب بالفعل؟{' '}
                            <Link href="/login" className="font-medium text-accent hover:text-accent/80 transition-colors">
                                تسجيل الدخول
                            </Link>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4 rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium">
                                    الاسم الكامل
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="فلان الفلاني"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="text-sm font-medium">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="name@example.com"
                                    dir="ltr"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium">
                                    كلمة المرور
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="••••••••"
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative flex w-full justify-center rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                        جاري التحميل...
                                    </span>
                                ) : (
                                    'إنشاء الحساب'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}
