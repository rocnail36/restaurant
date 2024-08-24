import { Code, Home, Image, LucideProps, NotebookPen, ScrollText, Table, User, Utensils } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

type link =  {
    name:string,
    src: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const navbarLinks: link[] = [
{
 name: "Inicio",
 src: "/dashboard",
 icon: Home
},
{
 name: "Mesas",
 src: "/dashboard/tables",
 icon: Table
},
{
    name: "Pedidos",
    src: "/dashboard/orders",
    icon: NotebookPen
},
{
    name:"Productos",
    src:"/dashboard/products",
    icon: Utensils
},
{
    name:"Categorias",
    src: "/dashboard/categories",
    icon: ScrollText
},
{
    name:"Banners",
    src: "/dashboard/banners",
    icon: Image
},
{
    name: "Usuarios",
    src:"/dashboard/users",
    icon: User
},
{
    name: "Codigos",
    src: "/dashboard/codes",
    icon: Code
},
]