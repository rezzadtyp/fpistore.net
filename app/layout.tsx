import type { Metadata } from "next"
import "../styles/globals.css"
// import GoogleAnalytics from "@bradgarropy/next-google-analytics"
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import FacebookChat from "@/components/FacebookChat"

export const metadata: Metadata = {
    title: {
        template: "%s | FPI Store",
        default: "FPI Store | The Biggest Netflix Seller",
    },
    description: "FPI Store",
    icons: {
        icon: [
            {
                url: "/icons/fpistore.netblack.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icons/fpistore.netwhite.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
    keywords:
        "netflix, premium, 4k, uhd, full garansi, netflix account, netflix premium uhd, netflix murah, netflix shared, netflix private, netflix terpercaya, murah, terpercaya, film terbaru, alamsyah.id, alamsyah, bergaransi",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* <GoogleAnalytics measurementId='G-Z86GVT7LTC' /> */}
            <html lang='en' className='!scroll-smooth font-roboto'>
                <body className='selection:bg-primary selection:text-dark-800 dark:bg-dark-700 bg-light-100 text-dark-800 dark:text-light-400'>
                    {/* <FacebookChat /> */}
                    {children}
                    {/* <SpeedInsights />
                    <Analytics /> */}
                </body>
            </html>
        </>
    )
}
