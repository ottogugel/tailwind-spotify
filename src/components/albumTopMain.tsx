import { Play } from "lucide-react";
import Image from "next/image";

interface AlbumProps {
  title: string;
}

export function AlbumTopMain(props: AlbumProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded-md flex items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src="/album.jpg"
        width={50}
        height={50}
        alt="Capa do Álbum da Red Velvet"
      />
      <strong>{props.title}</strong>
      <button className="size-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible shadow-bottom hover:scale-105">
        <Play size={20} fill="bg-black" />
      </button>
    </a>
  );
}
