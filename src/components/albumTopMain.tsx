import { Play } from "lucide-react";
import Image from "next/image";

interface AlbumProps {
  title: string;
}

export function AlbumTopMain(props: AlbumProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded-md flex items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors w-full min-h-[70px]"
    >
      <Image
        src="/album.jpg"
        width={64}
        height={64}
        alt="Capa do Álbum da Red Velvet"
        className="object-cover"
      />
      <strong className="truncate px-2">{props.title}</strong>
      <button className="size-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105 transition-transform">
        <Play size={20} fill="black" />
      </button>
    </a>
  );
}