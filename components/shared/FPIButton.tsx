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
            className={`rounded-lg px-3 p-1 font-semibold dark:bg-dark-500 bg-light-200 hover:bg-light-300 active:bg-light-600 dark:hover:bg-dark-700 border-[1px] border-primary dark:border-none hover:shadow-primary hover:shadow-lg duration-700 dark:active:bg-black active:shadow-xl active:shadow-primary/70 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default FPIButton
