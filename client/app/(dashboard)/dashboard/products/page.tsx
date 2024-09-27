"use client"
import ButtonPrimary from '@/components/global/ButtonPrimary';
import { allProductsColumn } from '@/components/pages/dashboard/Datatables/definitions/products/AllproductsColumn';
import FilterTable from '@/components/pages/dashboard/Datatables/FilterTable/FilterTable';
import { Pagination } from '@/components/pages/dashboard/Datatables/FilterTable/Pagination';
import FormProduct from '@/components/pages/dashboard/forms/FormProduct';
import Container from '@/components/pages/dashboard/Layout/Container';
import GlobalModal from '@/components/pages/home/modals/GlobalModal';
import { useModal } from '@/components/pages/home/modals/hook/useModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fakeProducts } from '@/fakeData/Products';

import { ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, Table, useReactTable } from '@tanstack/react-table';

import React, { useState } from 'react'

const page = () => {

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data: fakeProducts,
    columns: allProductsColumn,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
  });
  const {closeModal,isOpen,openModal} = useModal()

  const changeFilter = (e:string, table:Table<any>,category:string) => {
    if(e == "all") return table.getColumn(category)?.setFilterValue("")
      table.getColumn(category)?.setFilterValue(e)
  }

  return (
    <Container>
      <GlobalModal isControlled isOpen={isOpen} closeModal={closeModal} >
        <FormProduct/>
      </GlobalModal>
    <h1 className="text-2xl font-semibold mb-4 text-gray-700">Productos</h1>
    <div className="flex justify-center md:justify-start mb-6 gap-4 flex-wrap">
      <ButtonPrimary onClick={openModal} text='Crear'/>
    <Input
          placeholder="Filtrar por nombre"
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-[150px] focus-visible:ring-red-400"
        />

      <Select
        onValueChange={e => changeFilter(e,table,"category")}
      >
        <SelectTrigger className="w-[180px] focus:ring-red-400">
          <SelectValue  placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Categoria</SelectItem>
          <SelectItem value="Haburguersas">Haburguesa</SelectItem>
          <SelectItem value="Pasta">Pasta</SelectItem>
          <SelectItem value="Ensalada">Ensalada</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={e => changeFilter(e,table,"bestSelling")}
      >
        <SelectTrigger className="w-[180px] focus:ring-red-400">
          <SelectValue placeholder="Mas vendido" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">mas vendido</SelectItem>
          <SelectItem value="si">si</SelectItem>
          <SelectItem value="no">no</SelectItem>
        </SelectContent>
      </Select>
    </div>


    <FilterTable table={table} columns={allProductsColumn} />
    <Pagination table={table} className="absolute bottom-1 right-0"   />
 
</Container>
  )
}

export default page