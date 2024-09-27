import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"
 import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useForm } from "react-hook-form";
import { useModal } from "@/components/pages/home/modals/hook/useModal";
import GlobalModal from "@/components/pages/home/modals/GlobalModal";
import FormCode from "../../../forms/FormCode";


export type Code = {
    id:string,
    code:string,
    discount: number
}


export const allCodesColumn: ColumnDef<Code>[] = [
    {
      accessorKey: "id",
      header: "Id Categoria",
    },
    {
      accessorKey: "code",
      header: "Codigo",
    },{
       accessorKey: "discount",
       header: "descuento"
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const code = row.original 
        const {closeModal,isOpen,openModal} = useModal()
        return (
          <> 
          <GlobalModal isOpen={isOpen} isControlled closeModal={closeModal}>
              <FormCode code={code}/>
          </GlobalModal>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>opciones</DropdownMenuLabel>
              <DropdownMenuItem onClick={openModal}>ver codigo</DropdownMenuItem>
              <DropdownMenuItem>eliminar codigo</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
                </>
        )
      },
    },
  ];
  