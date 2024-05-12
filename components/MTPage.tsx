"use client"

import { motion } from "framer-motion"
import { LampContainer } from "@/components/lamp"
import Image from "next/image"
import { IoInformationCircleOutline } from "react-icons/io5"
import Link from "next/link"

const MTPage = () => {
    return (
        <div className='absolute z-[999] w-screen h-screen top-0 left-0'>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className='mt-8 lg:gap-5 flex flex-col lg:flex-row items-center'
                >
                    <Image
                        src='/images/fpistore.net.png'
                        alt='fpi'
                        width={200}
                        height={200}
                        className='hidden lg:block'
                    />
                    <Image
                        src='/images/fpistore.net.png'
                        alt='fpi'
                        width={100}
                        height={100}
                        className='lg:hidden '
                    />
                    <span className='bg-gradient-to-br text-center from-purple-200 to-primary py-4 bg-clip-text lg:text-start text-4xl font-medium text-transparent md:text-7xl'>
                        Website is <br /> Under Maintenance
                    </span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.6,
                        duration: 1.6,
                        ease: "easeInOut",
                    }}
                    className='lg:gap-5 flex flex-col lg:flex-row items-center'
                >
                    <span className='bg-gradient-to-br text-center from-gray-400 to-gray-700 bg-clip-text lg:text-start font-medium text-transparent'>
                        Be patient, Something big will come soon...
                    </span>
                </motion.h2>
            </LampContainer>

            {/* <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1,
                    duration: 2,
                    ease: "easeInOut",
                }}
                className='h-full fixed bottom-1 pb-4 flex flex-col justify-end items-center gap-3 w-full animate-pulse'
            >
                <span className='text-white'>
                    Only available for check Detail Order
                </span>
                <Link
                    href='/your-orders'
                    className='relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                >
                    <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8b4fe_0%,#9121CA_50%,#d8b4fe_100%)]' />
                    <span className='inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                        <span>Your Order Detail</span>
                        <IoInformationCircleOutline className='text-xl' />
                    </span>
                </Link>
            </motion.div> */}
        </div>
    )
}

export default MTPage
