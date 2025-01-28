'use client'

import { Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import MaximizeIcon from "./ui/maximize";

export function FooterEnd() {
  return (
    <>
      <Mic2
        size={20}
        className="text-zinc-50 hover:text-zinc-400 cursor-pointer"
      />
      <LayoutList
        size={20}
        className="text-zinc-50 hover:text-zinc-400 cursor-pointer"
      />
      <Laptop2 size={20} className="text-zinc-50 hover:text-zinc-400" />
      <div className="flex items-center gap-2">
        <Volume2 size={20} />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
      <MaximizeIcon />
    </>
  );
}