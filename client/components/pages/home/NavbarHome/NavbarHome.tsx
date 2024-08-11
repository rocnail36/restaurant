
import Image from 'next/image'
import React from 'react'
import { Cart } from './Cart'
import Favorites from './Favorites' 
import { Search } from 'lucide-react'

const NavbarHome = () => {
  return (
    <div className='h-[50px] bg-red-500 rounded-bl-2xl flex justify-between items-center px-2'>
      <div className='bg-white h-[40px] w-[40px] relative rounded-[50%]'>
      <Image src={"/logo.png"} fill style={{objectFit:"cover"}} alt='logo restaurant' />
      </div>
      
        <div className='flex gap-2'>
         <Favorites/> 
         <Search className="text-white"/>
         <Cart/>
        </div>
    </div>
  )
}

export default NavbarHome