"use client";
import { FormField } from "@/components/ui/form";
import React, { useEffect, useRef } from "react";
import FormWhatsApp from "../Forms.tsx/FormOrderWhatsApp";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const ModalOrder = ({ closeModal, isOpen, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      console.log(!ref.current.contains(event.target as Node))
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  if (!isOpen) return;

  return (
    <div
      ref={ref}
      className="bg-white shadow-3xl py-2 w-[300px] sm:w-[500px] flex justify-center rounded-[20px] fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"
    >
     {children}
    </div>
  );
};

export default ModalOrder;
