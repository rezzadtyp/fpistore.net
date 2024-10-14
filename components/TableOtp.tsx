"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { format } from "date-fns"

interface mail {
  subject: string
  date: string
  link: string
}

interface payload {
  message: string
  emails: mail[]
}

const TableOtp = (payload: payload) => {
  const router = useRouter()
  return (
    <Table>
      <TableCaption>A list of your OTP email.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Subject</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payload.emails.map((data, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{data.subject}</TableCell>
            <TableCell>{format(data.date, "yyyy-MM-dd HH:mm:ss")}</TableCell>
            <TableCell>
              <Button onClick={() => router.push(`${data.link}`)}>
                Get OTP
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableOtp
