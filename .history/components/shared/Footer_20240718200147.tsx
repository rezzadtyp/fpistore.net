import { contactsButton, menuFooter } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
    return (
        <footer className='flex justify-center items-center w-full px-10 lg:px-32 border-t-[1px] border-black/30 dark:border-white/30 bg-gray-100 dark:bg-dark-600 drop-shadow-md'>
            <div className='flex w-full justify-between items-center flex-col md:flex-row lg:flex-row gap-2 py-3'>
                <div className='flex flex-col lg:flex-row w-full h-full items-center justify-center lg:justify-between '>
                    <Link
                        href='/'
                        className='flex items-center h-full justify-start'
                    >
                        <Image
                            width={100}
                            height={100}
                            src='/icons/fpistore.netwhite.png'
                            alt='Footer Picture'
                            className='hidden dark:block duration-700 h-full'
                        />
                        <Image
                            width={100}
                            height={100}
                            src='/icons/fpistore.netblack.png'
                            alt='Footer Picture'
                            className='dark:hidden duration-700 h-full'
                        />
                    </Link>
                    <div className='gap-3 flex flex-col justify-center items-center text-center h-full'>
                        <div className='flex gap-5 justify-start'>
                            {menuFooter.map((cont) => (
                                <Link
                                    href={"#in-maintenance"}
                                    className='text-xs'
                                    key={cont.url}
                                    target='_blank'
                                >
                                    {cont.title}
                                </Link>
                            ))}
                        </div>
                        <p className='text-xs flex font-bold'>
                            <div className='flex font-fpifont items-end text-primary text-smh-full'>
                                fpi{" "}
                                <span className='font-fpifont text-dark-500 dark:text-light-300'>
                                    store.net
                                </span>
                            </div>
                            &copy; 2019-2024
                        </p>
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex gap-2 justify-end'>
                            {contactsButton.map((cont) => (
                                <Link
                                    href={cont.url}
                                    className='p-3 opacity-70 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md group'
                                    key={cont.url}
                                    target='_blank'
                                >
                                    {cont.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
