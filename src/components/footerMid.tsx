import { Play, Repeat2, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function FooterMid() {
  return (
    <div className="flex items-center gap-6">
      <Shuffle size={20} className="text-zinc-400 hover:text-white" />
      <SkipBack
        size={20}
        className="text-zinc-400 hover:text-white fill-current"
      />

      <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:scale-105">
        <Play fill="black" />
      </button>

      <SkipForward
        size={20}
        className="text-zinc-400 hover:text-white fill-current"
      />
      <Repeat2 size={20} className="text-zinc-400 hover:text-white" />
    </div>
  );
}