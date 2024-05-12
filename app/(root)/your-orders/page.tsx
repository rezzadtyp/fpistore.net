/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { fetchData, censorEmail, censorPassword } from "@/app/api/googleSheets"
import { unstable_noStore } from "next/cache"
import Link from "next/link"
import { Roboto } from "next/font/google"
import { IoInformationCircleOutline } from "react-icons/io5"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
        <div className='w-full justify-center items-center flex flex-col p-12 lg:p-24 scroll-smooth'>
            <div className='flex gap-7 flex-col md:flex-row lg:flex-row justify-between border-b-[1px] border-black/20 dark:border-white/20 pb-8 mb-8 w-full'>
                <div className='flex flex-col text-lg select-none '>
                    <div className='font-fpifont flex lg:flex-row flex-col mb-2 gap-0 md:gap-2'>
                        Stock Akun
                    </div>
                    <div className='flex gap-1 py-1'>
                        Private{" "}
                        <p
                            className={`text-purple-500 font-black ${roboto.className}`}
                        >
                            {"  "}
                            //
                        </p>
                        {StockPrivate === "0" ? (
                            "Kosong/Habis"
                        ) : (
                            <>
                                <p className='font-fpifont text-lg select-text'>
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
                                <p className='font-fpifont text-lg select-text'>
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
                        className='relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                    >
                        <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8b4fe_0%,#9121CA_50%,#d8b4fe_100%)]' />
                        <span className='inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-gray-100 px-3 py-1 text-sm font-medium dark:text-white backdrop-blur-3xl'>
                            <span>Your Order Detail</span>
                            <IoInformationCircleOutline className='text-xl' />
                        </span>
                    </Link>
                    <p className='font-light text-xs text-start md:text-end lg:text-end'>
                        Lihat List Akun mu Dengan Secret ID
                    </p>
                </div>
            </div>
            <div className='overflow-auto max-h-96'>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[100px]'>
                                Type Netflix
                            </TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allData.map((row: any, i: number) => (
                            <TableRow key={i}>
                                <TableCell className='font-medium'>
                                    Netflix {row[0]}
                                </TableCell>
                                <TableCell>{censorEmail(row[2])}</TableCell>
                                <TableCell>{row[6]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className='text-right'>
                                $2,500.00
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 w-full overflow-auto max-h-screen'>
                {allData.map((row: any, i: number) => (
                    <div
                        key={i}
                        className={`rounded-3xl p-5 lg:p-10 shadow-md hover:shadow-xl duration-300 h-fit group border-2 border-white dark:border-dark-400 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% ${
                            row[0] === "SHARED" &&
                            " shadow-fuchsia-500 hover:shadow-fuchsia-500/50 "
                        } ${
                            row[0] === "PRIVATE" &&
                            " shadow-purple-500 hover:shadow-purple-500/50 "
                        }
                        `}
                    >
                        <div className='font-fpifont w-full flex justify-end items-start'>
                            <p className='text-lg lg:text-2xl text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                                {row[0]}
                            </p>
                        </div>
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
                                    " border-purple-500/60"
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
                                    " border-purple-500/60"
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
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-purple-500/60"
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
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-purple-500/60"
                                                }`}
                                            >
                                                {censorPassword(row[7], 2)}
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
                                    " border-purple-500/60"
                                }`}
                            >
                                {row[0] === "SHARED" && row[8] + " 2024"}
                                {row[0] === "PRIVATE" && row[6] + " 2024"}
                            </p>
                        </div>
                        <div className='font-fpifont w-full flex justify-center items-center'>
                            <p className='text-s bg-gradient-to-bl dark:text-white/5 text-black/5 bg-clip-text cursor-default select-none'>
                                ALAMSYAH.ID
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Page
