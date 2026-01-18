import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const DATA_DIR = path.join(process.cwd(), 'data')
const USERS_FILE = path.join(DATA_DIR, 'users.json')

export interface User {
    id: string
    name: string
    email: string
    passwordHash: string // In a real app never expose this, here we use it interally
    createdAt: string
    avatar?: string
}

export type UserProfile = Omit<User, 'passwordHash'>

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
}

// Ensure users file exists
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, '[]', 'utf-8')
}

export async function getUsers(): Promise<User[]> {
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

async function saveUsers(users: User[]) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8')
}

// Simple hashing (pbkdf2 would be better for real prod, but this is sufficient for a demo/student project)
function hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex')
}

export async function createUser(name: string, email: string, password: string): Promise<UserProfile> {
    const users = await getUsers()

    if (users.find(u => u.email === email)) {
        throw new Error('User already exists')
    }

    const newUser: User = {
        id: crypto.randomUUID(),
        name,
        email,
        passwordHash: hashPassword(password),
        createdAt: new Date().toISOString(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}` // Auto generate avatar
    }

    users.push(newUser)
    await saveUsers(users)

    const { passwordHash, ...profile } = newUser
    return profile
}

export async function validateUser(email: string, password: string): Promise<UserProfile | null> {
    const users = await getUsers()
    const user = users.find(u => u.email === email)

    if (!user) return null

    const hashed = hashPassword(password)
    if (user.passwordHash === hashed) {
        const { passwordHash, ...profile } = user
        return profile
    }

    return null
}

export async function getUserById(id: string): Promise<UserProfile | null> {
    const users = await getUsers()
    const user = users.find(u => u.id === id)

    if (!user) return null

    const { passwordHash, ...profile } = user
    return profile
}
