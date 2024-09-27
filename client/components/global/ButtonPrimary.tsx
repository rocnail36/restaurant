import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
  text:string,
  icon?: React.ReactNode,
  className?: string,
  onClick?: () => void
}

const ButtonPrimary = ({text,icon,className,onClick}:Props) => {
  return (
    <Button onClick={onClick} className={cn("text-white rounded-lg px-4 py-2 bg-red-500 hover:bg-red-700",className)}>
        {text}
        {icon}
    </Button>
  )
}

export default ButtonPrimary