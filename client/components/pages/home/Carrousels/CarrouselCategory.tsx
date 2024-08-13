import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import CardBestSeller from '../Cards/CardBestSeller'
import CardFood from '../Cards/CardFood';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Images = [
    { src: "/banner-1.png" },
    { src: "/banner-2.png" },
    { src: "/banner-3.png" },
    { src: "/banner-4.png" },
  ];
  


const CategoryCarrousel = () => {
  return (
    <div className='w-[100%] flex flex-col'>
        <div className='flex justify-between items-center'>
    <h2 className='text-lg'>Hamburguesas</h2>  <Link href={"#"}><Button className='text-red-400'>ver mas</Button></Link>
        </div>
    <Carousel opts={{ align: "start" }} className="w-[100%]">
    <CarouselContent className="flex justify-start">
      {Images.map((image, index) => (
        <CarouselItem className="basis-[280px] h-[100px] md:basis-[350px] md:h-[120px]" key={index}>
            <CardFood/>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  </div>
  )
}

export default CategoryCarrousel