import React, { useState } from "react";

const Timeline = ({ currentScript }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  console.log(currentScript);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex gap-2 items-center">
        <button
          className="px-4 py-2 bg-[#E0CCBE] text-[#3C3633] font-medium rounded hover:bg-[#747264] hover:text-[#EEEDEB] focus:outline-none transition duration-150 ease-in-out"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="text-sm text-[#3C3633]  p-2 rounded-md w-[40rem]">
          {currentScript?.text}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentScript?.audio}
        onEnded={() => setIsPlaying(false)}
        style={{ display: "none" }}
      ></audio>
    </div>
  );
};

export default Timeline;
