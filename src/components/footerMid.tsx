"use client"

import { Play, Repeat2, Shuffle, SkipBack, SkipForward, Pause } from "lucide-react";
import { useState } from "react";

export function FooterMid() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying)
  };

  return (
    <div className="flex items-center gap-6">
      <Shuffle size={20} className="text-zinc-400 hover:text-white" />
      <SkipBack
        size={20}
        className="text-zinc-400 hover:text-white fill-current"
      />

      <button
        className={`size-9 flex items-center justify-center  rounded-full bg-white text-black hover:scale-105 ${!isPlaying ? `pl-1` : ""}`}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause size={20} fill="black" />
        ) : (
          <Play size={20} fill="black" />
        )}
      </button>

      <SkipForward
        size={20}
        className="text-zinc-400 hover:text-white fill-current"
      />
      <Repeat2 size={20} className="text-zinc-400 hover:text-white" />
    </div>
  );
}