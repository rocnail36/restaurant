"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type  Order = {
  id: number
  name: string
  status: "pending" | "processing" | "paid"  
  date: string
  table: string
  note: string,
  code: string,
  total: number,
}
     
 
export const fiveOrdersColumn: ColumnDef<Order>[] = [
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
    header: "Nombre"
  },
  {
    accessorKey: "note",
    header: "Nota"
  },
  {
    accessorKey: "code",
    header: "Codigo"
  },
  {
    accessorKey: "total",
    header: "Total"
  },
  {
    accessorKey: "date",
    header: "Fecha"
  }
]
