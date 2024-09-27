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
import { fakeOrderData20 } from "@/fakeData/Orders";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "@/components/pages/dashboard/Datatables/FilterTable/DatePicker";
import { DateFromTo } from "@/components/pages/dashboard/Datatables/types/DateFromTo";
import { Pagination } from "@/components/pages/dashboard/Datatables/FilterTable/Pagination";
import { allOrdersColumn } from "@/components/pages/dashboard/Datatables/definitions/orders/AllOrdersColumn";

const page = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data: fakeOrderData20,
    columns: allOrdersColumn,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
  });

  const setFilterDate = (value: DateFromTo) => {
    table.getColumn("date")?.setFilterValue(value);
  };

  return (
    <Container>
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Pedidos</h1>
        <div className="flex justify-center md:justify-start mb-6 gap-4 flex-wrap">
          <DatePicker setFilterDate={setFilterDate} />

          <Select
            onValueChange={(e) => table.getColumn("table")?.setFilterValue(e)}
          >
            <SelectTrigger className="w-[180px] focus:ring-red-400">
              <SelectValue placeholder="Mesa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=" ">todas</SelectItem>
              <SelectItem value="Table 1">Table 1</SelectItem>
              <SelectItem value="Table 2">Table 2</SelectItem>
              <SelectItem value="Table 3">Table 3</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => {
              if (e == "all") {
                return table.getColumn("status")?.setFilterValue("");
              }
              table.getColumn("status")?.setFilterValue(e);
            }}
          >
            <SelectTrigger className="w-[180px] focus:ring-red-400">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">todo</SelectItem>
              <SelectItem value="pending">Pendiente</SelectItem>
              <SelectItem value="paid">Pagado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FilterTable table={table} columns={allOrdersColumn} />
        <Pagination table={table} className="absolute bottom-1 right-0"   />
     
    </Container>
  );
};

export default page;
