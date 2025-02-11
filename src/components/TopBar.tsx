import { Search, Bell, Users2, ChevronLeft, ChevronRight, Home } from "lucide-react";
import Image from "next/image";

export function TopBar() {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="size-1 bg-white rounded-full" />
        <div className="size-1 bg-white rounded-full" />
        <div className="size-1 bg-white rounded-full" />
        <div className="flex gap-2">
          <button className="rounded-full bg-black/40 p-2">
            <ChevronLeft className="w-5 h-5 text-zinc-400" />
          </button>
          <button className="rounded-full bg-black/40 p-2 cursor-not-allowed">
            <ChevronRight className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        <div className="flex left-20">
          <div className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white bg-zinc-800 rounded-full border-none px-3 py-2 ">
            <Home />
          </div>

          <div className="flex flex-1 items-center gap-2 bg-zinc-800 rounded-full px-4 py-2 ">
            <Search className="w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="O que você quer ouvir?"
              className="bg-transparent text-sm text-zinc-400 placeholder:text-zinc-500 outline-none flex-1"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-black/40 p-2 rounded-full">
          <Bell className="w-5 h-5 text-zinc-400" />
        </button>
        <button className="bg-black/40 p-2 rounded-full">
          <Users2 className="w-5 h-5 text-zinc-400" />
        </button>
        <button className="flex items-center gap-2 bg-black/40 rounded-full p-[2px] pr-2">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={28}
            height={28}
            className="rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
