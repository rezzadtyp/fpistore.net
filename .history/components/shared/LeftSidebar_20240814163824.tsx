"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BsPersonPlus, BsPerson } from "react-icons/bs"
import { MdOutlineSell } from "react-icons/md"

const LeftSidebar = () => {
  return (
    <section className='custom-scrollbar py-6 bg-light-200 dark:bg-dark-600 light-border rounded-xl sticky h-fit left-0 top-0 flex w-fit flex-col justify-between  overflow-y-auto border-r p-3 shadow-black/20 shadow-xl dark:shadow-none max-sm:hidden lg:w-fit'>
      <div className='flex flex-1 flex-col gap-6 '>
        {/* masih static */}
        <button
          onClick={() => (window.location.href = "/dashboard/add-product")}
          className='text-dark-300 dark:text-light-900 rounded-lg bg-primary/30 text-light-900 flex items-center justify-start gap-4 p-4'
        >
          <MdOutlineSell className='text-2xl' />
          <p className={`base-medium max-lg:hidden`}>Add Product</p>
        </button>
      </div>
    </section>
  )
}

export default LeftSidebar
