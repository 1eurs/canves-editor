class keyShortcuts {
  //delete
  isDelete(event) {
    return event.key === "Delete";
  }

  // save or update template
  isCtrlS(event) {
    return event.ctrlKey && event.code === "KeyS";
  }

  // select all
  isCtrlA(event) {
    return event.ctrlKey && event.code === "KeyA";
  }

  // copy
  isCtrlC(event) {
    return event.ctrlKey && event.code === "KeyC";
  }

  // paste
  isCtrlV(event) {
    return event.ctrlKey && event.code === "KeyV";
  }
  // redo
  isCtrlY(event) {
    return event.ctrlKey && event.code === "KeyY";
  }

  // cut
  isCtrlX(event) {
    return event.ctrlKey && event.code === "KeyX";
  }

  // move
  isArrowUp(event) {
    return event.code === "ArrowUp";
  }

  // move
  isShiftArrowUp(event) {
    return event.shiftKey && event.code === "ArrowUp";
  }

  // move
  isArrowDown(event) {
    return event.code === "ArrowDown";
  }

  // move
  isShiftArrowDown(event) {
    return event.shiftKey && event.code === "ArrowDown";
  }

  // move
  isArrowLeft(event) {
    return event.code === "ArrowLeft";
  }

  // move
  isShiftArrowLeft(event) {
    return event.shiftKey && event.code === "ArrowLeft";
  }

  // move
  isArrowRight(event) {
    return event.code === "ArrowRight";
  }

  // move
  isShiftArrowRight(event) {
    return event.shiftKey && event.code === "ArrowRight";
  }

  // modifier
  isShift(event) {
    return event.shiftKey;
  }

  // lineHeight--
  isAltDown(event) {
    return event.altKey && event.code === "ArrowDown";
  }

  // lineHeight++
  isAltUp(event) {
    return event.altKey && event.code === "ArrowUp";
  }

  // charSpacing++
  isAltRight(event) {
    return event.altKey && event.code === "ArrowRight";
  }

  // charSpacing--
  isAltLeft(event) {
    return event.altKey && event.code === "ArrowLeft";
  }

  // Move down 1px
  isCtrlDown(event) {
    return event.ctrlKey && event.code === "ArrowDown";
  }

  // Move up 1px
  isCtrlUp(event) {
    return event.ctrlKey && event.code === "ArrowUp";
  }

  // Move right 1px
  isCtrlRight(event) {
    return event.ctrlKey && event.code === "ArrowRight";
  }

  // Move left 1px
  isCtrlLeft(event) {
    return event.ctrlKey && event.code === "ArrowLeft";
  }

  // Move down 10px
  isShiftCtrlDown(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowDown";
  }

  // Move up 10px
  isShiftCtrlUp(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowUp";
  }

  // Move right 10px
  isShiftRight(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowRight";
  }

  // Move left 10px
  isShiftCtrlLeft(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowLeft";
  }

  // redo
  isCtrlShiftZ(event) {
    return event.ctrlKey && event.shiftKey && event.code === "KeyZ";
  }

  // undo
  isCtrlZ(event) {
    return event.ctrlKey && !event.shiftKey && event.code === "KeyZ";
  }

  // zoom reset
  isCtrlOne(event) {
    return event.ctrlKey && event.key === "1";
  }

  // zoom in
  isCtrlMinus(event) {
    return event.ctrlKey && event.key === "-";
  }

  // zoom out
  isCtrlEqual(event) {
    return event.ctrlKey && event.key === "=";
  }

  // zoom to fit
  isCtrlZero(event) {
    return event.ctrlKey && event.key === "0";
  }
}

export default new keyShortcuts();
