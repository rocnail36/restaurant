import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Heart } from 'lucide-react'

const Favorites = () => {
  return (
    <Sheet >
    <SheetTrigger> <Heart   className='text-white fill-white'/> </SheetTrigger>
    <SheetContent  className="w-full bg-white p-0">
      <SheetHeader>
        <div className='bg-red-500 h-[50px] w-full '>

        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  )
}

export default Favorites