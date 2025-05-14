import React from "react"

const Container = ({ children }: {children: React.ReactNode}) => {
    return (
      <div className='max-w-[1144px] mx-auto px-6 xl:px-20 md:px-10 sm:px-2'>
        {children}
      </div>
    )
  }
  
  export default Container
  