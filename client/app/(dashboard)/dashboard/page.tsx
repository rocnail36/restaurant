
import { Last3Registers } from '@/components/pages/dashboard/home/Last3Registers'
import Last5orders from '@/components/pages/dashboard/home/Last5orders'
import Sections from '@/components/pages/dashboard/home/Sections'
import User from '@/components/pages/dashboard/home/User'
import React from 'react'

const page = () => {
  return (
    <div className='m-auto ml-8 w-[90%] gap-y-12 gap-x-6 gap-2 grid lg:grid-cols-[65%,30%] lg:grid-rows-[auto]'>
      <Sections/>
      <Last3Registers/>
      <Last5orders/>
      <User/>
    </div>
  )
}

export default page