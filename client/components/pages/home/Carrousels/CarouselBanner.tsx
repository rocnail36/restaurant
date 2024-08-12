"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"



const Images = [
  {src:"/banner-1.png"},
  {src:"/banner-2.png"},
  {src:"/banner-3.png"},
  {src:"/banner-4.png"},
]
 
export function CarouselBanner() {
  return (
    <Carousel opts={{loop:true}}  plugins={[Autoplay({delay:3000,stopOnInteraction:false})]} className="rounded-[20px] overflow-hidden gap-0 w-[100%] mb-6 hover:cursor-grab ">
      <CarouselContent >
        {Images.map((image, index) => (
          <CarouselItem className="overflow-hidden p-0 gap-0 m-0 relative" key={index}>
            
            <Image src={image.src} width={2000} height={2000}  style={{
          width: '100%',
          height: 'auto',
        }} alt="hamburger" />
       
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}