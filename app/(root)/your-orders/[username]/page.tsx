import React, { Suspense } from "react"
import { BsShieldLock } from "react-icons/bs"
import { fetchData } from "@/app/api/googleSheets"
import Loading from "@/components/shared/Loading"
import Clipboard from "@/components/Clipboard"
import { VscNote } from "react-icons/vsc"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoMdPerson } from "react-icons/io"
import { MdGroup } from "react-icons/md"
import { PiStackDuotone } from "react-icons/pi"

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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full mb-10'>
                        {data.length > 0 ? (
                            data.map((row: any, i: number) => (
                                <div key={i} className='flex justify-start'>
                                    <Dialog>
                                        <DialogTrigger
                                            className={`flex group justify-center items-start gap-5 duration-500 rounded-lg dark:text-light-200 ${
                                                row[0] === "SHARED" &&
                                                "  text-dark-800"
                                            }
                                                ${
                                                    row[0] === "PRIVATE" &&
                                                    "  text-dark-800"
                                                }
                                                ${
                                                    row[0] === "shopeeSHARED" &&
                                                    "  text-shopees-800"
                                                }
                                                ${
                                                    row[0] ===
                                                        "shopeePRIVATE" &&
                                                    "  text-shopees-800"
                                                }`}
                                        >
                                            <div
                                                className={`flex flex-col justify-between p-4 gap-5 dark:bg-dark-300 bg-light-300 rounded-xl h-fit w-full
                                ${row[0] === "SHARED" && "  dark:bg-dark-700"}
                                                ${
                                                    row[0] === "PRIVATE" &&
                                                    "  dark:bg-dark-700"
                                                }
                                                ${
                                                    row[0] === "shopeeSHARED" &&
                                                    "  dark:bg-shopees-700"
                                                }
                                                ${
                                                    row[0] ===
                                                        "shopeePRIVATE" &&
                                                    "  dark:bg-shopees-700"
                                                }`}
                                            >
                                                <div className='flex justify-between items-start gap-10'>
                                                    <div className='flex flex-col items-start'>
                                                        <span>{row[2]}</span>
                                                        <p className='dark:text-light-700 text-sm font-light'>
                                                            Expire Date :{" "}
                                                            {(row[0] ===
                                                                "SHARED" &&
                                                                row[8]) ||
                                                                (row[0] ===
                                                                    "PRIVATE" &&
                                                                    row[6])}
                                                            {row[0] ===
                                                                "shopeeSHARED" &&
                                                                row[8]}
                                                            {row[0] ===
                                                                "shopeePRIVATE" &&
                                                                row[8]}
                                                        </p>
                                                    </div>
                                                    <VscNote
                                                        className={`text-lg ${
                                                            row[0] ===
                                                                "SHARED" &&
                                                            "  group-hover:text-primary"
                                                        }
                                                ${
                                                    row[0] === "PRIVATE" &&
                                                    "  group-hover:text-primary"
                                                }
                                                ${
                                                    row[0] === "shopeeSHARED" &&
                                                    "  group-hover:text-shopee"
                                                }
                                                ${
                                                    row[0] ===
                                                        "shopeePRIVATE" &&
                                                    "  group-hover:text-shopee"
                                                }
                                                `}
                                                    />
                                                </div>
                                                <div className='flex justify-between items-end w-full'>
                                                    <div
                                                        className={`'dark:text-light-700 flex text-sm items-center justify-evenly px-1 py-[2px] gap-1 rounded-lg border-[1px] ' 
                                                ${
                                                    row[0] === "SHARED" &&
                                                    "  dark:bg-primary/30 border-primary dark:border-none"
                                                }
                                                ${
                                                    row[0] === "PRIVATE" &&
                                                    "  dark:bg-primary/30 border-primary dark:border-none"
                                                }
                                                ${
                                                    row[0] === "shopeeSHARED" &&
                                                    "  dark:bg-shopee/30 border-shopee dark:border-none"
                                                }
                                                ${
                                                    row[0] ===
                                                        "shopeePRIVATE" &&
                                                    "  dark:bg-shopee/30 border-shopee dark:border-none"
                                                }`}
                                                    >
                                                        <PiStackDuotone className='text-md' />{" "}
                                                        {i + 1}
                                                    </div>
                                                    <div className='dark:text-light-700/60 flex gap-2 items-center justify-evenly'>
                                                        {(row[0] ===
                                                            "PRIVATE" && (
                                                            <IoMdPerson className='text-xs' />
                                                        )) ||
                                                            (row[0] ===
                                                                "SHARED" && (
                                                                <MdGroup className='text-xs' />
                                                            ))}
                                                        {(row[0] ===
                                                            "shopeePRIVATE" && (
                                                            <IoMdPerson className='text-xs' />
                                                        )) ||
                                                            (row[0] ===
                                                                "shopeeSHARED" && (
                                                                <MdGroup className='text-xs' />
                                                            ))}
                                                        <span className='text-xs capitalize'>
                                                            {(row[0] ===
                                                                "shopeePRIVATE" &&
                                                                "PRIVATE") ||
                                                                (row[0] ===
                                                                    "shopeeSHARED" &&
                                                                    "SHARED")}
                                                            {(row[0] ===
                                                                "PRIVATE" &&
                                                                "PRIVATE") ||
                                                                (row[0] ===
                                                                    "SHARED" &&
                                                                    "SHARED")}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent
                                            className={`w-fit border-0 shadow-lg rounded-xl text-dark-700 dark:text-white bg-light-200 h-fit
                                ${
                                    (row[0] === "SHARED" ||
                                        row[0] === "PRIVATE") &&
                                    "shadow-primary/50 dark:bg-dark-600"
                                }
                                ${
                                    (row[0] === "shopeeSHARED" ||
                                        row[0] === "shopeePRIVATE") &&
                                    "shadow-shopee/50 dark:bg-shopees-600"
                                }`}
                                        >
                                            <DialogHeader className='gap-5'>
                                                <DialogTitle className='border-b-[1px] border-white/50 py-2 flex gap-2'>
                                                    <VscNote className='text-xl' />
                                                    Order Detail
                                                </DialogTitle>
                                                <DialogDescription>
                                                    <div className='flex flex-col'>
                                                        <p className='font-extralight select-none mb-1'>
                                                            Email
                                                        </p>

                                                        <Clipboard
                                                            row0={row[0]}
                                                            text={row[2]}
                                                        />
                                                        <p className='font-extralight select-none mb-1'>
                                                            Password
                                                        </p>
                                                        <Clipboard
                                                            text={row[3]}
                                                            row0={row[0]}
                                                        />
                                                        {(row[0] === "SHARED" ||
                                                            row[0] ===
                                                                "shopeePRIVATE" ||
                                                            row[0] ===
                                                                "shopeeSHARED") && (
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
                                                                            row0={
                                                                                row[0]
                                                                            }
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
                                                                            row0={
                                                                                row[0]
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                        <p className='font-extralight select-none mb-1'>
                                                            Expired Date
                                                        </p>

                                                        <Clipboard
                                                            text={
                                                                (row[0] ===
                                                                    "SHARED" &&
                                                                    row[8]) ||
                                                                (row[0] ===
                                                                    "PRIVATE" &&
                                                                    row[6]) ||
                                                                (row[0] ===
                                                                    "shopeePRIVATE" &&
                                                                    row[8]) ||
                                                                (row[0] ===
                                                                    "shopeeSHARED" &&
                                                                    row[8])
                                                            }
                                                            row0={row[0]}
                                                        />
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ))
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
