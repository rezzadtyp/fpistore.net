"use client"
import ProductCard from "@/components/ProductCard"
import React, { useState } from "react"
import { IoAddCircleOutline } from "react-icons/io5"

const Page = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Netflix Shared",
      description: "Akses ke 1 Profile",
      price: 25,
      imageUrl:
        "https://i.pinimg.com/originals/81/3c/d6/813cd6c3ba5b10c038198a993833c12e.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
    {
      id: 2,
      name: "Netflix Private",
      description: "Akses ke seluruh akun (5 Profile)",
      price: 105,
      imageUrl:
        "https://i.pinimg.com/originals/86/f7/f0/86f7f0bd9bb5855d8b1702c3db9ca164.jpg",
    },
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
      <div className=' p-5 overflow-scroll max-h-[800px]'>
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className='dark:text-light-900 rounded-lg bg-primary/20 text-primary text-light-900 flex items-center justify-start gap-2 px-3 py-2 lg:p-4'
        >
          <IoAddCircleOutline className='text-2xl max-sm:text-lg' />
          <p className='max-sm:text-xs'>Dashboard</p>
        </button>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
