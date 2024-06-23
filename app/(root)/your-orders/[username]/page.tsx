import React, { Suspense } from "react"
import { BsShieldLock } from "react-icons/bs"
import { fetchData } from "@/app/api/googleSheets"
import Loading from "@/components/shared/Loading"
import Clipboard from "@/components/Clipboard"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { GoArrowUpRight } from "react-icons/go"

const page = async ({ params }: { params: { username: string } }) => {
    const username = params.username
    const { allData, allShopee } = await fetchData()
    function matchData(data: string[][]): string[][] {
        const matches: string[][] = []

        for (const sublist of data) {
            if (sublist[1] === username) {
                matches.push(sublist)
            }
        }

        return matches
    }

    const FPIAndShopee = allData.concat(allShopee)
    const data = matchData(FPIAndShopee)
    return (
        <Suspense fallback={<Loading />}>
            <div className='w-full justify-center items-start flex px-5'>
                <div className='flex flex-col gap-10 w-fit'>
                    <div className='flex gap-2 items-center justify-start pt-5'>
                        <BsShieldLock className='text-6xl' />
                        <div>
                            <p className='font-conthrax text-xl'>Username</p>
                            <p className='font-extralight text-sm'>
                                {username}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full mb-10'>
                        {data.length > 0 ? (
                            data.map(
                                (row: any, i: number) =>
                                    row[1] === username && (
                                        <div
                                            key={i}
                                            className={`flex duration-1000 p-3 gap-4 border-b-[1px] h-fit ${
                                                row[0] === "SHARED" &&
                                                " !border-fuchsia-500 "
                                            } ${
                                                row[0] === "PRIVATE" &&
                                                " !border-cyan-500 "
                                            }
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
                                                <DialogTrigger className='flex group w-fit justify-center items-start bg-gradient-to-bl gap-1 duration-500 pl-3 pr-1 py-1 rounded-md from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%'>
                                                    {row[2]}
                                                    <GoArrowUpRight
                                                        className={`text-2xl primary ${
                                                            row[0] ===
                                                                "SHARED" &&
                                                            " group-hover:text-fuchsia-500 "
                                                        } ${
                                                            row[0] ===
                                                                "PRIVATE" &&
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
                                                                <Clipboard
                                                                    text={
                                                                        row[2]
                                                                    }
                                                                    className={`mb-1 ${
                                                                        row[0] ===
                                                                            "SHARED" &&
                                                                        " border-fuchsia-500/60"
                                                                    } ${
                                                                        row[0] ===
                                                                            "PRIVATE" &&
                                                                        " border-cyan-500/60"
                                                                    }`}
                                                                />
                                                                <p className='font-extralight select-none mb-1'>
                                                                    Password
                                                                </p>
                                                                <Clipboard
                                                                    text={
                                                                        row[3]
                                                                    }
                                                                    className={`mb-1 ${
                                                                        row[0] ===
                                                                            "SHARED" &&
                                                                        " border-fuchsia-500/60"
                                                                    } ${
                                                                        row[0] ===
                                                                            "PRIVATE" &&
                                                                        " border-cyan-500/60"
                                                                    }`}
                                                                />
                                                                {row[0] ===
                                                                    "SHARED" && (
                                                                    <>
                                                                        <div className='flex gap-5'>
                                                                            <div className='flex-col'>
                                                                                <p className='font-extralight select-none mb-1'>
                                                                                    Profile
                                                                                    Name
                                                                                </p>
                                                                                <Clipboard
                                                                                    text={
                                                                                        row[6]
                                                                                    }
                                                                                    className={`mb-1 ${
                                                                                        row[0] ===
                                                                                            "SHARED" &&
                                                                                        " border-fuchsia-500/60"
                                                                                    } ${
                                                                                        row[0] ===
                                                                                            "PRIVATE" &&
                                                                                        " border-cyan-500/60"
                                                                                    }`}
                                                                                />
                                                                            </div>
                                                                            <div className='flex-col'>
                                                                                <p className='font-extralight select-none mb-1'>
                                                                                    PIN
                                                                                </p>
                                                                                <Clipboard
                                                                                    text={
                                                                                        row[7]
                                                                                    }
                                                                                    className={`mb-1 ${
                                                                                        row[0] ===
                                                                                            "SHARED" &&
                                                                                        " border-fuchsia-500/60"
                                                                                    } ${
                                                                                        row[0] ===
                                                                                            "PRIVATE" &&
                                                                                        " border-cyan-500/60"
                                                                                    }`}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )}
                                                                <p className='font-extralight select-none mb-1'>
                                                                    Expired Date
                                                                </p>
                                                                <p
                                                                    className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg ${
                                                                        row[0] ===
                                                                            "SHARED" &&
                                                                        " border-fuchsia-500/60"
                                                                    } ${
                                                                        row[0] ===
                                                                            "PRIVATE" &&
                                                                        " border-cyan-500/60"
                                                                    }`}
                                                                >
                                                                    {row[0] ===
                                                                        "SHARED" &&
                                                                        row[8] +
                                                                            " 2024"}
                                                                    {row[0] ===
                                                                        "PRIVATE" &&
                                                                        row[6] +
                                                                            " 2024"}
                                                                </p>
                                                            </div>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    )
                            )
                        ) : (
                            <div className='w-full h-32 flex flex-col items-start justify-center'>
                                <p className='font-conthrax text-2xl'>
                                    Username Salah!
                                </p>
                                <p className='font-thin'>
                                    Hubungi admin untuk informasi lebih lanjut
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default page
