import { useState } from "react";

export const useDataPicker = () => {
  const [isOpen, setOpen] = useState(false);

  const closeDataPicker = () => {
    setOpen(false);
  };

  const switchDataPicker = () => {
    setOpen(!isOpen)
  }


  return {
    closeDataPicker,
    switchDataPicker,
    isOpen
  }

};
