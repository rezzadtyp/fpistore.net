import React, { Suspense } from "react"

import Loading from "@/components/shared/Loading"
import HeroSection from "@/components/HeroSection"
import MoviesRecomendation from "@/components/MoviesRecomendation"

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className='flex justify-center items-center'>
        <HeroSection />
        <MoviesRecomendation />
      </main>
    </Suspense>
  )
}
