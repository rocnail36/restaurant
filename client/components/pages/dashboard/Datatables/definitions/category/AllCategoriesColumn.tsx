"use client";

import { ColumnDef } from "@tanstack/react-table";
import { startOfDay } from "date-fns";
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
import GlobalModal from "@/components/pages/home/modals/GlobalModal";
import { useModal } from "@/components/pages/home/modals/hook/useModal";
import CategoryForm from "../../../forms/FormCategory";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Category = {
  id: number;
  title: string;
};

export const allCategoriesColumn: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Id Categoria",
  },
  {
    accessorKey: "title",
    header: "Nombre",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original 
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
            <DropdownMenuItem onClick={openModal}>Ver Categoria</DropdownMenuItem>
            <DropdownMenuItem>Eliminar Categoria</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <GlobalModal isOpen={isOpen} closeModal={closeModal} isControlled>
          <CategoryForm category={category}/>
        </GlobalModal>
        </>
      )
    },
  },
];
