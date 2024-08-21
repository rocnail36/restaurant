import ButtonPrimary from "@/components/global/ButtonPrimary";
import Whatsapp from "@/components/global/Whatsapp";
import { cn } from "@/lib/utils";
import { ArrowLeftCircle, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Product = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="relative flex flex-col md:flex-row">
          {children}
    </div>
  );
};

type ProductImageP = {
  className?: string;

  children?: React.ReactNode;
};

export const ProductImage = ({
  className ="min-h-[300px] md:w-1/2 lg:w-4/6 lg:h-[500px]",
  children,
}: ProductImageP) => {
  return <div className={`relative ${className}`} style={{viewTransitionName:"image"}}>{children}</div>;
};

export const ProductContent = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col gap-2 md:w-1/2 bg-white rounded-lg p-2 font-semibold text-2xl",className)}>{children}</div>;
};

type ProductTitleP = {
  className?: string;
  children: React.ReactNode;
};

export const ProductTitle = ({ children, className = "mb-2" }: ProductTitleP) => {
  return <h1 className={className}>{children}</h1>;
};

type ProductCategoryP = {
  className?: string,
  children:React.ReactNode
};

export const ProductCategory = ({
  className,
  children 
}: ProductCategoryP) => {
  return (
    <div className={twMerge("flex items-center gap-2 mb-8 text-lg",className)}>
      <Star size={20} fill="#202020" />
      <h3>{children}</h3>
    </div>
  );
};


type ProductPriceP = {
    className?:string,
    children: React.ReactNode
}
export const ProductPrice = ({children, className}:ProductCategoryP) => {
    return (
        <p className={twMerge("text-red-400 text-2xl font-semibold mb-2",className)}>$: {children}</p>
    )
}


export const ProductDescription = ({children}:{children:React.ReactNode}) => {
    return (<div className="text-base text-gray-800 mb-12">
                {children}
            </div>
)
}

const hola = () => {
  return (
    <>
      <ArrowLeftCircle className="absolute top-2 left-2 text-white" size={40} />
      <Heart className="absolute top-2 right-2 text-white" size={40} />
    </>
  );
};

export default Product;
