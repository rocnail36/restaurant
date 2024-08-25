
import { Last3Registers } from '@/components/pages/dashboard/home/Last3Registers'
import Last5orders from '@/components/pages/dashboard/home/Last5orders'
import Sections from '@/components/pages/dashboard/home/Sections'
import User from '@/components/pages/dashboard/home/User'
import React from 'react'

const page = () => {
  return (
    <div className='m-auto grid lg:grid-cols-[70%,30%] text-gray-700 lg:w-[85%] lg:gap-x-4 py-4 w-[100%] gap-y-12 sm:px-2'>
      <Sections/>
      <Last3Registers/>
      <Last5orders/>
      <User/>
    </div>
  )
}

export default page