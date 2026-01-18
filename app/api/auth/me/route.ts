import { NextResponse } from 'next/server'
import { getUserById } from '@/lib/user-service'
import { cookies } from 'next/headers'

export async function GET() {
    try {
        const sessionId = (await cookies()).get('auth_session')?.value

        if (!sessionId) {
            return NextResponse.json(null)
        }

        const user = await getUserById(sessionId)
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(null)
    }
}
