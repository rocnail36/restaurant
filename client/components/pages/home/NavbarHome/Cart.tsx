import React from 'react'
import { Sheet, SheetContent, SheetHeader,  SheetTrigger } from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'
import CardCart from '../Cards/CardCart'
import Cart_PaySection from './Cart_PaySection'
import ButtonPrimary from '@/components/global/ButtonPrimary'


export const Cart = () => {
  return (
    <Sheet>
    <SheetTrigger><ShoppingCart className='text-white fill-white'/> </SheetTrigger>
    <SheetContent className="w-full  bg-white p-0">
      <SheetHeader className='mb-4'>
        <div className='bg-red-500 h-[50px] flex justify-center items-center w-full'> 
             <ButtonPrimary className='text-white'  text='vaciar carrito'/>
        </div>
      </SheetHeader>
         <div className='px-2 h-[90%]  relative'>
          <CardCart/>
          <Cart_PaySection/>
         </div>
    </SheetContent>
  </Sheet>
  )
}
