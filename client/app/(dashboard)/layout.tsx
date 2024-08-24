import Navbar from '@/components/pages/dashboard/Layout/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout