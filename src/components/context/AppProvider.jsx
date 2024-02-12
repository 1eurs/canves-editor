import React from "react";
import { DataProvider } from "./dataContext";
import { ScenesProvider } from "./ScenesContext";
import { DropdownProvider } from "./DropdownContext";

export const AppProvider = ({ children }) => {
  return (
    <DataProvider>
      <ScenesProvider>
        <DropdownProvider>{children}</DropdownProvider>
      </ScenesProvider>
    </DataProvider>
  );
};
