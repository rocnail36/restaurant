import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-[100%] min-h-[95vh] rounded-lg md:w-[90%] md:px-4 m-auto shadow-2xl py-4'>
        {children}
    </div>
  )
}

export default Container