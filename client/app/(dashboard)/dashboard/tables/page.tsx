import TableCard from "@/components/pages/dashboard/tables/TableCard";
import { table } from "console";
import React from "react";


const mesas = [
  {
    title: "Mesa 1",
    items: [
      { name: "Hamburguesa Clasica", quantity: 2 },
      { name: "Pizza Margarita", quantity: 4 },
      { name: "Papas Fritas Grande", quantity: 6 },
      { name: "Refresco", quantity: 6 }
    ]
  },
  {
    title: "Mesa 2",
    items: [
      { name: "Hamburguesa Clasica", quantity: 2 },
      { name: "Pizza Margarita", quantity: 4 },
      { name: "Papas Fritas Grande", quantity: 6 },
      { name: "Refresco", quantity: 6 }
    ]
  },
  {
    title: "Mesa 3",
    items: [
      { name: "Ensalada César", quantity: 3 },
      { name: "Sopa de Pollo", quantity: 2 },
      { name: "Jugo de Naranja", quantity: 5 }
    ]
  },
  {
    title: "Mesa 4",
    items: [
      { name: "Tacos de Pollo", quantity: 4 },
      { name: "Nachos con Queso", quantity: 3 },
      { name: "Cerveza", quantity: 6 }
    ]
  },
  {
    title: "Mesa 5",
    items: [
      { name: "Sándwich de Jamón", quantity: 2 },
      { name: "Batido de Fresa", quantity: 4 },
      { name: "Agua Mineral", quantity: 6 }
    ]
  }
];


const page = () => {
  return (
    <div className="p-4 w-[90%] flex justify-start items-start content-start justi flex-wrap gap-2">
       {mesas.map((table) => (
        <TableCard key={table.title} table={table}/>
       ))}
    </div>
  );
};

export default page;
