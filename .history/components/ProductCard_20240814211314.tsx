// components/ProductCard.tsx
import Image from "next/image"
import React from "react"

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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onRemove,
}) => {
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
        <select
          onChange={(e) => {
            if (e.target.value === "edit") {
              onEdit(product.id)
            } else if (e.target.value === "remove") {
              onRemove(product.id)
            }
            e.target.value = "" // Reset the select after an action
          }}
          className='bg-gray-100 border border-gray-300 rounded-md p-1'
        >
          <option value='' hidden>
            ...
          </option>
          <option value='edit'>Edit</option>
          <option value='remove'>Remove</option>
        </select>
      </div>
    </div>
  )
}

export default ProductCard
