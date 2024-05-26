import { contactsButton } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
    return (
        <footer className='flex justify-center items-center w-full px-10 lg:px-32 py-5 border-t-[1px] border-black/30 dark:border-white/30 bg-gray-100 dark:bg-dark-600 drop-shadow-md'>
            <div className='flex w-full justify-center items-center flex-col md:flex-row lg:flex-row gap-2'>
                <Link href='/' className='flex items-center  justify-start '>
                    <Image
                        width={60}
                        height={60}
                        src='/icons/fpistore.netwhite.png'
                        alt='Footer Picture'
                        className='hidden dark:block duration-700'
                    />
                    <Image
                        width={60}
                        height={60}
                        src='/icons/fpistore.netblack.png'
                        alt='Footer Picture'
                        className='dark:hidden duration-700'
                    />
                    {/* <span className='px-2'>
                        <p className='text-xs font-conthrax'>FPI Store</p>
                        <p className='text-xs font-extralight'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, excepturi.
                        </p>
                        <p className='text-xs font-conthrax'>
                            &copy; 2019-2024
                        </p>
                    </span> */}
                </Link>
                {/* <div className='flex gap-2 justify-start'>
                    {contactsButton.map((cont) => (
                        <Link
                            href={cont.url}
                            className='p-3 opacity-70 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md'
                            key={cont.url}
                            target='_blank'
                        >
                            {cont.icon}
                        </Link>
                    ))}
                </div> */}
            </div>
        </footer>
    )
}

export default Footer
