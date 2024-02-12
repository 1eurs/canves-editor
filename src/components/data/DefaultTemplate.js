import { nanoid } from "nanoid";

export const defaultTemplate = {
  id: nanoid(),
  frame: {
    width: 1920,
    height: 1080,
  },
  layers: [
    {
      id: "background",
      name: "Initial Frame",
      left: 0,
      top: 0,
      width: 1920,
      height: 1080,
      type: "Background",
      fill: "#ffffff",
      metadata: {},
    },
  ],
  metadata: {},
};
