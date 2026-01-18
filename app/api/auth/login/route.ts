import { NextResponse } from 'next/server'
import { validateUser } from '@/lib/user-service'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json(
                { error: 'البريد الإلكتروني وكلمة المرور مطلوبان' },
                { status: 400 }
            )
        }

        const user = await validateUser(email, password)

        if (!user) {
            return NextResponse.json(
                { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
                { status: 401 }
            )
        }

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
            { error: 'حدث خطأ غير متوقع' },
            { status: 500 }
        )
    }
}
