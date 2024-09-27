import React from "react";
import { DefaultTable } from "../Datatables/defaultTable/dataTables";
import { fakeOrderdata } from "@/fakeData/Orders";
import { fiveOrdersColumn } from "../Datatables/definitions/orders/fiveOrdersColumn";
import { Button } from "@/components/ui/button";

const Last5orders = () => {
  return (
    <div className="flex flex-col max-w-[97vw]  gap-2">
      <div className="flex justify-between">
        <h2 className="text-xl">Ultimas 5 ordenes</h2>
        <Button className="bg-white text-red-400 hover:bg-white hover:scale-105 transition-all">
          ver mas
        </Button>
      </div>
      <DefaultTable columns={fiveOrdersColumn} data={fakeOrderdata} />
    </div>
  );
};


export default Last5orders;