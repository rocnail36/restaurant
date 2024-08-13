import FooteHome from '@/components/pages/home/Footer/FooteHome'
import NavbarHome from '@/components/pages/home/NavbarHome/NavbarHome'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col  h-[100vh]  overflow-x-hidden '>
      <NavbarHome/>
      {children}
      <FooteHome/>
      </div>
  )
}

export default layout