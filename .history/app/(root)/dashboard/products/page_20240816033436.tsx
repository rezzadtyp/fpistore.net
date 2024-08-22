"use client"
import ProductCard from "@/components/ProductCard"
import React, { useState } from "react"
import { IoAddCircleOutline } from "react-icons/io5"
import { FiEdit2 } from "react-icons/fi"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
        <div className='w-full flex justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <button className='dark:text-light-900 rounded-lg bg-primary/20 text-primary text-light-900 flex items-center justify-start gap-2 px-3 py-2 lg:p-4 mb-5'>
                <IoAddCircleOutline className='text-2xl max-sm:text-lg' />
                <p className='max-sm:text-xs'>Product</p>
              </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] bg-white dark:bg-dark-700 border-primary rounded-xl'>
              <DialogHeader className='py-5 border-b-[1px] dark:border-white/30 border-black/30'>
                <DialogTitle className='flex gap-3 items-center'>
                  <IoAddCircleOutline className='text-2xl max-sm:text-lg text-primary' />
                  Add Product
                </DialogTitle>
              </DialogHeader>
              <div className='grid gap-4 py-4 justify-start'>
                <div className='grid grid-cols-4 items-start gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    defaultValue='Name'
                    className='col-span-3 dark:bg-dark-700 border-light-300'
                  />
                </div>
                <div className='grid grid-cols-4 items-start gap-4'>
                  <Label htmlFor='username' className='text-right'>
                    Description
                  </Label>
                  <Textarea
                    id='description'
                    defaultValue='Description'
                    className='col-span-3 dark:bg-dark-700 border-light-300'
                  />
                </div>
                <div className='grid grid-cols-4 items-start gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Price
                  </Label>
                  <Input
                    id='price'
                    defaultValue='Price'
                    className='col-span-3 dark:bg-dark-700 border-light-300'
                  />
                </div>
                <div className='grid grid-cols-4 items-start gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Picture
                  </Label>
                  <Input
                    id='picture'
                    type='file'
                    className='col-span-3 bg-gray-300 text-white'
                  />
                </div>
              </div>
              <DialogFooter>
                <button
                  type='submit'
                  className='text-light-200 font-bold bg-primary py-2 px-3 rounded-lg'
                >
                  Save changes
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

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
