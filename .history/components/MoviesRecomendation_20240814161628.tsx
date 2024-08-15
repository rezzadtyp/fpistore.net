import React from "react"
import { InfiniteMovingCards } from "./infinite-moving-cards"

const MoviesRecomendation = () => {
  const testimonials = [
    {
      title: "The Train of Death",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdE9fSQxytDVOMV38LU1nDUG1UsiZ8zwIaiEPCRSGNH4O06hd374lGcHFEtB_usmWSpbaKvmcmjET7aVGxUKMiQ1ES1eUtCQP2CZjziyiikoOaBYDtxzznk4LonxI1yJZ8Rv5XlN_nR6KLwr7F0W7qdiKpXWhkvKs9H_3WmGAy5Uh3MeULkeVyJzIuXn8iL_4HkO35LZF8ywNvplZpsL33c12WErsV2cdCOQMbbO7qPyi8T1mCEkuhyeU4Ar4UjbsDuT2673Zmv5iJGU0CRCNpPheo4MFccwlYY1LRrpGZZnZYJMDrRIgZrV4S3p7cC8RNuqnd37VerhR0mdZi8i-wNU.jpg?r=bbb",
      url: "https://netflix.com/watch/81764949?tctx=5%2C0%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81764949%2C",
    },
    {
      title: "Anyone But You",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSevWzcQyagKojemMSwCL3f4CDuLO49GdJk7601rbLlbu31fEt9ZdzBXCBpL0KsQ6EvzogCODBD1aIMwmVNWniOhMkcfc94SeLIDUAlGnnQGYWaRtAEB6oFabsLxjFhm8m7EI7_ycyACUFItO3Nknclh2W3wtVODnQxeltmO6xzATOvk1GmTFyc5eGOy_sB875lbUi447XbNVVVPxHehpMeJxbVf2zwavIsOMCDLj-jHRNIRbUXLk5wNuIypPftZ3XpgCnvmjV9azxc5HNev5UcVGIj7iMYX611xJHZH8_ZmF7y0r12W0U8u6Rwd7WATumCXp4i3UEe6ZFDsnxh4xeay.jpg?r=b9f",
      url: "https://netflix.com/watch/81760229?tctx=5%2C1%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81760229%2C",
    },
    {
      title: "Kuyang",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaNBrCT8lPS5P5LhH7aUWJISurm_zISWEuT4G8L192x-Tn_D4VVCu--ItecsJVhYha9jMrfQMWQXG7NtvtWywgocs4TmVdEvNDsbCupbcmG2WjyTZMkJtjdaohs3JeZRSONnAzD4frQS_aL-1HX7g7mG6rsTjTK_YoNGhHhpjmHgzlTtmfbv5AFiWXZ83b5gWJQ79npOySjgN3ApPgOCijZ-aIeVlgM8-Zfpe0OGr2bxo1mEnKIHEpKjBnFd6uqn1Q7ZesGDsTRzJpo4sttBKZQvMc4qsv8vskSSycepvico5rE738meOD4dOLuuDxPuBBPiBlPRaIctTex8Cg42UCV4.jpg?r=857",
      url: "https://netflix.com/watch/81755768?tctx=5%2C2%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81755768%2C",
    },
    {
      title: "Rampage",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaPaZbM69q62b83snmqn9csVspdRiREkxIk0ruUWzQ9J33vuv39OIhT9U1S2ECa0XdSSq0ujQyZLcgRyku6gl5m0pPvRJwUKVXW7-bf7cBy-mZ_xy83igq_q2-hBuMWr7qd8KHRCZhJYJLBi0NFQLtRZBM61bdOuwbsk.jpg?r=bdb",
      url: "https://netflix.com/watch/80216309?tctx=5%2C3%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A80216309%2C",
    },
    {
      title: "Journey 2: The Mysterious Island",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQoBdxV9mWrqilwUB_SU2mlaVdGwWuwai4vzhyWZxXqz4Kv3fMSCnWks_5iuqQIxw8xSz1bQbKj-nMqPI-tSsnJXfKKD4Lq8Q6CAOs2Oee3OXkcMog_AhMn3gT7ICQ-_Qd19mUNVFkqw39lUhxodjqy_OrsXXQzpKDQl.jpg?r=4be",
      url: "https://netflix.com/watch/70178621?tctx=5%2C4%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A70178621%2C",
    },
    {
      title: "Beast (English)",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSdOXuRD9iPJjuX5j-XfyKZMIIxV2lRKoniICsjxai7BYVVBcndCqsuSSQzOqSiTq7pJWPOq6SDn_YkoaR4TA4YPWOYwHuflwQoyHk1RIR6De_2fHzUAtoPrflwBJfQD8f8ZHu5_gmzEjx91Hg6jZCyQ6MEX1ZkhYGdE9cLYGvrMkOvCbiBsYtViFWLjzvY74IxB4IPTjSMNuZNND0i42fORSOJYB_40xn9s2-KdPVRTbrsWW3vYmg8s4iSGM2HPuh2ltN3imjzRJ2Rs07_T6MRZPKYHwOL30hbfo2oePf1MRYFyoPgrjoy9RUGM_5HKw_OpsrEMcCL1MQbeOrF-bVwo.jpg?r=8b1",
      url: "https://netflix.com/watch/81579532?tctx=5%2C5%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81579532%2C",
    },
    {
      title: "Agak Laen",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV_l5IiSurL9xQzm2Gio5MUymeL1wFpZlxRmJvg8UmDLooYcwu12T7FG-BBTfj6s50-yprs2aJKynSZZcRhG5yG5MAaqaarf3mLUpVojwt-9JV6iWVdnSQf9_7Si-sb-JFd4QLEvgDpv6xV5RCPEq1eEOWgJtYJRylnJ.jpg?r=631",
      url: "https://netflix.com/watch/81728111?tctx=5%2C6%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81728111%2C",
    },
    {
      title: "Vanished into the Night",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbqW2JKKnyWThbxW5o7pKvnHUyeFwLv1nZCMzjzTje7aWaBq2vKjyLaxj97fKtubLm92qPRDufcfsPJdG8JBAuE5A6fJU9ooH5JZSVmznOs4CHvq7wBPAkJbxIRGPqjV6QcQx2lQFFgSJZOzBWS_kf5CNxgn_F82aaRKpS3ghSY5REKZvUDWdXcv9lkfZHRyoKHxaEcP4LINT792u-PUNgZM2gIWXJiLUbIlRaiWBhQfvmydgm-HQmtwJbTAjHcruNKFCD8sFdofUDwlr-8uCBHyFJHN_FmxN_suz5aAwbZX-4zjOvxyatZIGUjei57WZv2SLjFDw7DpJg5Ma90ZrMQZySYJYgDo6cAcFN-vW4kRuyGQvkGg.jpg?r=f9e",
      url: "https://netflix.com/watch/81728111?tctx=5%2C6%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81728111%2C",
    },
    {
      title: "Minions: The Rise of Gru",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdp81uGFO9_wFWmLurY5QtNMXhSe3axbvfcDocVNq9SY8AV4sJs_XA6Yo6zi8tqsepLtle-5MClimPRe_Ag1_UnwXu6qVG0pPLfpW5wZOuGQfJv-1ExUt9MNQu_8e44GNHVjO_oUNko4Xdf4sFbeISe6UKN79p5gE7Db.jpg?r=8da",
      url: "https://netflix.com/watch/81163835?tctx=5%2C7%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81163835%2C",
    },
    {
      title: "The Corpse Washer",
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbhFAWj33skdiGjU3ts7X9V-Ox211JgkrGkiZ12fVnGeP7ohIWuhNwOYT5qMF3dpQtJLvpiJ1Y5qoRGfcIj3epdu_OMzHzM5izA-_ijQ-AbtIlH4czSbw2T30dp_NUp3KR0VQ-If1l0SM86fEcbiT3teR9_cP3Dyz7oq5xnZYRSjCgVioLFkll40rIw28Od1i42JX3BVAWnDAf6ic8mJ5pK45dEhumrnvhUcbd5opjcl2zPMXw_ocVmXkI92rPbxY6wfstwPtVP7lU37JS2PbJgNlt3_tgSPKj8ZimW4BLI8tmXOIKFCD71iSMgqgvP5o_1hnNSQPb6U_ZPj7sFf0LND.jpg?r=ba0",
      url: "https://netflix.com/watch/81198916?tctx=5%2C8%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81198916%2C",
    },
  ]

  return (
    <div className='rounded-md w-full max-w-screen md:max-w-[800px] lg:max-w-7xl flex flex-col antialiased bg-red-500 dark:bg-dark-700 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <div className='w-full flex justify-start'>
        <span className='font-extrabold'>Movies Recommendation</span>
      </div>
      <InfiniteMovingCards items={testimonials} direction='left' speed='slow' />
    </div>
  )
}

export default MoviesRecomendation
