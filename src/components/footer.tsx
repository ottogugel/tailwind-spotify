import { Laptop2, LayoutList, Maximize2, Mic2,  Volume2 } from "lucide-react";
import { FooterAside }  from "./footerAside";
import { FooterMid } from "./footerMid";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <FooterAside music="Peek-A-Boo" artist="Red Velvet" />
      {/* FOOTER MID */}
      <div className="flex flex-col items-center gap-2">
        <FooterMid />
        {/* SLIDER */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full hover:bg-green-500"></div>
          </div>
          <span className="text-xs text-zinc-400">2:10</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div>
          <Volume2 />
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}