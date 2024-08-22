"use client"
import React, { useState } from "react"
import { Bar, BarChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import ProductList from "@/components/ProductList"

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
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1 description",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is product 2 description",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add more products as needed
  ])

  const handleEdit = (id: number) => {
    console.log("Edit product with ID:", id)
    // Implement edit functionality here
  }

  const handleRemove = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className='flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center'>
      <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey='private' fill='var(--color-private)' radius={4} />
          <Bar dataKey='shared' fill='var(--color-shared)' radius={4} />
        </BarChart>
      </ChartContainer>

      <div>
        <ProductList
          products={products}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}

export default Page
