"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BsPersonPlus, BsPerson } from "react-icons/bs"
import { MdOutlineSell } from "react-icons/md"

const LeftSidebar = () => {
  return (
    <section className='custom-scrollbar py-6 bg-light-200 dark:bg-dark-600 light-border rounded-xl sticky h-fit left-0 top-0 flex w-fit flex-col justify-between  overflow-y-auto border-r p-3 shadow-black/20 shadow-xl dark:shadow-none max-sm:hidden lg:w-[266px]'>
      <div className='flex flex-1 flex-col gap-6 '>
        {/* masih static */}
        <button
          onClick={() => (window.location.href = "/dashboard/add-product")}
          className='text-dark-300 dark:text-light-900 rounded-lg bg-primary/30 text-light-900 flex items-center justify-start gap-4 p-4'
        >
          <MdOutlineSell />
          <p className={`base-medium max-lg:hidden`}>Add Product</p>
        </button>
      </div>
      <div className=' flex flex-col gap-3 border-t-[2px] border-black/15 mt-6 pt-6'>
        <div>
          <Link href='/login'>
            <Button className='small-medium btn-secondary min-h-[41px] w-full gap-3 rounded-lg px-4 py-3 shadow-none'>
              <BsPerson className='text-dark400_light900 text-2xl lg:hidden' />
              <span className='primary-text-gradient max-lg:hidden'>login</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link href='/register'>
            <Button className='small-medium light-border-2 btn-tertiary  min-h-[41px] w-full gap-3 rounded-lg px-4 py-3 shadow-none'>
              <BsPersonPlus className='text-dark400_light900 text-2xl lg:hidden' />
              <span className='text-dark400_light900 max-lg:hidden'>
                register
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LeftSidebar
