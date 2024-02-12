import React, { useContext, useCallback } from "react";
import ScenesContext from "../context/ScenesContext";
import { useEditor } from "@layerhub-io/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Menu, Item, contextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const SceneItem = React.memo(({ scene, index, onContextMenu, onLoadScene }) => (
  <Draggable key={scene.id} draggableId={scene.id.toString()} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onContextMenu={(event) => onContextMenu(event, scene.id)}
        className="p-2 bg-white rounded-lg shadow border border-[#747264] cursor-move"
      >
        <img
          onClick={() => onLoadScene(scene)}
          src={scene.preview}
          alt={`Scene ${index + 1}`}
          className="w-full h-auto rounded-md"
          loading="lazy"
        />
      </div>
    )}
  </Draggable>
));

const ScenesPanel = () => {
  const { scenes, setCurrentSceneId, setScenes } = useContext(ScenesContext);
  const editor = useEditor();

  const loadScene = useCallback(
    (scene) => {
      editor.scene.importFromJSON(scene.data);
      setCurrentSceneId(scene.id);
    },
    [editor, setCurrentSceneId]
  );

  const onDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;
      if (!destination) return;

      const items = Array.from(scenes);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      setScenes(items);
    },
    [scenes, setScenes]
  );

  const handleContextMenu = useCallback((event, sceneId) => {
    event.preventDefault();
    contextMenu.show({
      id: "scene-context-menu",
      event,
      props: { sceneId },
    });
  }, []);

  const handleDeleteScene = useCallback(
    (sceneId) => {
      setScenes(scenes.filter((scene) => scene.id !== sceneId));
    },
    [scenes, setScenes]
  );

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="scenes">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-4 py-4 px-2  overflow-y-auto"
            >
              {scenes?.map((scene, index) => (
                <SceneItem
                  key={scene.id}
                  scene={scene}
                  index={index}
                  onContextMenu={handleContextMenu}
                  onLoadScene={loadScene}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Menu id="scene-context-menu">
        <Item onClick={({ props }) => handleDeleteScene(props.sceneId)}>
          Delete
        </Item>
      </Menu>
    </>
  );
};

export default ScenesPanel;
