import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const lato = Lato({ subsets: ["latin"], weight:["100","300","400","700","900"],variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Restaurant App",
  description: "aplicacion para administrar restaurantes, pedidos, mesas, trabajadores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "font-lato",
          lato.variable
        )}>{children}</body>
    </html>
  );
}
