import ButtonPrimary from "@/components/global/ButtonPrimary";
import Whatsapp from "@/components/global/Whatsapp";
import { ArrowLeftCircle, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Product = () => {
  return (
    <div className="relative flex flex-col md:flex-row ">
      <ProductImage>
        <Image src={"/example.jpg"} fill alt="image example" />
      </ProductImage>

      <ProductContent>
        <ProductTitle>Hamburguer Am</ProductTitle>
        <ProductCategory>Hambueger</ProductCategory>
        <ProductPrice>58.00</ProductPrice>
        
        <div className="flex gap-2 m-auto justify-center">
          <ButtonPrimary
            text="agregar a"
            className="bg-red-500 hover:bg-red-700 text-base flex items-center gap-[.5px]"
            icon={<ShoppingCart size={20} />}
          />

          <ButtonPrimary
            text="pedir por"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-base"
            icon={<Whatsapp config={{ height: 20, width: 20 }} />}
          />
        </div>
      </ProductContent>
    </div>
  );
};

type ProductImageP = {
  className?: string;

  children?: React.ReactNode;
};

const ProductImage = ({
  className = "h-[300px] md:w-1/2 lg:w-4/6 lg:h-[500px]",
  children,
}: ProductImageP) => {
  return <div className={`relative ${className}`} style={{viewTransitionName:"image"}}>{children}</div>;
};

const ProductContent = ({
  children,
  className = "flex flex-col gap-2 md:m-auto  bg-white rounded-lg p-2 font-semibold text-2xl",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

type ProductTitleP = {
  className?: string;
  children: React.ReactNode;
};

const ProductTitle = ({ children, className = "mb-2" }: ProductTitleP) => {
  return <h1 className={className}>{children}</h1>;
};

type ProductCategoryP = {
  className?: string,
  children:React.ReactNode
};

const ProductCategory = ({
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
const ProductPrice = ({children, className}:ProductCategoryP) => {
    return (
        <p className={twMerge("text-red-400 text-2xl font-semibold mb-2",className)}>$: {children}</p>
    )
}


const ProductDescription = () => {
    return (<p className="text-base text-gray-800 mb-12">
                1 carner queso sheddar jamon salsa
            </p>
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
