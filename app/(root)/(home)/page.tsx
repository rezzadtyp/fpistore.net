import React, { Suspense } from "react"

import Loading from "@/components/shared/Loading"

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <main className='flex flex-col h-fit items-center justify-center'>
                Home
            </main>
        </Suspense>
    )
}
