// ScenesContext.js
import React, { createContext, useState } from "react";

const ScenesContext = createContext();

export const ScenesProvider = ({ children }) => {
  const [scenes, setScenes] = useState([]);
  const [currentSceneId, setCurrentSceneId] = useState(null);
  const [scenesPreview, setScenesPreview] = useState([]);

  return (
    <ScenesContext.Provider
      value={{
        scenes,
        setScenes,
        currentSceneId,
        setCurrentSceneId,
        setScenesPreview,
        scenesPreview,
      }}
    >
      {children}
    </ScenesContext.Provider>
  );
};

export default ScenesContext;
