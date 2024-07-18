"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

import { fetchData } from "@/app/api/googleSheets"

export const InfiniteMovingCards = async ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        url: string
        image: string
        title: string
    }[]
    direction?: "left" | "right"
    speed?: "fast" | "normal" | "slow"
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    const { allData } = await fetchData()

    useEffect(() => {
        addAnimation()
    }, [])
    const [start, setStart] = useState(false)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                )
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "20s"
                )
            } else if (speed === "normal") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "40s"
                )
            } else {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "80s"
                )
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-full min-w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <div
                        className='w-[350px] max-w-full relative flex flex-col justify-end rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] h-60'
                        style={{
                            background:
                                "url('https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaNBrCT8lPS5P5LhH7aUWJISurm_zISWEuT4G8L192x-Tn_D4VVCu--ItecsJVhYha9jMrfQMWQXG7NtvtWywgocs4TmVdEvNDsbCupbcmG2WjyTZMkJtjdaohs3JeZRSONnAzD4frQS_aL-1HX7g7mG6rsTjTK_YoNGhHhpjmHgzlTtmfbv5AFiWXZ83b5gWJQ79npOySjgN3ApPgOCijZ-aIeVlgM8-Zfpe0OGr2bxo1mEnKIHEpKjBnFd6uqn1Q7ZesGDsTRzJpo4sttBKZQvMc4qsv8vskSSycepvico5rE738meOD4dOLuuDxPuBBPiBlPRaIctTex8Cg42UCV4.jpg')",
                            backgroundSize: "cover",
                        }}
                        key={idx}
                    ></div>
                ))}
            </ul>
        </div>
    )
}
