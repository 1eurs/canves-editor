import React, { useContext, useRef, useCallback } from "react";
import { useEditor } from "@layerhub-io/react";
import DataContext from "../context/dataContext";
import ScenesContext from "../context/ScenesContext";
import AddSceneButton from "./AddSceneButton";
import AddImagesButton from "./AddImagesButton";
import AddTextButton from "./AddTextButton";
import AddBgColorPaletteButton from "./AddBgColorPaletteButton";

const TopMenu = () => {
  const editor = useEditor();
  const fileInputRef = useRef(null);

  const handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const content = e.target.result;
          try {
            const json = JSON.parse(content);
            editor.scene.importFromJSON(json);
          } catch (error) {
            console.error("Error importing JSON:", error);
          }
        };
        reader.readAsText(file);
      }
    },
    [editor]
  );

  const handleClickImport = () => fileInputRef.current.click();

  const exportToJson = () => {
    const jsonObj = editor.scene.exportToJSON();
    const jsonString = JSON.stringify(jsonObj, null, 2); // Pretty print JSON
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported-data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportImage = () => {
    editor.renderer.toDataURL().then((url) => {
      const a = document.createElement("a");
      a.href = url;
      a.download = "exportedImage.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  return (
    <div className="flex items-center justify-between h-16 bg-[#FFF5EB] px-4">
      <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
        CanvesStudio
      </h1>

      <div className="flex justify-center items-center gap-2 flex-grow">
        <AddSceneButton />
        <AddImagesButton />
        <AddTextButton />
        <AddBgColorPaletteButton />
        <div className="flex gap-2">
          <button
            onClick={exportToJson}
            className="bg-[#DD6B20] hover:bg-[#ED8936] text-white rounded-md p-2 border border-[#FBD38D]"
          >
            Export JSON
          </button>
          <button
            onClick={handleClickImport}
            className="bg-[#DD6B20] hover:bg-[#ED8936] text-white rounded-md p-2 border border-[#FBD38D]"
          >
            Import JSON
            <input
              type="file"
              ref={fileInputRef}
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
          </button>
        </div>
        <button
          onClick={exportImage}
          className="bg-[#DD6B20] hover:bg-[#ED8936] text-white rounded-md p-2 border border-[#FBD38D]"
        >
          Export Image
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
