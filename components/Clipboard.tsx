"use client"
import React, { useState } from "react"
import { MdContentCopy } from "react-icons/md"
import { FaCheck } from "react-icons/fa6"

const Clipboard: React.FC<{ text: string; className?: string; row0: any }> = ({
    text,
    className,
    row0,
}) => {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)

            setTimeout(() => {
                setIsCopied(false)
            }, 1000)
        } catch (error) {
            console.error("Error copying to clipboard", error)
        }
    }

    return (
        <div className='w-fit flex gap-2 items-center justify-between mb-2'>
            <div
                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 bg-gray-100 drop-shadow-md border dark:border-none rounded-lg mb-3 select-none 
            ${(row0 === "SHARED" || row0 === "PRIVATE") && "dark:bg-dark-700"}
            ${
                (row0 === "shopeeSHARED" || row0 === "shopeePRIVATE") &&
                "dark:bg-shopees-700"
            } ${className}`}
            >
                <p className='focus:outline-none h-full w-full focus:border bg-transparent p-2 rounded-lg border-none select-all'>
                    {text}
                </p>
                <button
                    onClick={copyToClipboard}
                    disabled={isCopied}
                    className='text-xl '
                >
                    {isCopied ? <FaCheck /> : <MdContentCopy />}
                </button>
            </div>
        </div>
    )
}

export default Clipboard
