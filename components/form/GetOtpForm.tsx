"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { getOtpSchema } from "./schema/GetOtpSchema"
import useGetOTP from "@/hooks/hh/useGetOTP"
import he from "he"
import Link from "next/link"
import TableOtp from "../TableOtp"

const GetOtpForm = () => {
  const { getOtp, isLoading, data, error } = useGetOTP()

  const form = useForm<z.infer<typeof getOtpSchema>>({
    resolver: zodResolver(getOtpSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof getOtpSchema>) => {
    getOtp(values)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex gap-4 items-end'
        >
          <div className='space-y-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <Button type='submit' disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>

      {data ? <p>{data.emails[0].subject}</p> : <p>no data found</p>}

      {data ? <TableOtp emails={data?.emails} message={data?.message} /> : null}
    </div>
  )
}

export default GetOtpForm
