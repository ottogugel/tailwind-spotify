"use client"
import React from "react";

const videoClips = [
  {
    title: "Better Things",
    artist: "aespa",
    image: "dailymix1.jpg",
  },
  {
    title: "Antidote",
    artist: "Travis Scott",
    image: "dailymix2.jpg",
  },
  {
    title: "Active",
    artist: "Asake, Travis Scott",
    image: "dailymix3.jpg",
  },
];

const VideoMid: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-lg font-bold">Video clips for you</h2>
        <button className="text-sm text-zinc-400 hover:text-white">
          Show all
        </button>
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar p-4">
        {videoClips.map((clip, index) => (
          <div key={index} className="min-w-[120px] max-w-[180px] mx-2">
            <img
              src={clip.image}
              alt={clip.title}
              className="rounded-lg w-full"
            />
            <h3 className="text-sm font-bold mt-2">{clip.title}</h3>
            <p className="text-xs text-zinc-400">{clip.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoMid;
