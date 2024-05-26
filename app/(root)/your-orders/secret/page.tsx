"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { Roboto } from "next/font/google"
import { BsShieldLock } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
    const [Accounts, setAccounts] = useState("")
    const currentPathname = usePathname()
    const handleClick = () => {
        if (Accounts.length < 10) {
            alert("Input your Username (10 Characters)!")
            return
        } else if (Accounts.length < 10) {
            alert("Input your Username (10 Characters)!")
            return
        }

        const targetPathname = `/your-orders/${Accounts}`

        // Only navigate if the target pathname is different
        if (targetPathname !== currentPathname) {
            window.location.href = targetPathname
        }
    }

    return (
        <main className='flex justify-center items-center w-full h-screen -mt-24'>
            <div className='flex flex-col justify-center items-center p-10 w-fit rounded-3xl duration-300 group border-2 border-white dark:border-dark-400 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% shadow-md hover:shadow-xl'>
                <div className='p-5 flex gap-2 items-center justify-center'>
                    <BsShieldLock className='text-5xl' />
                    <div>
                        <p className='font-conthrax'>Username</p>
                        <p className='font-extralight text-xs'>10 Characters</p>
                    </div>
                </div>
                <div className='flex gap-1 px-3 items-center w-full focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-white drop-shadow-md border-white/30 border rounded-lg'>
                    <MdAlternateEmail className='text-2xl ml-1' />
                    <input
                        type='text'
                        placeholder='Enter your Username'
                        value={Accounts}
                        onChange={(e) => setAccounts(e.target.value)}
                        className='focus:outline-none h-full focus:border w-full md:w-96 lg:w-96 -fuchsia-500 bg-transparent p-3 rounded-lg border-none'
                    />
                </div>

                <button
                    onClick={handleClick}
                    className='relative my-5 inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group'
                >
                    <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8b4fe_0%,#9121CA_50%,#d8b4fe_100%)]' />
                    <span className='inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-full dark:bg-dark-700 bg-gray-100 px-3 py-1 text-sm font-medium group-hover:text-gray-300 dark:text-white backdrop-blur-3xl'>
                        <span>Your Order Detail</span>
                    </span>
                </button>
                <p className='w-full text-center text-red-500 text-xs capitalize'>
                    Jangan Menyebarkan Username mu!,
                    <br />
                    Jika Menyebarkan Username sama dengan menyebarkan
                    <br />
                    semua akses pada akun netflix yang telah kamu beli
                </p>
            </div>
        </main>
    )
}

export default MyComponent
