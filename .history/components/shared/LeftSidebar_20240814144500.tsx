"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

import { BsPersonPlus, BsPerson } from "react-icons/bs"

const LeftSidebar = () => {
  const pathname = usePathname()
  return (
    <section className='custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
      <div className='flex flex-1 flex-col gap-6'>
        <Link
          className={`          text-dark-300 dark:text-light-900 rounded-lg text-light-900 flex items-center justify-start gap-4 bg-transparent p-4`}
        >
          <Image
            className={`${isActivate ? "" : "invert-colors"}`}
            src={item.imgURL}
            alt={item.label}
            width={20}
            height={20}
          />
          <p
            className={`${
              isActivate ? "base-bold" : "base-medium"
            } max-lg:hidden`}
          >
            {item.label}
          </p>
        </Link>
      </div>
      <SignedOut>
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
      </SignedOut>
    </section>
  )
}

export default LeftSidebar
