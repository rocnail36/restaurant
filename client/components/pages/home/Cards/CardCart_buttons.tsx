import { MinusCircle, PlusCircle, Trash } from 'lucide-react'
import React from 'react'

const CardCart_buttons = () => {
  return (
    <div className='flex flex-col justify-center gap-4 px-[4px]'>
    <button className='self-end'>  <Trash className='fill-red-400 stroke-red-400'/>  </button>
    <div className='flex items-center justify-between gap-2'>
        <button ><MinusCircle className='stroke-red-400'/></button>
        <p>2</p>
        <button ><PlusCircle className='stroke-red-400'/></button>
    </div>
    </div>
  )
}

export default CardCart_buttons