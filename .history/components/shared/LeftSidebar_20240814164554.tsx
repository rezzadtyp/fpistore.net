"use client"

import { MdOutlineSell } from "react-icons/md"
import { RxDashboard } from "react-icons/rx"

const LeftSidebar = () => {
  return (
    <section className='custom-scrollbar py-6 bg-light-200 dark:bg-dark-500 light-border rounded-xl sticky h-fit left-0 top-0 flex w-fit flex-col justify-between overflow-y-auto p-3 shadow-black/20 shadow-xl dark:shadow-none max-sm:hidden lg:w-fit'>
      <div className='flex flex-1 flex-col gap-6 '>
        {/* masih static */}
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className='dark:text-light-900 rounded-lg bg-primary/30 text-primary text-light-900 flex items-center justify-start gap-2 p-4'
        >
          <RxDashboard className='text-2xl' />
          <p className={`base-medium max-lg:hidden`}>Dashboard</p>
        </button>
        <button
          onClick={() => (window.location.href = "/dashboard/products")}
          className='dark:text-light-900 rounded-lg bg-primary/30 text-primary text-light-900 flex items-center justify-start gap-2 p-4'
        >
          <MdOutlineSell className='text-2xl' />
          <p className={`base-medium max-lg:hidden`}>Products</p>
        </button>
      </div>
    </section>
  )
}

export default LeftSidebar
