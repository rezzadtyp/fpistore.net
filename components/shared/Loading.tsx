import Image from "next/image"

const Loading = () => {
    return (
        <div className='absolute z-[999] top-0 left-0'>
            <div className='flex flex-col w-screen h-screen cursor-wait justify-center items-center gap-1 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-600 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-800 to-90%'>
                <Image
                    width={100}
                    height={100}
                    src='/icons/fpiglobe.png'
                    alt='Loading...'
                    className='duration-700'
                />
                <p className='font-fpifont text-lg text-primary select-none'>
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loading
