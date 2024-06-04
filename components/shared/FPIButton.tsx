// components/FPIButton.tsx

import React from "react"

interface FPIButtonProps {
    onClick?: () => void
    className?: string
    disabled?: boolean
    children: React.ReactNode
}

const FPIButton: React.FC<FPIButtonProps> = ({
    onClick,
    className,
    disabled,
    children,
}) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg px-3 p-1 text-gray-200 font-semibold bg-dark-600 hover:bg-dark-700 border-[1px] border-primary hover:shadow-primary hover:shadow-lg duration-700 active:bg-black active:shadow-xl active:shadow-primary/70 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default FPIButton
