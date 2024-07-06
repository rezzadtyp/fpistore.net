"use client"

import React from "react"
import Image from "next/image"
import FPIButton from "@/components/shared/FPIButton"

const HeroSection = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between w-full h-[650px] rounded-2xl bg-light-200 dark:bg-dark-500 overflow-hidden p-10 shadow-lg max-w-[1800px] border-[1px] border-primary dark:border-none'>
            <div className='flex items-end'>
                <div className='flex flex-col lg:max-w-[700px] h-fit gap-5'>
                    <div className='flex flex-col'>
                        <span className='font-mono text-xs tracking-widest'>
                            Indonesian Biggest Netflix Seller
                        </span>
                        <div className='flex font-fpifont items-end text-primary text-5xl md:text-6xl lg:text-7xl h-full'>
                            fpi{" "}
                            <span className='font-fpifont text-dark-500 dark:text-light-300'>
                                store.net
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-2'>
                        <span className='font-roboto opacity-65'>
                            Supplier Netflix Premium terbesar yang memasarkan
                            ribuan akun dengan layanan berkualitas, harga
                            terjangkau, dan pengalaman streaming terbaik.
                        </span>
                        <FPIButton
                            className='flex !px-3 !py-2 !border-none !bg-primary text-white w-fit'
                            onClick={() => {
                                window.location.href = "/anjay"
                            }}
                        >
                            <span className='flex flex-col text-start'>
                                Beli Sekarang
                            </span>
                        </FPIButton>
                    </div>
                </div>
            </div>
            <div className='flex items-end md:items-start h-full md:-mr-36 lg:-mt-52 -mt-72 -mr-20'>
                <Image
                    src={"/images/globe.png"}
                    alt='globe'
                    width={800}
                    height={800}
                    className=''
                />
            </div>
        </div>
    )
}

export default HeroSection
