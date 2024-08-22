"use client"
import React from "react"
import { Bar, BarChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

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
      <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
        <BarChart
          accessibilityLayer
          data={chartData}
          className='bg-light-100 p-4 rounded-xl shadow-xl'
        >
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent className='bg-light-300 text-dark-700 dark:bg-dark-200 dark:text-light-200' />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey='private'
            fill='var(--color-private)'
            radius={4}
            className='bg-red-500'
          />
          <Bar dataKey='shared' fill='var(--color-shared)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default Page
