import { Canvas, useEditor } from "@layerhub-io/react";
import { useContext, useEffect } from "react";
import { debounce, throttle } from "../utils/common";
import keyShortcuts from "../utils/keyShortcuts";
import { defaultTemplate } from "../data/DefaultTemplate";
import ScenesContext from "../context/ScenesContext";

export default function Editor() {
  const editor = useEditor();
  const handleKeydown = throttle((event) => {
    if (!editor || event?.repeat) {
      return;
    }
    if (keyShortcuts.isCtrlZero(event)) {
      event.preventDefault();
      editor.zoom.zoomToFit();
    } else if (keyShortcuts.isCtrlMinus(event)) {
      event.preventDefault();
      editor.zoom.zoomOut();
    } else if (keyShortcuts.isCtrlEqual(event)) {
      event.preventDefault();
      editor.zoom.zoomIn();
    } else if (keyShortcuts.isCtrlOne(event)) {
      event.preventDefault();
      editor.zoom.zoomToOne();
    } else if (keyShortcuts.isCtrlZ(event)) {
      event.preventDefault();
      debounce(() => editor.history.undo(), 100);
    } else if (keyShortcuts.isCtrlShiftZ(event)) {
      event.preventDefault();
      debounce(() => editor.history.redo(), 100);
    } else if (keyShortcuts.isCtrlA(event)) {
      event.preventDefault();
      editor.objects.select();
    } else if (keyShortcuts.isCtrlX(event)) {
      event.preventDefault();
      debounce(() => editor.objects.cut(), 100);
    } else if (keyShortcuts.isCtrlC(event)) {
      event.preventDefault();
      debounce(() => editor.objects.copy(), 100);
    } else if (keyShortcuts.isCtrlV(event)) {
      event.preventDefault();
      debounce(() => editor.objects.paste(), 100);
    } else if (keyShortcuts.isDelete(event)) {
      event.preventDefault();
      editor.objects.remove();
    } else if (keyShortcuts.isShiftArrowDown(event)) {
      event.preventDefault();
      editor.objects.move("top", 10);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isArrowDown(event)) {
      event.preventDefault();
      editor.objects.move("top", 1);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isShiftArrowUp(event)) {
      event.preventDefault();
      editor.objects.move("top", -10);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isArrowUp(event)) {
      event.preventDefault();
      editor.objects.move("top", -1);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isShiftArrowLeft(event)) {
      event.preventDefault();
      editor.objects.move("left", -10);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isArrowLeft(event)) {
      event.preventDefault();
      editor.objects.move("left", -1);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isShiftArrowRight(event)) {
      event.preventDefault();
      editor.objects.move("left", 10);
      editor.canvas.requestRenderAll();
    } else if (keyShortcuts.isArrowRight(event)) {
      event.preventDefault();
      editor.objects.move("left", 1);
      editor.canvas.requestRenderAll();
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleKeydown(e);
    });
  }, [handleKeydown]);
  return <Canvas config={{ background: "#F3E2D9" }} />;
}
