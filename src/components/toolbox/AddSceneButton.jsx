import React, { useCallback, useContext, useEffect } from "react";
import { useEditor } from "@layerhub-io/react";
import ScenesContext from "../context/ScenesContext";
import { defaultTemplate } from "../data/DefaultTemplate";
import { nanoid } from "nanoid";

const AddSceneButton = () => {
  const editor = useEditor();
  const { scenes, setScenes, currentSceneId, setCurrentSceneId } =
    useContext(ScenesContext);

  useEffect(() => {
    const initializeScene = async () => {
      if (editor && !scenes.length) {
        editor.scene.importFromJSON(defaultTemplate);
        const newSceneId = nanoid();
        const preview = await editor.renderer.toDataURL(defaultTemplate);
        setScenes([{ id: newSceneId, data: defaultTemplate, preview }]);
        setCurrentSceneId(newSceneId);
      }
    };
    initializeScene();
  }, [editor, scenes.length, setScenes, setCurrentSceneId]);

  const addScene = useCallback(async () => {
    const currentScene = editor.scene.exportToJSON();
    const currentScenePreview = await editor.renderer.toDataURL(currentScene);
    const newSceneId = nanoid();
    setCurrentSceneId(newSceneId);
    setScenes((prevScenes) => [
      ...prevScenes,
      { id: newSceneId, data: currentScene, preview: currentScenePreview },
    ]);
    editor.scene.importFromJSON(defaultTemplate);
  }, [editor, setScenes]);

  useEffect(() => {
    const updateScenePreview = async () => {
      if (currentSceneId) {
        const updatedTemplate = editor.scene.exportToJSON();
        const updatedPreview = await editor.renderer.toDataURL(updatedTemplate);
        setScenes((prevScenes) =>
          prevScenes.map((scene) =>
            scene.id === currentSceneId
              ? { ...scene, data: updatedTemplate, preview: updatedPreview }
              : scene
          )
        );
      }
    };

    editor?.on("history:changed", updateScenePreview);

    return () => {
      editor?.off("history:changed", updateScenePreview);
    };
  }, [editor, currentSceneId, setScenes]);

  return (
    <div className="relative z-50">
      <button
        onClick={addScene}
        className="px-4 py-2 bg-[#E0CCBE] text-[#3C3633] font-medium rounded hover:bg-[#747264] focus:outline-none"
      >
        Add Scene
      </button>
    </div>
  );
};

export default AddSceneButton;
