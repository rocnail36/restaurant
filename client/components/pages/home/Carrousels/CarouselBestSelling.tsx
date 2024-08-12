import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Images = [
  { src: "/banner-1.png" },
  { src: "/banner-2.png" },
  { src: "/banner-3.png" },
  { src: "/banner-4.png" },
];

export function CarouselBestSeller() {
  return (
    <Carousel opts={{ align: "start" }} className="w-[100%]">
      <CarouselContent className="flex justify-start">
        {Images.map((image, index) => (
          <CarouselItem className="basis-[200px] h-[225px] " key={index}>
            <Card className="relative rounded-3xl overflow-hidden">
               <div className="absolute top-0 left-0 z-10 bg-red-400 text-white text-sm p-2">
                mas vendido
               </div>
              <div className="w-[100%] h-[100px] bg-red-400 relative">
                <Image
                  src={"/example.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="hamburguesa"
                />
              </div>
              <CardHeader className="py-[10px]">
                <CardTitle className="text-lg">Shedar Am</CardTitle>
                <CardDescription>1 carne queso sheddar ...</CardDescription>
              </CardHeader>
              <CardContent className="pb-[5px]">
                <p>
                  <span className="text-red-600">$</span> 500
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
