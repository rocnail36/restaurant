import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardBestSeller from "../Cards/CardBestSeller";

const Images = [
  { src: "/banner-1.png" },
  { src: "/banner-2.png" },
  { src: "/banner-3.png" },
  { src: "/banner-4.png" },
];

export function BestSellerCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-[100%]">
      <CarouselContent className="flex justify-start">
        {Images.map((image, index) => (
          <CarouselItem className="basis-[150px] h-[170px] md:basis-[200px] md:h-[240px]" key={index}>
              <CardBestSeller/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
