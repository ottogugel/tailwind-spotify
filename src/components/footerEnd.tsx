import { Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from "lucide-react";

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
      <Laptop2
        size={20}
        className="text-zinc-50 hover:text-zinc-400"
      />
      <div className="flex items-center gap-2">
        <Volume2 size={20} />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-zinc-200 w-20 h-1 rounded-full hover:bg-green-500"></div>
        </div>
      </div>
      <Maximize2
        size={20}
        className="text-zinc-50 hover:text-zinc-400 cursor-pointer"
      />
    </>
  );
}