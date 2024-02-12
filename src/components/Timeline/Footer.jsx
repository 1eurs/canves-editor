import { useContext, useState } from "react";
import TextBox from "./TextBox";
import Timeline from "./Timeline";
import DataContext from "../context/dataContext";
import ScenesContext from "../context/ScenesContext";

const Footer = () => {
  const { getScript, scripts } = useContext(DataContext);
  const { currentSceneId } = useContext(ScenesContext);
  const [isLoading, setIsLoading] = useState(false);

  const currentScript = scripts.find(
    (script) => String(script.id) === String(currentSceneId)
  );

  const handleGenerateScript = async (sceneId, scriptText) => {
    setIsLoading(true);

    await getScript(sceneId, scriptText);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center p-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500"></div>
        </div>
      ) : currentScript ? (
        <Timeline currentScript={currentScript} />
      ) : (
        <TextBox GetScript={handleGenerateScript} />
      )}
    </div>
  );
};

export default Footer;
