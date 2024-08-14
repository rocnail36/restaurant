import FooteHome from '@/components/pages/home/Footer/FooteHome'
import NavbarHome from '@/components/pages/home/NavbarHome/NavbarHome'
import React from 'react'

const layout = ({children,modal}:{children:React.ReactNode,modal:React.ReactNode}) => {

  

  return (
    <>
      
      <div className='overflow-x-hidden min-h-screen flex flex-col justify-between'>
      <NavbarHome/>
      {children}
      <FooteHome/>
      </div>


      {modal}
     
      </>
  )
}

export default layout