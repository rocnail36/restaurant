"use client";
import ButtonPrimary from "@/components/global/ButtonPrimary";
import { allCategoriesColumn } from "@/components/pages/dashboard/Datatables/definitions/category/AllCategoriesColumn";
import FilterTable from "@/components/pages/dashboard/Datatables/FilterTable/FilterTable";
import { Pagination } from "@/components/pages/dashboard/Datatables/FilterTable/Pagination";
import FormCategory from "@/components/pages/dashboard/forms/FormCategory";
import Container from "@/components/pages/dashboard/Layout/Container";
import GlobalModal from "@/components/pages/home/modals/GlobalModal";
import { useModal } from "@/components/pages/home/modals/hook/useModal";
import { Button } from "@/components/ui/button";
import { fakeCategories } from "@/fakeData/Categories";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const page = () => {
  const table = useReactTable({
    data: fakeCategories,
    columns: allCategoriesColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const {closeModal,isOpen,openModal} = useModal()


  return (
    <Container>
      <GlobalModal isOpen={isOpen} closeModal={closeModal}>
        <FormCategory />
      </GlobalModal>
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Categorias</h1>
      <div className="flex justify-center md:justify-start mb-6 gap-4 flex-wrap">
        <ButtonPrimary onClick={openModal} text="Crear"/>
      </div>
      <FilterTable table={table} columns={allCategoriesColumn} />
      <Pagination table={table} className="absolute bottom-1 right-0" />
    </Container>
  );
};

export default page;
