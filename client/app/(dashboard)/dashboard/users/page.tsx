"use client";
import FilterTable from "@/components/pages/dashboard/Datatables/FilterTable/FilterTable";
import Container from "@/components/pages/dashboard/Layout/Container";
import React from "react";
import {
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel
} from "@tanstack/react-table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Pagination } from "@/components/pages/dashboard/Datatables/FilterTable/Pagination";
import { allUsersColumn } from "@/components/pages/dashboard/Datatables/users/AllusersColumn";
import { fakeUsers } from "@/fakeData/Users";
import { Input } from "@/components/ui/input";
import ButtonPrimary from "@/components/global/ButtonPrimary";
import GlobalModal from "@/components/pages/home/modals/GlobalModal";
import { useModal } from "@/components/pages/home/modals/hook/useModal";
import FormUser from "@/components/pages/dashboard/forms/FormUser";


const page = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data: fakeUsers,
    columns: allUsersColumn,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
  });

  const {closeModal,isOpen,openModal} = useModal()


  return (
    <Container>
      <GlobalModal isOpen={isOpen} closeModal={closeModal} isControlled>
        <FormUser />
      </GlobalModal>
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Pedidos</h1>
        <div className="flex justify-center md:justify-start mb-6 gap-4 flex-wrap">
          <ButtonPrimary onClick={openModal} text="Crear"/>
        <Input
          placeholder="Filtrar por nombre"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-[150px] focus-visible:ring-red-400"
        />
         <Input
          placeholder="Filtrar por correo"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-[150px] focus-visible:ring-red-400"
        />
        
          <Select
            onValueChange={(e) => {
              if (e == "all") {
                return table.getColumn("role")?.setFilterValue("");
              }
              table.getColumn("role")?.setFilterValue(e);
            }}
          >
            <SelectTrigger className="w-[180px] focus:ring-red-400">
              <SelectValue placeholder="Rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Rol</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="mesero">Mesero</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FilterTable table={table} columns={allUsersColumn} />
        <Pagination table={table} className="absolute bottom-1 right-0"   />
     
    </Container>
  );
};

export default page;
