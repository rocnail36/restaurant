import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronsRight, Minus, MinusCircle, Plus, PlusCircle, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CardCart_buttons from './CardCart_buttons'

const CardCart = () => {
  return (
    <Card className="relative h-[100px] rounded-xl overflow-hidden flex hover:cursor-pointer">
    <div className="aspect-square h h-full bg-red-400 relative">
      <Image
        src={"/example.jpg"}
        fill
        style={{ objectFit: "cover" }}
        alt="hamburguesa"
      />
    </div>
    <div className='flex flex-col justify-center items-start mr-auto'>
    <CardHeader className="py-[0] pl-[4px]">
      <CardTitle className="text-base md:text-lg">Shedar Am</CardTitle>
    
    </CardHeader>
    <CardContent className="pb-[6px] pl-[4px]">
      <p>
        <span className="text-red-600 ">$</span> 500
      </p>
    </CardContent>
    </div>
    
    <CardCart_buttons/>
  
  </Card>
  )
}

export default CardCart