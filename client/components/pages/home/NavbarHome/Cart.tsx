import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'

export const Cart = () => {
  return (
    <Sheet>
    <SheetTrigger><ShoppingCart className='text-white fill-white'/> </SheetTrigger>
    <SheetContent className="w-full bg-white p-0">
      <SheetHeader>
        <div className='bg-red-500 h-[50px] w-full '>

        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  )
}
