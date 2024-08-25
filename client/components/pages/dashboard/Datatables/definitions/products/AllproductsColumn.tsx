import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"


export type Product = {
    id:string,
    title:string,
    bestSelling: boolean,
    imageProduct:string,
    price:number,
    category: "Haburguersas" | "Pasta" | "Ensaladas"
    description:string
}



export const allProductsColumn: ColumnDef<Product>[] =  [
   {
    accessorKey:"id",
    header: "Id Producto"
   },
   {
    accessorKey: "title",
    header:"Titulo"
   },{
    accessorKey: "description",
    header: "Descripción"
   },
   {
    accessorKey: "price",
    header:"Precio"
   },{
    accessorKey: "category",
    header: "Categoria"
   },{
    accessorKey: "bestSelling",
    header: "Mas vendido"
   },
   {
    accessorKey: "imageProduct",
    header: "Imagen"
   },
   {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original 
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(payment.id))}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  ];
  