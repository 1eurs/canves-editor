import React, { useCallback, useContext, useState } from "react";
import DropdownContext from "../context/DropdownContext";
import DataContext from "../context/dataContext";
import { useEditor } from "@layerhub-io/react";
import { Texts } from "../data/Texts";

const AddTextButton = () => {
  const { openDropdown, toggleDropdown } = useContext(DropdownContext);
  const isOpen = openDropdown === "Add Text";
  const editor = useEditor();

  const addText = useCallback(
    (item) => {
      editor.objects.add({
        type: "StaticText",
        text: item.text,
        fontSize: item.fontSize,
        fontFamily: item.fontFamily,
        fill: item.fill,
        underline: item.underline,
        charSpacing: item.letterSpacing,
      });
    },
    [editor]
  );

  return (
    <div className="relative z-50">
      <button
        onClick={() => toggleDropdown("Add Text")}
        className="px-4 py-2 bg-[#E0CCBE] text-[#3C3633] font-medium rounded hover:bg-[#747264] focus:outline-none"
      >
        Add Text
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-44 flex flex-wrap  gap-2 bg-[#EEEDEB] shadow-lg rounded-lg p-3 z-50">
          {Texts.map((item, index) => (
            <div
              key={index}
              className="h-20 bg-cover bg-center rounded-md flex items-center justify-center cursor-pointer hover:opacity-75"
              onClick={() => addText(item)}
              style={{
                fontSize: 15,
                fontFamily: item.fontFamily,
                color: item.fill,
                fontStyle: item.fontStyle,
                fontWeight: item.fontWeight,
                textDecoration: item.underline ? "underline" : "none",
                letterSpacing: `${item.letterSpacing}px`,
                textTransform: item.textTransform,
              }}
            >
              {item.text || "Sample Text"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddTextButton;
