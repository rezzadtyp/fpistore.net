/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { fetchData } from "@/app/api/googleSheets"
import { unstable_noStore } from "next/cache"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { IoMdPerson } from "react-icons/io"
import { MdGroup } from "react-icons/md"
import { PiListMagnifyingGlassLight, PiStackDuotone } from "react-icons/pi"
import Image from "next/image"
import FPIButton from "@/components/shared/FPIButton"
import UsernameInput from "@/components/UsernameInput"
import DetailAccount from "@/components/DetailAccount"

const Page = async () => {
  unstable_noStore()
  const { Private, Shared, allData, allShopee, ShopeeShared, ShopeePrivate } =
    await fetchData()
  return (
    <div className=' justify-center items-center flex flex-col py-12 lg:flex-col-reverse'>
      <div className='flex gap-7 flex-col pt-5 justify-center items-center w-full'>
        <Dialog>
          <DialogTrigger asChild>
            <FPIButton className='gap-5 flex !px-5 !py-4 !rounded-2xl text-start w-fit'>
              <div className='rounded-md bg-primary/20 p-2'>
                <PiListMagnifyingGlassLight className='text-3xl text-primary' />
              </div>
              <span className='flex flex-col text-start'>
                Your Order Detail
                <p className='font-thin'>
                  Check your orders detail with Username
                </p>
              </span>
            </FPIButton>
          </DialogTrigger>
          <DialogContent className='flex flex-col justify-center items-start p-10 w-fit rounded-3xl duration-300 group border-2 border-white dark:border-dark-500 bg-light-100 dark:bg-dark-800'>
            <UsernameInput />
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center p-10 gap-24 w-full'>
        <div
          className={`flex flex-col justify-center items-center shadow-xl rounded-2xl pl-2 pr-1 py-1 text-dark-600 bg-light-200 dark:bg-dark-500 dark:text-white dark:border-none border-[1px] border-primary`}
        >
          <div className='flex justify-center py-4 gap-5 h-fit w-96'>
            <div className='flex gap-4 items-center justify-between w-fit'>
              <div className='flex items-center gap-2'>
                <span className='text-primary font-fpifont text-2xl '>fpi</span>
                <span className='text-primary text-xl font-roboto font-extrabold'>
                  {"///"}
                </span>{" "}
              </div>
              <div className='flex gap-2 items-center justify-between'>
                <div className='flex gap-2 bg-black/10 dark:bg-white/10 rounded-lg px-2 py-1'>
                  <div className='flex gap-1 font-roboto font-extrabold text-xs items-center justify-center'>
                    <MdGroup className='text-sm' />
                    SHARED
                  </div>
                  <div className='flex items-center text-xs gap-1'>
                    <PiStackDuotone className='text-sm' /> {Shared.length}
                  </div>
                </div>
                <div className='flex gap-2 bg-black/10 dark:bg-white/10 rounded-lg px-2 py-1'>
                  <div className='flex gap-1 font-roboto font-extrabold text-xs items-center justify-center'>
                    <IoMdPerson className='text-sm' />
                    PRIVATE
                  </div>

                  <div className='flex items-center text-xs gap-1'>
                    <PiStackDuotone className='text-sm' /> {Private.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-fit overflow-auto max-h-[600px] _custom-scrollbar gap-4 pb-4 px-4'>
            <DetailAccount dataAkun={allData} />
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center shadow-xl rounded-2xl pl-2 pr-1 py-1 text-shopees-600 bg-light-200 dark:bg-shopees-500 dark:text-white dark:border-none border-[1px] border-shopee`}
        >
          <div className='flex justify-center py-4 gap-5 h-fit w-96'>
            <div className='flex gap-4 items-center justify-between w-fit'>
              <div className='flex items-center gap-2'>
                <Image
                  width={25}
                  height={25}
                  src='icons/shopee.svg'
                  alt='Logo Shopee'
                />
                <span className='text-shopee text-xl font-roboto font-extrabold'>
                  {"///"}
                </span>{" "}
              </div>
              <div className='flex gap-2 items-center justify-between'>
                <div className='flex gap-2 bg-black/10 dark:bg-white/10 rounded-lg px-2 py-1'>
                  <div className='flex gap-1 font-roboto font-extrabold text-xs items-center justify-center'>
                    <MdGroup className='text-sm' />
                    SHARED
                  </div>
                  <div className='flex items-center text-xs gap-1'>
                    <PiStackDuotone className='text-sm' /> {ShopeeShared.length}
                  </div>
                </div>
                <div className='flex gap-2 bg-black/10 dark:bg-white/10 rounded-lg px-2 py-1'>
                  <div className='flex gap-1 font-roboto font-extrabold text-xs items-center justify-center'>
                    <IoMdPerson className='text-sm' />
                    PRIVATE
                  </div>
                  <div className='flex items-center text-xs gap-1'>
                    <PiStackDuotone className='text-sm' />{" "}
                    {ShopeePrivate.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-fit overflow-auto max-h-[600px] _custom-scrollbar-shopee gap-4 pb-4 px-4'>
            <DetailAccount dataAkun={allShopee} />
          </div>
        </div>
      </div>{" "}
    </div>
  )
}

export default Page
