import { useState } from "react";

export const usePasswordVisibility = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return {
    visible,
    toggleVisibility,
    inputType: visible ? "text" : "password",
  };
};
