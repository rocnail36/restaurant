"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type  User = {
  id: number
  name: string
  email:string
  role: string
}
     
 
export const LastRegister: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "id orden",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey:"role",
    header: "Rol"
  },
  {
    accessorKey: "email",
    header: "Correo",
        cell: ({ row }) => {
            const email = row.getValue("email")  as string
           
       
            return <div className="text-right font-medium">{email.slice(0,6)}...</div>
          },
         
  }
]
