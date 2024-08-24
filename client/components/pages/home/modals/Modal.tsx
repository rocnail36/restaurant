"use client";
import React, { useEffect } from "react";


const Modal = ({children} : {children:React.ReactNode}) => {
    


  return (
    <div className="bg-red-300 w-[90%] lg:max-w-[820px] fixed top-[50%] left-[50%]  translate-y-[-50%] translate-x-[-50%] rounded-xl shadow-3xl overflow-hidden">
     {children}
    </div>
  );
};

export default Modal;
