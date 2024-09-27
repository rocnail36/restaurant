"use client";
import { FormField } from "@/components/ui/form";
import React, { useEffect, useRef } from "react";
import FormWhatsApp from "../Forms.tsx/FormOrderWhatsApp";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
  isControlled?: boolean
};

const GlobalModal = ({ closeModal, isOpen, children,className,isControlled = false}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
     console.log(event.target)
      closeModal()
    }
  };

  useEffect(() => {
    if(isControlled) return
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  if (!isOpen) return;

  return (
    <div
      ref={ref}
      className={cn("bg-white shadow-3xl py-4 w-[300px] sm:w-[500px] lg:w-[800px] flex justify-center rounded-[20px] fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] z-[10]",className)}
    >
      {isControlled && <X onClick={closeModal} className="absolute top-2 right-2 text-red-400 cursor-pointer"/>}
     {children}
    </div>
  );
};

export default GlobalModal;
