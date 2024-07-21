"use client"

import { z } from "zod"

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  email: z.string({
    required_error: "email is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
})
