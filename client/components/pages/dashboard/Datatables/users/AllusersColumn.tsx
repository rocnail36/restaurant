"use client"
 
import GlobalModal from "@/components/pages/home/modals/GlobalModal"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import UserForm from "../../forms/FormUser"
import { useModal } from "@/components/pages/home/modals/hook/useModal"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type  User = {
  id: number
  name: string
  email:string
  role: string
}
     
 
export const allUsersColumn: ColumnDef<User>[] = [
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
            return <div className="text-left font-medium">{email.slice(0,6)}...</div>
          },
         
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const {closeModal,isOpen,openModal
      } = useModal()
      const user = row.original 
 
      return (

        <>
        <GlobalModal isOpen={isOpen} closeModal={closeModal} isControlled>
          <UserForm user={user}/>
        </GlobalModal>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opciones</DropdownMenuLabel>
            <DropdownMenuItem onClick={openModal}>Ver Usuario</DropdownMenuItem>
            <DropdownMenuItem>Eliminar Usuario</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </>
      )
    },
  },
]
