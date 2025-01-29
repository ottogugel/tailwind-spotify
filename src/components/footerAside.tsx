'use client'
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import AddToFavorites from "./ui/favorite";

interface FooterAsideProps {
  music: string;
  artist: string;
}

export function FooterAside(props: FooterAsideProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Image
          src="/album.jpg"
          width={60}
          height={60}
          alt="Capa Perfect Velvet"
        />
        {/*
        <button className="size-8 absolute bottom-6 left-6 flex items-center justify-center pl-1 rounded-full bg-gray-50 text-black ml-auto   group-hover:visible shadow-bottom hover:scale-105">
          <ChevronDown />
        </button>
        */}
      </div>
      <div className="flex flex-col">
        <a href="#" className="font-normal hover:underline">
          {props.music}
        </a>
        <a
          href="#"
          className="text-xs text-zinc-400 hover:underline hover:text-white"
        >
          {props.artist}
        </a>
      </div>
      <AddToFavorites />
    </div>
  );
}