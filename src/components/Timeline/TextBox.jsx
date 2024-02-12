import { useContext, useState, useEffect } from "react";
import ScenesContext from "../context/ScenesContext";

const TextBox = ({ GetScript }) => {
  const { currentSceneId } = useContext(ScenesContext);
  const [scriptText, setScriptText] = useState("");

  console.log(currentSceneId);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target.tagName.toLowerCase() === "input") {
        event.stopPropagation();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleGenerateClick = () => {
    GetScript(currentSceneId, scriptText);
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex border-2 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Describe the scene..."
          onChange={(e) => setScriptText(e.target.value)}
        ></input>
        <button
          onClick={handleGenerateClick}
          className="px-4 text-white bg-stone-600 border-l hover:bg-stone700 "
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default TextBox;
