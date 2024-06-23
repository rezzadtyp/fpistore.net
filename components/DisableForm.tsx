import React from "react"

const DisableForm = ({ data, row0 }: any) => {
    return (
        <p
            className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 bg-gray-100 drop-shadow-md border dark:border-none rounded-lg mb-3 select-none 
            ${(row0 === "SHARED" || row0 === "PRIVATE") && "dark:bg-dark-700"}
            ${
                (row0 === "shopeeSHARED" || row0 === "shopeePRIVATE") &&
                "dark:bg-shopees-700"
            }`}
        >
            {data}
        </p>
    )
}

export default DisableForm
