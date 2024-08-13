import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from 'next/image';
import {  ChevronsRight } from 'lucide-react';

const CardFood = () => {
  return (
    <Card className="relative h-[100%] rounded-xl overflow-hidden flex hover:cursor-pointer">
   <div className="w-[50%] h-full bg-red-400 relative">
     <Image
       src={"/example.jpg"}
       fill
       style={{ objectFit: "cover" }}
       alt="hamburguesa"
     />
   </div>
   <div className='flex flex-col justify-center'>
   <CardHeader className="py-[0] px-2">
     <CardTitle className="text-base md:text-lg">Shedar Am</CardTitle>
     <CardDescription className="text-xs md:text-base truncate">1 carne queso sheddar </CardDescription>
   </CardHeader>
   <CardContent className="pb-[6px] px-2">
     <p>
       <span className="text-red-600">$</span> 500
     </p>
   </CardContent>
   </div>
   <ChevronsRight className='stroke-red-600'/>
 </Card>
  )
}

export default CardFood