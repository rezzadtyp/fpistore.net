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
    label: "Private",
    color: "#9121CA",
  },
  shared: {
    label: "Shared",
    color: "#d946ef",
  },
} satisfies ChartConfig

const Page = () => {
  return (
    <div className='flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center'>
      <div>Penjualan Bulanan</div>
      <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey='private' fill='var(--color-private)' radius={4} />
          <Bar dataKey='shared' fill='var(--color-shared)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default Page
