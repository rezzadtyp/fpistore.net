import Image from "next/image"
import React from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { GoTrash } from "react-icons/go"
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
import { Textarea } from "./ui/textarea"

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
    <div className='bg-white dark:bg-dark-400 shadow-md w-fit rounded-xl p-4 relative'>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className='lg:h-96 rounded-lg'
      />
      <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
      <p className='text-gray-600 mt-2'>{product.description}</p>
      <p className='text-primary font-bold mt-2'>${product.price.toFixed(2)}</p>

      <div className='absolute flex top-2 right-2 bg-light-50 gap-3 p-2 rounded-lg bg-white dark:bg-dark-400'>
        <button>
          <IoSettingsOutline className='text-black dark:text-white' />
        </button>
        <button>
          <GoTrash className='text-red-500' />
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <FiEdit2 className='text-primary' />
            </button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px] bg-white dark:bg-dark-700 border-primary rounded-xl'>
            <DialogHeader className='py-5 border-b-[1px] dark:border-white/30 border-black/30'>
              <DialogTitle className='flex gap-3'>
                <FiEdit2 className='text-primary' />
                Edit Product
              </DialogTitle>
            </DialogHeader>
            <div className='grid gap-4 py-4 justify-start'>
              <div className='grid grid-cols-4 items-start gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Name
                </Label>
                <Input
                  id='name'
                  defaultValue={product.name}
                  className='col-span-3 dark:bg-dark-700 border-light-300'
                />
              </div>
              <div className='grid grid-cols-4 items-start gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Description
                </Label>
                <Textarea
                  id='description'
                  defaultValue={product.description}
                  className='col-span-3 dark:bg-dark-700 border-light-300'
                />
              </div>
              <div className='grid grid-cols-4 items-start gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Price
                </Label>
                <Input
                  id='price'
                  defaultValue={product.price}
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
    </div>
  )
}

export default ProductCard
