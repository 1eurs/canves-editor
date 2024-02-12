import React, { useCallback, useContext, useState } from "react";
import DropdownContext from "../context/DropdownContext";
import DataContext from "../context/dataContext";
import { useEditor } from "@layerhub-io/react";

const AddAvatarsButton = () => {
  const { openDropdown, toggleDropdown } = useContext(DropdownContext);
  const isOpen = openDropdown === "Add Avatar";
  const { avatars } = useContext(DataContext);
  const editor = useEditor();

  const addAvatar = useCallback(
    (item) => {
      editor.objects.add({
        type: "StaticImage",
        src: item,
      });
    },
    [editor]
  );

  return (
    <div className="relative z-50">
      <button
        onClick={() => toggleDropdown("Add Avatar")}
        className="px-4 py-2 bg-[#E0CCBE] text-[#3C3633] font-medium rounded hover:bg-[#747264] focus:outline-none"
      >
        Add Avatar
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full h-fit max-w-xs grid grid-cols-3 gap-2 bg-[#EEEDEB] shadow-lg rounded-lg p-3 z-50">
          {avatars.map((item, index) => (
            <div
              onClick={() => addAvatar(item)}
              key={index}
              className="w-full h-20 bg-cover bg-center rounded-md cursor-pointer hover:opacity-75"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddAvatarsButton;
