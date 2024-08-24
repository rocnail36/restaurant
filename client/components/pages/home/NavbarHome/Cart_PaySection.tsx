"use client";
import ButtonPrimary from "@/components/global/ButtonPrimary";
import Whatsapp from "@/components/global/Whatsapp";
import React from "react";
import ModalOrder from "../modals/ModalOrder";
import { useModal } from "../modals/hook/useModal";
import FormWhatsApp from "../Forms.tsx/FormOrderWhatsApp";
import FormOrderTable from "../Forms.tsx/FormOrderTable";

const Cart_PaySection = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isOpenModalTable,
    openModal: openModalTable,
    closeModal: closeModalTable,
  } = useModal();

  return (
    <>
      <div className="absolute bottom-4 left-[50%] translate-x-[-50%] flex flex-col items-center  w-[90%] justify-center gap-4 border-solid border-gray-400  py-2 shadow-3xl rounded-xl">
        <p>
          Total: ${" "}
          <span className="text-lg text-green-500 font-semibold">56</span>
        </p>
        <hr className="border-gray-300 w-full" />
        <div className="flex gap-2">
          <ButtonPrimary
            onClick={openModal}
            text="pedir por"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-700"
            icon={<Whatsapp config={{ height: 20, width: 20 }} />}
          />
          <ButtonPrimary
            onClick={openModalTable}
            text="pedir en mesa"
            className="bg-red-500 hover:bg-red-700"
          />
        </div>
      </div>
      <ModalOrder isOpen={isOpen} closeModal={closeModal}>
        <FormWhatsApp />
      </ModalOrder>
      <ModalOrder isOpen={isOpenModalTable} closeModal={closeModalTable}>
        <FormOrderTable />
      </ModalOrder>
    </>
  );
};

export default Cart_PaySection;
