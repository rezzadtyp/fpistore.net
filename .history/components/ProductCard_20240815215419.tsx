import Image from "next/image"
import React from "react"
import { IoSettingsOutline } from "react-icons/io5"

interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

interface ProductCardProps {
  product: Product
  onEdit: (id: number) => void
  onRemove: (id: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 relative'>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className='h-40 w-full object-cover rounded-md'
      />
      <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
      <p className='text-gray-600 mt-2'>{product.description}</p>
      <p className='text-indigo-600 font-bold mt-2'>
        ${product.price.toFixed(2)}
      </p>

      <div className='absolute top-2 right-2'>
        <IoSettingsOutline className='text-primary' />
      </div>
    </div>
  )
}

export default ProductCard
