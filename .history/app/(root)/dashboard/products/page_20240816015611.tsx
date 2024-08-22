"use client"
import ProductList from "@/components/ProductList"
import React, { useState } from "react"

const Page = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Netflix Shared",
      description: "",
      price: 25,
      imageUrl:
        "https://i.pinimg.com/originals/81/3c/d6/813cd6c3ba5b10c038198a993833c12e.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
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
    <div className='flex'>
      <ProductList
        products={products}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default Page
