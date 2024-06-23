import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const encode = (text: any) => {
    return Buffer.from(text, "utf8").toString("base64")
}

export const decode = (base64: any) => {
    while (base64.length % 4 !== 0) {
        base64 += "="
    }
    return Buffer.from(base64, "base64").toString("utf8")
}

// utils/token.ts
import { v4 as uuidv4 } from "uuid"

const usernameToTokenMap = new Map<string, string>() // Map to store username to token mappings

export const generateTokenForUsername = (username: string): string => {
    const token = uuidv4() // Generate a UUID
    usernameToTokenMap.set(token, username)
    return token
}

export const getUsernameFromToken = (token: string): string | undefined => {
    return usernameToTokenMap.get(token)
}
