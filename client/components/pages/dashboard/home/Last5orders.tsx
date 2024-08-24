import React from "react";
import { DataTable } from "../tables/orders/dataTables";
import { fakeOrderdata } from "@/fakeData/Orders";
import { fiveOrdersColumn } from "../tables/orders/fiveOrdersColumn";

const Last5orders = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex">
        <h2 className="mr-auto text-2xl">Ultimas 5 ordenes</h2>
        <button className="self-end text-red-600">ver mas</button>
      </div>
      <DataTable columns={fiveOrdersColumn} data={fakeOrderdata} />
    </div>
  );
};

export default Last5orders;
