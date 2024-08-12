import { CarouselBanner } from '@/components/pages/home/Carrousels/CarouselBanner'
import { CarouselBestSeller } from '@/components/pages/home/Carrousels/CarouselBestSelling'
import CategoryList from '@/components/pages/home/categories/CategoryList'

import React from 'react'

const page = () => {
  return (
    <div className='bg-white h-screen  rounded-tr-3xl flex flex-col items-center py-6 px-2'>
          <CarouselBanner/> 
          <CategoryList />
          <CarouselBestSeller/>
    </div>
  )
}

export default page