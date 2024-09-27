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
    <div className={cn("bg-red-400 py-2 h-[75px] overflow-hidden  lg:h-auto lg:w-[65px] lg:hover:w-[250px]", clsx({
     "h-auto": isOpen
    }))}>
        <Logo className='ml-[10px] mb-2' onClick={switchNavBar}/>
        <ul className='flex flex-col gap-6 ml-5'>   
        {navbarLinks.map((link) => (
            <Link  href={link.src}>   
            <li className={cn(`flex items-center gap-4  text-white hover:text-red-400 hover:bg-white py-2  rounded-l-2xl md:pr-6 transition-all`, clsx({
              "bg-white text-red-400": path == link.src
            }))}>
         <link.icon size={20} className='min-w-[30px]' /> <p>{link.name}</p>
            </li>
            </Link>
        ))}
    </ul>
    </div>
  )
}

export default Navbar