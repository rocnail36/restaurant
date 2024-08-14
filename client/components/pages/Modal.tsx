"use client";
import { ArrowBigLeft, ArrowLeftCircle, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import ButtonPrimary from "../global/ButtonPrimary";

const Modal = ({ isOpen = false }) => {
    


  return (
    <div className="bg-white  w-[90%] max-w-[400px] fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-xl shadow-3xl overflow-hidden">
          <div className="relative h-[600px]">
           
           <div className="relative h-[50%]">
           <Image src={"/example.jpg"} fill alt="image example"/>
           </div>


           <div className="h-[70%] bg-white rounded-lg p-2 font-semibold text-2xl">
            <h1 className="mb-2">Shedar Am</h1>
            <hr className="top mb-2" />
            <div className="flex items-center gap-2 mb-8">
                <Star size={20}  fill="#202020"/> <h3 className="text-lg">Hamburguesas</h3>
            </div>
            <p className="text-red-400 text-2xl font-semibold mb-2">$ 56.00</p>
            <p className="text-base text-gray-800 mb-12">1 carner queso sheddar jamon salsa</p>   
             
             <div className="flex gap-2 m-auto justify-center">
             
             <ButtonPrimary text='agregar a' className='bg-red-500 hover:bg-red-700 text-base flex items-center gap-[.5px]' icon={<ShoppingCart size={20}/>}/>
             <ButtonPrimary text='pedir por' className='flex items-center gap-2 bg-green-500 hover:bg-green-700 text-base'/>
            </div>
           </div>
        
            <ArrowLeftCircle className="absolute top-2 left-2 text-white"/>

          </div>
    </div>
  );
};

export default Modal;
