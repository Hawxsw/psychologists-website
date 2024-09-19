import { db } from "../db"
import { psychologists } from "../db/schema"
import { eq } from 'drizzle-orm/expressions';
import bcrypt from "../utils/bcrypt";
import jwt from "../utils/jwt";


export const login = async (username: string, password: string) => {
    const [user] = await db.select().from(psychologists).where(eq(psychologists.username, username)).limit(1);

    if (!user) {
        throw new Error ('User not found')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new Error('Invalid credentials')
    }
    const token = jwt.generateToken ({id: user.id, permission: user.permissions})
    return token
}

export const register = async (name: string, username: string, password: string, permissions: string) => {
    const hashedPassword = await bcrypt.hash(password)
    await db.insert(psychologists).values({
        name,
        username,
        password: hashedPassword,
        permissions,
    })   
}