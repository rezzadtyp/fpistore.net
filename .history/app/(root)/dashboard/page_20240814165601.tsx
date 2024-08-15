"use client"
import React from "react"
import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", Private: 186, Shared: 80 },
  { month: "February", Private: 305, Shared: 200 },
  { month: "March", Private: 237, Shared: 120 },
  { month: "April", Private: 73, Shared: 190 },
  { month: "May", Private: 209, Shared: 130 },
  { month: "June", Private: 214, Shared: 140 },
]
const chartConfig = {
  Private: {
    label: "Desktop",
    color: "#2563eb",
  },
  Shared: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const Page = () => {
  return (
    <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
      <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
          <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default Page
