"use client"
import Logo from '@/components/global/Logo'
import { navbarLinks } from '@/constant/Navbar'
import { cn } from '@/lib/utils'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen,setIsopen] = useState(false)
  const path = usePathname()
   const switchNavBar = () => {
        setIsopen(!isOpen)
   }
   console.log(path)
  return (
    <div className={cn("bg-red-400 flex flex-col gap-4 py-2 h-[80px] overflow-hidden transition-all md:overflow-hidden md:w-[80px] md:hover:w-auto md:h-auto", clsx({
     "h-auto": isOpen
    }))}>
        <Logo className='ml-[10px]' onClick={switchNavBar}/>
        <ul className='flex flex-col gap-6 ml-2'>   
        {navbarLinks.map((link) => (
            <Link  href={link.src}>   
            <li className={cn(`flex items-center gap-4  text-white hover:text-red-400 hover:bg-white py-2  rounded-l-2xl md:pr-6 transition-all`, clsx({
              "bg-white text-red-400": path == link.src
            }))}>
         <link.icon size={30} className='min-w-[60px]' /> <p>{link.name}</p>
            </li>
            </Link>
        ))}
    </ul>
    </div>
  )
}

export default Navbar