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
import GlobalModal from "@/components/pages/home/modals/GlobalModal"
import ProductForm from "../../../forms/FormProduct"
import { useModal } from "@/components/pages/home/modals/hook/useModal"


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
    header:"Nombre"
   },{
    accessorKey: "description",
    header: "Descripción",
    cell: ({row}) => {
      const value = row.getValue("description") as string

      return  <div>{value.slice(0,15)}...</div>
        }
   },
   {
    accessorKey: "price",
    header:"Precio"
   },{
    accessorKey: "category",
    header: "Categoria"
   },{
    accessorKey: "bestSelling",
    header: "Mas vendido",
    cell: ({row}) => {
      const isBestSelling = row.getValue("bestSelling") as Boolean
      return <div>  {isBestSelling ? "si": "no"} </div>
    },
    filterFn: (row,columnId, filterValue) => {
      
      const isBestSelling = row.getValue(columnId)
      const isBestSellingFilterValue = filterValue == "si" ? true : false 
      return isBestSelling == isBestSellingFilterValue
    }
  
   },
   {
    accessorKey: "imageProduct",
    header: "Imagen"
   },
   {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
      const {closeModal,isOpen,openModal} = useModal()
 
      return (
    <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opciones</DropdownMenuLabel>
            <DropdownMenuItem onClick={openModal}>Ver producto</DropdownMenuItem>
            <DropdownMenuItem>Eliminar Producto</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <GlobalModal closeModal={closeModal} isControlled isOpen={isOpen}>
          <ProductForm  product={product}/>
        </GlobalModal>
    </>
      )
    },
  },
  ];
  