import {
  Search,
  Bell,
  Users2,
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-react";
import Image from "next/image";

export function TopBar() {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      {/* Navegação Esquerda */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="size-1 bg-white rounded-full" />
          <div className="size-1 bg-white rounded-full" />
          <div className="size-1 bg-white rounded-full" />
        </div>
        <button className="rounded-full bg-black/40 p-2">
          <ChevronLeft className="w-5 h-5 text-zinc-400" />
        </button>
        <button className="rounded-full bg-black/40 p-2 cursor-not-allowed">
          <ChevronRight className="w-5 h-5 text-zinc-400" />
        </button>
      </div>

      {/* Input e ícones centralizados */}
      <div className="flex items-center gap-4">
        {/* Ícone Home */}
        <button className="flex items-center justify-center w-12 h-12 bg-zinc-800  rounded-full hover:scale-105">
          <Home className="w-6 h-6 text-zinc-400 hover:text-white" />
        </button>

        {/* Input centralizado */}
        <div className="flex items-center w-80 bg-zinc-800 rounded-full px-4 h-12">
          {/* Ícone de pesquisa */}
          <Search className="w-6 h-6 text-zinc-400" />
          <input
            type="text"
            placeholder="O que você quer ouvir?"
            className="bg-transparent text-sm text-zinc-400 placeholder:text-zinc-500 outline-none flex-1 text-center"
          />
        </div>
      </div>

      {/* Ícones da direita */}
      <div className="flex items-center gap-4">
        <button className="bg-black/40 p-2 rounded-full">
          <abbr title="Novidades">
            <Bell className="w-5 h-5 text-zinc-400" />
          </abbr>
        </button>
        <button className="bg-black/40 p-2 rounded-full">
          <Users2 className="w-5 h-5 text-zinc-400" />
        </button>
        <button className="flex items-center gap-2 bg-black/40 rounded-full p-[2px]">
          <Image
            src="/album.jpg"
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
