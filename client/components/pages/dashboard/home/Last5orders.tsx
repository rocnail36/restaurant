import React from "react";
import { DefaultTable } from "../Datatables/defaultTable/dataTables";
import { fakeOrderdata } from "@/fakeData/Orders";
import { fiveOrdersColumn } from "../Datatables/definitions/orders/fiveOrdersColumn";


const Last5orders = () => {
  return (
    <div className="flex flex-col max-w-[97vw]  gap-2">
      
      <DefaultTable columns={fiveOrdersColumn} data={fakeOrderdata} />
    </div>
  );
};

export default Last5orders;
