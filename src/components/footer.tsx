import { Laptop2, LayoutList, Maximize2, Mic2,  Volume2 } from "lucide-react";
import { FooterAside }  from "./footerAside";
import { FooterMid } from "./footerMid";
import { FooterEnd } from "./footerEnd";

export function Footer() {
  return (
    <footer className="bg-black px-6 py-4 flex items-center justify-between relative">
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
      {/* FOOTER END ICONS */}
      <div className="flex items-center gap-4">
        <FooterEnd />
      </div>
    </footer>
  );
}