'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserProfile } from './user-service'

interface AuthContextType {
    user: UserProfile | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    signup: (name: string, email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: async () => { },
    signup: async () => { },
    logout: async () => { },
})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        checkSession()
    }, [])

    async function checkSession() {
        try {
            const res = await fetch('/api/auth/me')
            if (res.ok) {
                const userData = await res.json()
                setUser(userData)
            } else {
                setUser(null)
            }
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string) {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.error || 'فشل تسجيل الدخول')
        }

        const userData = await res.json()
        setUser(userData)
        router.refresh()
    }

    async function signup(name: string, email: string, password: string) {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.error || 'فشل إنشاء الحساب')
        }

        const userData = await res.json()
        setUser(userData)
        router.refresh()
    }

    async function logout() {
        await fetch('/api/auth/logout', { method: 'POST' })
        setUser(null)
        router.push('/')
        router.refresh()
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
