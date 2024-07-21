"use client"

import { z } from "zod"

export const loginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Input the right email",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
})
