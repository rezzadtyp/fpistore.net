"use client"
import { MdOutlineSell } from "react-icons/md"
import { RxDashboard } from "react-icons/rx"
import Navbar from "@/components/shared/Navbar"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative '>
      <Navbar />
      <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-24 max-md:pb-14 sm:px-14'>
        <section className='custom-scrollbar bg-light-200 dark:bg-dark-500 light-border rounded-xl sticky h-fit left-0 top-0 flex w-fit flex-col justify-between overflow-y-auto p-6 shadow-black/20 shadow-xl dark:shadow-none lg:w-fit'>
          <div className='flex flex-1 flex-col max-sm:flex-row gap-6 '>
            {/* masih static */}
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className='dark:text-light-900 rounded-lg bg-primary/30 text-primary text-light-900 flex items-center justify-start gap-2 px-3 py-2 lg:p-4'
            >
              <RxDashboard className='text-2xl max-sm:text-lg' />
              <p className='max-sm:text-xs'>Dashboard</p>
            </button>
            <button
              onClick={() => (window.location.href = "/dashboard/products")}
              className='dark:text-light-900 rounded-lg bg-primary/30 text-primary text-light-900 flex items-center justify-start gap-2 p-4'
            >
              <MdOutlineSell className='text-2xl' />
              <p className='base-medium'>Products</p>
            </button>
          </div>
        </section>
        <div className='mx-auto w-full max-w-5xl'>{children}</div>
      </section>
    </main>
  )
}

export default Layout
