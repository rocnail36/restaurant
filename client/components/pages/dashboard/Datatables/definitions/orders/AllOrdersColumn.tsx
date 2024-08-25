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
      console.log(value)
     console.log(from)
      if (!from && !to) return true;

      if (!from) return value <= new Date(to);

      if (!to) return startOfDay(value) >= startOfDay(new Date(from));


     return  value > new Date(from) && value < new Date(to)

      
    },
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
