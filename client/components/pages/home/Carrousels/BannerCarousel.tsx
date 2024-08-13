"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


const Images = [
  {src:"/banner-1.png"},
  {src:"/banner-2.png"},
  {src:"/banner-3.png"},
  {src:"/banner-4.png"},
]
 
export function BannerCarousel() {
  return (
    <Carousel opts={{loop:true,align:"center"}}  plugins={[Autoplay({delay:3000,stopOnInteraction:false})]} className="rounded-[20px] w-[100%] h-[30vh] max-h-[700px] min-h-[280px] sm:h-[40vh] lg:h-[50vh] overflow-hidden gap-0  mb-6 hover:cursor-grab">
      <CarouselContent  className="-ml-0 h-[100%]">
        {Images.map((image, index) => (
          <CarouselItem  className="py-0 h-[100%] w-[300px] pl-0 m-0 relative" key={index}>
            
            <Image src={image.src}  fill  style={{
              objectFit:"fill",
        }} alt="hamburger" />
       
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}