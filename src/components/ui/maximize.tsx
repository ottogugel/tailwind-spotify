import { Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

const MaximizeIcon = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  return (
    <button onClick={toggleFullscreen} className="p-2">
      {isFullscreen ? (
        <Minimize2
          size={20}
          className="text-zinc-50 hover:text-zinc-400 cursor-pointer"
        />
      ) : (
        <Maximize2
          size={20}
          className="text-zinc-50 hover:text-zinc-400 cursor-pointer"
        />
      )}
    </button>
  );
};

export default MaximizeIcon;
