import Image from "next/image"
import React from "react"
import { IoMdPerson } from "react-icons/io"
import { MdGroup } from "react-icons/md"

const AccountType: React.FC<{
    type: string
}> = async ({ type }) => {
    return (
        (type === "PRIVATE" && (
            <div className='flex gap-1 py-0 px-2 items-center justify-center border-private border rounded-md'>
                <span className='text-private font-fpifont text-2xl'>fpi</span>
                <span className='text-md font-roboto font-extrabold'>
                    {type}
                </span>
            </div>
        )) ||
        (type === "SHARED" && (
            <div className='flex gap-1 py-1 px-2 items-center justify-center border-shared border rounded-md'>
                <span className='text-shared font-fpifont text-2xl'>fpi</span>
                <div className='flex gap-1 font-roboto font-extrabold items-center justify-center'>
                    <span className='text-shared'>{"//"}</span>
                    <MdGroup className='text-md' />
                    SHARED
                </div>
            </div>
        )) ||
        (type === "shopeePRIVATE" && (
            <div className='flex gap-1 py-1 px-2 items-center justify-center border-[#ee4d2d] border rounded-md'>
                <Image
                    width={25}
                    height={25}
                    src='icons/shopee.svg'
                    alt='Logo Shopee'
                />
                <div className='flex gap-1 font-roboto font-extrabold items-center justify-center'>
                    <span className='text-[#ee4d2d]'>{"//"}</span>
                    <IoMdPerson className='text-md' />
                    PRIVATE
                </div>
            </div>
        )) ||
        (type === "shopeeSHARED" && (
            <div className='flex gap-1 py-1 px-2 items-center justify-center border-[#ee4d2d] border rounded-md'>
                <Image
                    width={25}
                    height={25}
                    src='icons/shopee.svg'
                    alt='Logo Shopee'
                />
                <div className='flex gap-1 font-roboto font-extrabold items-center justify-center'>
                    <span className='text-[#ee4d2d]'>{"//"}</span>{" "}
                    <MdGroup className='text-md' />
                    SHARED
                </div>
            </div>
        ))
    )
}

export default AccountType
