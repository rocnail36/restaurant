import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


type Props = {
  className?:string,
  onClick?: () => void
}

const Logo = ({className,onClick}:Props) => {

  return (<div onClick={onClick} className={cn(`min-h-[50px] w-[50px] relative bg-white rounded-[50%] aspect-square`,className)}>
  <Image src={"/logo.png"} fill style={{objectFit:"fill"}} alt='logo restaurant' />
  </div>
  )
}

export default Logo