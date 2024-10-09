"use client"

import { z } from "zod"

export const getOtpSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Input the right email",
  }),
})
