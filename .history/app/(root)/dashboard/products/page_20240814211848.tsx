"use client"
import ProductList from "@/components/ProductList"
import React, { useState } from "react"

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
