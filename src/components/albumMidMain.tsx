import { Play } from "lucide-react";
import Image from "next/image";

interface AlbumMidProps {
  title: string;
  artist: string;
}

export function AlbumMidMain(props: AlbumMidProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <div className="relative">
        <Image
          src="/album.jpg"
          width={120}
          height={120}
          className="w-full"
          alt="Capa do Álbum da Red Velvet"
        />
        <button className="size-12 absolute bottom-1 right-2 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible shadow-bottom hover:scale-105">
          <Play fill="bg-black" />
        </button>
      </div>
      <strong className="font-semibold">{props.title}</strong>
      <span className="text-xs text-zinc-400">{props.artist}</span>
    </a>
  );
}