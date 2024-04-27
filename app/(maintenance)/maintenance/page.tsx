import { Metadata } from "next"
import MTPage from "@/components/MTPage"
export const metadata: Metadata = {
    title: "Maintenance",
}

const Maintenance = () => {
    return (
        <div className='absolute z-[999] w-screen h-screen top-0 left-0'>
            <MTPage />
        </div>
    )
}

export default Maintenance
