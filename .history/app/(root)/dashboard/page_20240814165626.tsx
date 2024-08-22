"use client"
import React from "react"
import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", private: 186, shared: 80 },
  { month: "February", private: 305, shared: 200 },
  { month: "March", private: 237, shared: 120 },
  { month: "April", private: 73, shared: 190 },
  { month: "May", private: 209, shared: 130 },
  { month: "June", private: 214, shared: 140 },
]
const chartConfig = {
  private: {
    label: "Desktop",
    color: "#2563eb",
  },
  shared: {
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
