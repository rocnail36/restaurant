import { Home } from 'lucide-react'
import React from 'react'

const CardSection = () => {
  return (
    <div className='bg-white shadow-md group transition-all hover:cursor-pointer hover:bg-red-500 px-2 rounded-2xl flex justify-center items-center aspect-square lg:aspect-video gap-4'>

        <div className='bg-red-500 p-2 group-hover:bg-white rounded-lg transition-all'>
        <Home size={30} className='text-white group-hover:text-red-400 transition-all'/> 
        </div>
        <div>
            <p className='text-xl font-semibold group-hover:text-white transition-all'>Productos</p>
             <p className='text-lg text-red-400 group-hover:text-white transition-all'>30</p>
        </div>
        
    </div>
  )
}

export default CardSection