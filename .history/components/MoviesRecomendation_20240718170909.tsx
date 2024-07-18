import React from "react"
import { InfiniteMovingCards } from "./infinite-moving-cards"

const MoviesRecomendation = () => {
    const testimonials = [
        {
            image: "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaNBrCT8lPS5P5LhH7aUWJISurm_zISWEuT4G8L192x-Tn_D4VVCu--ItecsJVhYha9jMrfQMWQXG7NtvtWywgocs4TmVdEvNDsbCupbcmG2WjyTZMkJtjdaohs3JeZRSONnAzD4frQS_aL-1HX7g7mG6rsTjTK_YoNGhHhpjmHgzlTtmfbv5AFiWXZ83b5gWJQ79npOySjgN3ApPgOCijZ-aIeVlgM8-Zfpe0OGr2bxo1mEnKIHEpKjBnFd6uqn1Q7ZesGDsTRzJpo4sttBKZQvMc4qsv8vskSSycepvico5rE738meOD4dOLuuDxPuBBPiBlPRaIctTex8Cg42UCV4.jpg",
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
            url: "https://netflix.com//watch/81764949?trackId=262639554&tctx=5%2C0%2C70038919-815a-45a9-95e9-34e9b743f789-41122056%2CNES_9DDC00FE9B290E5B0AFB6B99D425FB-F4694D00993BC3-F8BBF41E3F_p_1721294910255%2CNES_9DDC00FE9B290E5B0AFB6B99D425FB_p_1721294910255%2C%2C%2C%2C%2CVideo%3A81764949%2C",
        },
        {
            image: "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdE9fSQxytDVOMV38LU1nDUG1UsiZ8zwIaiEPCRSGNH4O06hd374lGcHFEtB_usmWSpbaKvmcmjET7aVGxUKMiQ1ES1eUtCQP2CZjziyiikoOaBYDtxzznk4LonxI1yJZ8Rv5XlN_nR6KLwr7F0W7qdiKpXWhkvKs9H_3WmGAy5Uh3MeULkeVyJzIuXn8iL_4HkO35LZF8ywNvplZpsL33c12WErsV2cdCOQMbbO7qPyi8T1mCEkuhyeU4Ar4UjbsDuT2673Zmv5iJGU0CRCNpPheo4MFccwlYY1LRrpGZZnZYJMDrRIgZrV4S3p7cC8RNuqnd37VerhR0mdZi8i-wNU.jpg",
            name: "William Shakespeare",
            title: "Hamlet",
            url: "https://netflix.com//watch/81755768?trackId=262639554&tctx=5%2C2%2C70038919-815a-45a9-95e9-34e9b743f789-41122056%2CNES_9DDC00FE9B290E5B0AFB6B99D425FB-F4694D00993BC3-F8BBF41E3F_p_1721294910255%2C%2C%2C%2C%2C%2CVideo%3A81755768%2C",
        },
    ]

    return (
        <div className='rounded-md max-w-[400px] md:max-w-[800px] lg:max-w-7xl flex flex-col antialiased bg-light-100 dark:bg-dark-700 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />
        </div>
    )
}

export default MoviesRecomendation
