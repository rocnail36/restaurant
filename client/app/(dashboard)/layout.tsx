import Navbar from '@/components/pages/dashboard/Layout/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col w-screen gap-14 lg:flex-row lg:min-h-screen lg:gap-2'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout