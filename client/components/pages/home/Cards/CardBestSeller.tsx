import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {Link} from "next-view-transitions";

const CardBestSeller = () => {
  return (
    <Link href={"/home/product/1"} scroll={false}>
      <Card className="relative rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 z-10 bg-red-700 text-white text-xs p-2">
          mas vendido
        </div>
        <div className="w-[100%] h-[75px] md:h-[120px] bg-red-400 relative"  style={{viewTransitionName:"image"}}>
          <Image
            src={"/example.jpg"}
            fill
            style={{ objectFit: "cover"}}
            alt="hamburguesa"
          />
        </div>
        <CardHeader className="py-[0] px-2">
          <CardTitle className="text-base md:text-lg">Shedar Am</CardTitle>
          <CardDescription className="text-xs md:text-sm truncate">
            1 carne queso sheddar
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-[6px] px-2">
          <p>
            <span className="text-red-600">$</span> 500
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardBestSeller;
