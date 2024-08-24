import ButtonPrimary from "@/components/global/ButtonPrimary";
import Whatsapp from "@/components/global/Whatsapp";
import Product, {
  ProductCategory,
  ProductContent,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "@/components/pages/home/Product/Product";
import Modal from "@/components/pages/home/modals/Modal";
import { ArrowLeftCircle, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Modal>
      <Product>
        <ProductImage>
          <Image
            src={"/example.jpg"}
            fill
            style={{ objectFit: "cover", viewTransitionName: "image" }}
            alt="image example"
          />
          <ArrowLeftCircle
            className="absolute top-2 left-2 text-white z-50 hover:cursor-pointer"
            size={40}
          />
          <Heart
            className="absolute top-2 right-2 text-white z-50 hover:cursor-pointer"
            size={40}
          />
        </ProductImage>

        <ProductContent className="flex flex-col justify-between md:m-0 py-12">
          <div>
            <ProductTitle>Hamburguer Am</ProductTitle>
            <hr />
            <ProductCategory>Hamburguer</ProductCategory>
            <ProductPrice>58.00</ProductPrice>
            <ProductDescription>
              1 carne queso sheedar tocineta
            </ProductDescription>
          </div>

          <div className="flex gap-2 mx-auto justify-center ">
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
      </Product>
    </Modal>
  );
};

export default page;
