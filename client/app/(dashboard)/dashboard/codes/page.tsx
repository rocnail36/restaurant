"use client";
import ButtonPrimary from "@/components/global/ButtonPrimary";
import { allCategoriesColumn } from "@/components/pages/dashboard/Datatables/definitions/category/AllCategoriesColumn";
import { allCodesColumn } from "@/components/pages/dashboard/Datatables/definitions/codes/allCodesColumn";
import FilterTable from "@/components/pages/dashboard/Datatables/FilterTable/FilterTable";
import { Pagination } from "@/components/pages/dashboard/Datatables/FilterTable/Pagination";
import FormCode from "@/components/pages/dashboard/forms/FormCode";
import Container from "@/components/pages/dashboard/Layout/Container";
import GlobalModal from "@/components/pages/home/modals/GlobalModal";
import { useModal } from "@/components/pages/home/modals/hook/useModal";
import { Button } from "@/components/ui/button";
import { fakeCategories } from "@/fakeData/Categories";
import { fakeCodes } from "@/fakeData/Code";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const page = () => {
  const table = useReactTable({
    data: fakeCodes,
    columns: allCodesColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const {closeModal,isOpen,openModal} = useModal()

  return (
    <Container>
      <GlobalModal isOpen={isOpen} closeModal={closeModal} isControlled>
        <FormCode/>
      </GlobalModal>
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Productos</h1>
      <div className="flex justify-center md:justify-start mb-6 gap-4 flex-wrap">
        <ButtonPrimary onClick={openModal} text="Crear"/>
      </div>
      <FilterTable table={table} columns={fakeCodes} />
      <Pagination table={table} className="absolute bottom-1 right-0" />
    </Container>
  );
};

export default page;
