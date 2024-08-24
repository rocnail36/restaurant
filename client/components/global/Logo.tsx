import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


type Props = {
  className?:string,
  onClick?: () => void
}

const Logo = ({className,onClick}:Props) => {

  return (<div onClick={onClick} className={cn(`min-h-[60px] w-[60px] relative bg-white rounded-[50%] aspect-square`,className)}>
  <Image src={"/logo.png"} fill style={{objectFit:"fill"}} alt='logo restaurant' />
  </div>
  )
}

export default Logo