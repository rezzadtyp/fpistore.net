"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { MdAlternateEmail } from "react-icons/md"
import FPIButton from "./shared/FPIButton"

interface UsernameInput {}

const UsernameInput: React.FC<UsernameInput> = () => {
    const [Accounts, setAccounts] = useState("")
    const currentPathname = usePathname()
    const handleClick = () => {
        if (Accounts.length < 5) {
            alert("Input your Username (5 Characters)!")
            return
        } else if (Accounts.length < 5) {
            alert("Input your Username (5 Characters)!")
            return
        }
        const targetPathname = `/your-orders/${Accounts}`

        if (targetPathname !== currentPathname) {
            window.location.href = targetPathname
        }
    }

    return (
        <>
            <div className='flex gap-1 px-3 items-center w-full focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-800 bg-white drop-shadow-md border-white/30 border rounded-lg'>
                <MdAlternateEmail className='text-2xl ml-1' />
                <input
                    type='text'
                    placeholder='Enter your Username'
                    value={Accounts}
                    onChange={(e) => setAccounts(e.target.value)}
                    className='focus:outline-none h-full focus:border w-full md:w-96 lg:w-96 -fuchsia-500 bg-transparent p-3 rounded-lg border-none text-xs md:text-base'
                />
            </div>
            <FPIButton
                className='flex !rounded-lg text-start w-fit'
                onClick={handleClick}
            >
                Your Order Detail
            </FPIButton>
            <p className='w-full text-start opacity-50 text-xs capitalize'>
                Jangan Menyebarkan Username mu!,
                <br />
                Jika Menyebarkan Username sama dengan menyebarkan
                <br />
                semua akses pada akun netflix yang telah kamu beli
            </p>
        </>
    )
}

export default UsernameInput
