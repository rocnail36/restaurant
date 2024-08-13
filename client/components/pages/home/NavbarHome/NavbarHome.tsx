
import Image from 'next/image'
import React from 'react'
import { Cart } from './Cart'
import Favorites from './Favorites' 
import { Search } from 'lucide-react'
import Logo from '@/components/global/Logo'

const NavbarHome = () => {
  return (
    <div className='bg-red-500 rounded-bl-2xl flex justify-between items-center px-2 py-4'>
     
        <Logo />
        <div className='flex gap-2'>
         <Favorites/> 
         <Search className="text-white"/>
         <Cart/>
        </div>
    </div>
  )
}

export default NavbarHome