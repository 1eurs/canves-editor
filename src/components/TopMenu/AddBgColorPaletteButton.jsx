import React, { useCallback, useContext, useState } from "react";
import DropdownContext from "../context/DropdownContext";
import { useEditor } from "@layerhub-io/react";
import { colors } from "../data/BgColors";

const AddBgColorPaletteButton = () => {
  const editor = useEditor();
  const { openDropdown, toggleDropdown } = useContext(DropdownContext);
  const isOpen = openDropdown === "bg";

  const changeBg = useCallback(
    (color) => {
      editor.frame.setBackgroundColor(color);
    },
    [editor]
  );

  return (
    <div className="relative z-50">
      <button
        onClick={() => toggleDropdown("bg")}
        className="px-4 py-2 bg-[#E0CCBE] text-[#3C3633] font-medium rounded hover:bg-[#747264] focus:outline-none"
      >
        Background
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full max-w-xs grid grid-cols-3 gap-2 bg-[#EEEDEB] shadow-lg rounded-lg p-3 z-50">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-full h-7 rounded cursor-pointer hover:opacity-75"
              style={{ backgroundColor: color }}
              onClick={() => {
                changeBg(color);
              }}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddBgColorPaletteButton;
