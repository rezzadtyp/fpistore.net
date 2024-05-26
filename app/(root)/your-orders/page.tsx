/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { fetchData, censorEmail, censorPassword } from "@/app/api/googleSheets"
import { unstable_noStore } from "next/cache"
import Link from "next/link"
import { Roboto } from "next/font/google"
import { IoInformationCircleOutline } from "react-icons/io5"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { GoArrowUpRight } from "react-icons/go"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const Page = async () => {
    unstable_noStore()
    const { allData, Stock } = await fetchData()
    const StockPrivate = Stock[0][0]
    const StockShared = Stock[0][1]
    return (
        <div className='lg:w-1/2 justify-center items-center flex flex-col py-12 scroll-smooth'>
            <div className='flex gap-7 flex-col pb-5 justify-between w-full'>
                <div className='flex flex-col text-lg select-none '>
                    <div className='font-bold flex lg:flex-row flex-col mb-2 gap-0 md:gap-2'>
                        Stock Akun
                    </div>
                    <div className='flex gap-1 py-1'>
                        Private{" "}
                        <p
                            className={`text-cyan-500 font-black ${roboto.className}`}
                        >
                            //
                        </p>
                        {StockPrivate === "0" ? (
                            "Kosong/Habis"
                        ) : (
                            <>
                                <p className='font-black text-lg select-text'>
                                    {StockPrivate}
                                </p>
                                Akun
                            </>
                        )}
                    </div>
                    <div className='flex gap-1 py-1'>
                        Shared{" "}
                        <p
                            className={`text-fuchsia-500 font-black ${roboto.className}`}
                        >
                            {"  "}
                            //
                        </p>
                        {StockShared === "0" ? (
                            "Kosong/Habis"
                        ) : (
                            <>
                                <p className='font-black text-lg select-text'>
                                    {StockShared}
                                </p>
                                Profile
                            </>
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-start justify-start text-start md:items-end lg:items-end'>
                    <Link
                        href='/your-orders/secret'
                        className='relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group'
                    >
                        <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8b4fe_0%,#9121CA_50%,#d8b4fe_100%)]' />
                        <span className='inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-full dark:bg-dark-800 bg-gray-100 px-3 py-1 text-sm font-medium group-hover:text-gray-300 dark:text-white backdrop-blur-3xl'>
                            <span>Your Order Detail</span>
                            <IoInformationCircleOutline className='text-xl' />
                        </span>
                    </Link>
                    <p className='font-light text-xs text-start md:text-end lg:text-end'>
                        Lihat List Akun mu Dengan Secret ID
                    </p>
                </div>
            </div>
            <div className='flex flex-col w-fit overflow-auto max-h-[500px] _custom-scrollbar p-5 bg-gradient-to-tr border-0 shadow-xl rounded-xl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-600 dark:from-15% dark:via-dark-700 via-40% dark:to-dark-800 to-90% text-dark-700 dark:text-white'>
                {allData.map((row: any, i: number) => (
                    <div
                        key={i}
                        className={`flex duration-1000 p-3 gap-4 border-b-[1px] h-fit ${
                            row[0] === "SHARED" && " !border-fuchsia-500 "
                        } ${row[0] === "PRIVATE" && " !border-cyan-500 "}
                        `}
                    >
                        <div className='w-fit flex justify-start items-start'>
                            <p className='text-md font-black lg:text-xl text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                                {i + 1}
                            </p>
                        </div>
                        <div className='font-fpifont w-fit flex justify-start items-start'>
                            <p className='text-md lg:text-xl text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                                {row[0]}
                            </p>
                        </div>
                        <Dialog>
                            <DialogTrigger className='flex group justify-center items-start bg-gradient-to-bl gap-1 duration-500 pl-3 pr-1 py-1 rounded-md from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%'>
                                {censorEmail(row[2])}
                                <GoArrowUpRight
                                    className={`text-2xl primary ${
                                        row[0] === "SHARED" &&
                                        " group-hover:text-fuchsia-500 "
                                    } ${
                                        row[0] === "PRIVATE" &&
                                        " group-hover:text-cyan-500 "
                                    }`}
                                />
                            </DialogTrigger>
                            <DialogContent
                                className={`bg-gradient-to-bl w-fit border-0 shadow-xl rounded-xl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-600 dark:from-15% dark:via-dark-700 via-40% dark:to-dark-800 to-90% text-dark-700 dark:text-white h-96 ${
                                    row[0] === "SHARED" &&
                                    " shadow-fuchsia-500/70 "
                                } ${
                                    row[0] === "PRIVATE" &&
                                    " shadow-cyan-500/70 "
                                }`}
                            >
                                <DialogHeader className='gap-5'>
                                    <DialogTitle className='border-b-[1px] border-white/50 py-2'>
                                        Order Detail
                                    </DialogTitle>
                                    <DialogDescription>
                                        <div className='flex flex-col'>
                                            <p className='font-extralight select-none mb-1'>
                                                Email
                                            </p>
                                            <p
                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-cyan-500/60"
                                                }`}
                                            >
                                                {censorEmail(row[2])}
                                            </p>
                                            <p className='font-extralight select-none mb-1'>
                                                Password
                                            </p>
                                            <p
                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-cyan-500/60"
                                                }`}
                                            >
                                                {censorPassword(row[3], 6)}
                                            </p>
                                            {row[0] === "SHARED" && (
                                                <>
                                                    <div className='flex gap-5'>
                                                        <div className='flex-col'>
                                                            <p className='font-extralight select-none mb-1'>
                                                                Profile Name
                                                            </p>
                                                            <p
                                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                                                    row[0] ===
                                                                        "SHARED" &&
                                                                    " border-fuchsia-500/60"
                                                                } ${
                                                                    row[0] ===
                                                                        "PRIVATE" &&
                                                                    " border-cyan-500/60"
                                                                }`}
                                                            >
                                                                {row[6]}
                                                            </p>
                                                        </div>
                                                        <div className='flex-col'>
                                                            <p className='font-extralight select-none mb-1'>
                                                                PIN
                                                            </p>
                                                            <p
                                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                                                    row[0] ===
                                                                        "SHARED" &&
                                                                    " border-fuchsia-500/60"
                                                                } ${
                                                                    row[0] ===
                                                                        "PRIVATE" &&
                                                                    " border-cyan-500/60"
                                                                }`}
                                                            >
                                                                {censorPassword(
                                                                    row[7],
                                                                    2
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                            <p className='font-extralight select-none mb-1'>
                                                Expired Date
                                            </p>
                                            <p
                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg ${
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-cyan-500/60"
                                                }`}
                                            >
                                                {row[0] === "SHARED" &&
                                                    row[8] + " 2024"}
                                                {row[0] === "PRIVATE" &&
                                                    row[6] + " 2024"}
                                            </p>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page
