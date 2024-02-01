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
      className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src="/album.jpg"
        width={120}
        height={120}
        className="w-full"
        alt="Capa do Álbum da Red Velvet"
      />
      <strong className="font-semibold">{props.title}</strong>
      <span className="text-xs text-zinc-500">{props.artist}</span>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}