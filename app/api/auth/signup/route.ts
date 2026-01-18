import { NextResponse } from 'next/server'
import { createUser } from '@/lib/user-service'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, password } = body

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'جميع الحقول مطلوبة' },
                { status: 400 }
            )
        }

        const user = await createUser(name, email, password)

            // Set session cookie
            ; (await cookies()).set('auth_session', user.id, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/',
            })

        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'حدث خطأ أثناء إنشاء الحساب' },
            { status: 400 }
        )
    }
}
