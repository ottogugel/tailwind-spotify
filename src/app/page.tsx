import { AlbumMidMain } from "@/components/albumMidMain";
import { AlbumTopMain } from "@/components/albumTopMain";
import { PlaylistAside } from "@/components/playlistAside";
import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <PlaylistAside name="Top 50 - Global" />
            <PlaylistAside name="Daily Mix 1" />
            <PlaylistAside name="Today's Top Hits" />
            <PlaylistAside name="Chuva Leve" />
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-4xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <AlbumTopMain title="Perfect Velvet" />
            <AlbumTopMain title="Perfect Velvet" />
            <AlbumTopMain title="Perfect Velvet" />
            <AlbumTopMain title="Perfect Velvet" />
            <AlbumTopMain title="Perfect Velvet" />
            <AlbumTopMain title="Perfect Velvet" />
          </div>

          <h2 className="font-bold text-2xl mt-10">Made for Otto Gugel</h2>

          <div className="grid grid-cols-8 gap-4 mt-6">
            <AlbumMidMain title="Daily Mix 1" artist="Wallows, COIN, girl in red and more" />
            <AlbumMidMain title="Daily Mix 2" artist="Wallows, COIN, girl in red and more" />
            <AlbumMidMain title="Daily Mix 3" artist="Wallows, COIN, girl in red and more" />
            <AlbumMidMain title="Daily Mix 4" artist="Wallows, COIN, girl in red and more" />
            <AlbumMidMain title="Daily Mix 5" artist="Wallows, COIN, girl in red and more"/>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
