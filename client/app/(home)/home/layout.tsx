import NavbarHome from '@/components/pages/home/NavbarHome/NavbarHome'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-screen'>
      <NavbarHome/>
      {children}
      </div>
  )
}

export default layout