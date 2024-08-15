// components/ProductList.tsx
import React from "react"
import ProductCard from "./ProductCard"

interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

interface ProductListProps {
  products: Product[]
  onEdit: (id: number) => void
  onRemove: (id: number) => void
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onEdit,
  onRemove,
}) => {
  return (
    <div className=' p-5 overflow-scroll max-h-[750px]'>
      <div className='grid grid-cols-1 gap-10'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
