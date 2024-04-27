import Loading from "@/components/shared/Loading"
import React, { Suspense } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loading />}>
            <main className='relative w-screen h-screen'>{children}</main>
        </Suspense>
    )
}

export default Layout
