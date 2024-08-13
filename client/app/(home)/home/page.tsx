
import { BannerCarousel } from '@/components/pages/home/Carrousels/BannerCarousel'
import { BestSellerCarousel } from '@/components/pages/home/Carrousels/BestSellerCarousel'
import CarrouselCategory from '@/components/pages/home/Carrousels/CarrouselCategory'
import CategoryList from '@/components/pages/home/categories/CategoryList'

import React from 'react'

const page = () => {
  return (
    <div className='bg-white rounded-tr-3xl py-12 flex flex-col items-center'>

      <div className='max-w-6xl w-[100%]  px-2'>
      <BannerCarousel/> 
          <CategoryList />
          <BestSellerCarousel/>
          <div className='w-[100%] flex flex-col gap-2'>
          <CarrouselCategory/>
          <CarrouselCategory/>
          <CarrouselCategory/>
          </div>
      </div>

    </div>
  )
}

export default page