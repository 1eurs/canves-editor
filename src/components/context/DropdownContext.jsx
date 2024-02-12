import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <DropdownContext.Provider value={{ openDropdown, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownContext;
