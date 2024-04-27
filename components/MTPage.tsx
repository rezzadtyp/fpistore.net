"use client"

import { motion } from "framer-motion"
import { LampContainer } from "@/components/lamp"
import Image from "next/image"

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
                <motion.h1
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
                </motion.h1>
            </LampContainer>
        </div>
    )
}

export default MTPage
