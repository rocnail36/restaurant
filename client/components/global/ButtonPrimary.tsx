import React from 'react'

type Props = {
  text:string,
  icon?: React.ReactNode,
  className?: string
}

const ButtonPrimary = ({text,icon,className}:Props) => {
  return (
    <button className={` text-white rounded-lg px-4 py-2 ${className}`}>
        {text}
        {icon}
    </button>
  )
}

export default ButtonPrimary