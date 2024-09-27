"use client";
import { ColumnDef } from "@tanstack/react-table";
import { startOfDay } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/components/pages/home/modals/hook/useModal";
import GlobalModal from "@/components/pages/home/modals/GlobalModal";
import { Button } from "@/components/ui/button";
import OrderForm from "../../../forms/FormOrder";
import { useRef } from "react";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id: number;
  name: string;
  status: "pending" | "processing" | "paid";
  date: string;
  table: string;
  note: string;
  code: string;
  total: number;
};

export const allOrdersColumn: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "id orden",
  },
  {
    accessorKey: "table",
    header: "Mesa",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "note",
    header: "Nota",
  },
  {
    accessorKey: "code",
    header: "Codigo",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "date",
    header: "Fecha",
    filterFn: function (row, columId, filterValue) {
      const value = new Date(row.getValue(columId));

      const { from, to } = filterValue;
      console.log(value);
      console.log(from);
      if (!from && !to) return true;

      if (!from) return value <= new Date(to);

      if (!to) return startOfDay(value) >= startOfDay(new Date(from));

      return value >= new Date(from) && value <= new Date(to);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      const { isOpen, closeModal, openModal } = useModal();
      
 
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button  variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opciones</DropdownMenuLabel>
              <DropdownMenuItem onClick={openModal}>
                Ver pedido
              </DropdownMenuItem>
              <DropdownMenuItem>Eliminar pedido</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <GlobalModal isOpen={isOpen} isControlled closeModal={closeModal}>
            <OrderForm order={order}/>
          </GlobalModal>
        </>
      );
    },
  },
];
