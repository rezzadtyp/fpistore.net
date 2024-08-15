"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BsPersonPlus, BsPerson } from "react-icons/bs"
import { MdOutlineSell } from "react-icons/md"

const LeftSidebar = () => {
  return (
    <section className='custom-scrollbar bg-primary light-border sticky h-fit left-0 top-0 flex w-fit flex-col justify-between  overflow-y-auto border-r p-3  shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
      <div className='flex flex-1 flex-col gap-6'>
        <button className='text-dark-300 dark:text-light-900 rounded-lg text-light-900 flex items-center justify-start gap-4 bg-transparent p-4'>
          <MdOutlineSell />
          <p className={`base-medium max-lg:hidden`}>Add Product</p>
        </button>
      </div>
      <div className=' flex flex-col gap-3'>
        <div>
          <Link href='/sign-in'>
            <Button className='small-medium btn-secondary min-h-[41px] w-full gap-3 rounded-lg px-4 py-3 shadow-none'>
              <BsPerson className='text-dark400_light900 text-2xl lg:hidden' />
              <span className='primary-text-gradient max-lg:hidden'>
                Sign In
              </span>
            </Button>
          </Link>
        </div>
        <div>
          <Link href='/sign-up'>
            <Button className='small-medium light-border-2 btn-tertiary  min-h-[41px] w-full gap-3 rounded-lg px-4 py-3 shadow-none'>
              <BsPersonPlus className='text-dark400_light900 text-2xl lg:hidden' />
              <span className='text-dark400_light900 max-lg:hidden'>
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LeftSidebar
