import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
    table : {title:string,items: { name: string, quantity: number }[]}
}

const TableCard = ({table}:Props) => {
    const {items,title} = table
  return (
    <Card key={title}>
       <CardHeader>
         <CardTitle>{title}</CardTitle>
       </CardHeader>
       <CardContent>

        {items.map(({name,quantity}) => (
              <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400"/>  
              <p>{name}</p>
              <p>{quantity}</p>
              </div>
        ))}
       
        
       </CardContent>
       <CardFooter className="flex gap-2">
         <Button className="w-2/3">Listo</Button>
         <Button className="w-1/3 min-w-[60px]">Eliminar</Button>
       </CardFooter>
     </Card>
  )
}

export default TableCard