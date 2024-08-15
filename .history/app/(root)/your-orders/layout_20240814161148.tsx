import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center w-full p-10'>
      {children}
    </div>
  )
}

export default layout
