import { AlbumMidMain } from "@/components/albumMidMain";
import { AlbumTopMain } from "@/components/albumTopMain";
import { Footer } from "@/components/footer";
import { PlaylistAside } from "@/components/playlistAside";
import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-96 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="size-3 bg-white rounded-full"></div>
            <div className="size-3 bg-white rounded-full"></div>
            <div className="size-3 bg-white rounded-full"></div>
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
            <button className="rounded-full bg-black/40 p-1 text-zinc-500 cursor-not-allowed">
              <ChevronRight />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <AlbumTopMain title="Perfect Velvet" />
            <AlbumTopMain title="Bloom" />
            <AlbumTopMain title="Summer Magic" />
            <AlbumTopMain title="READY TO BE" />
            <AlbumTopMain title="Celebrate" />
            <AlbumTopMain title="BETWEEN 1&2" />
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl mt-10 cursor-pointer">
              Made for Otto Gugel
            </h2>
            <h2 className="font-semibold text-base text-zinc-400 mt-10 hover:underline cursor-pointer">
              Show all
            </h2>
          </div>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <AlbumMidMain
              title="Daily Mix 1"
              artist="Travis Scott, Metro Boomin, Post Malone..."
              src="/dailymix1.jpg"
            />
            <AlbumMidMain
              title="Daily Mix 2"
              artist="Red Velvet, TWICE, LE SSERAFIM and more"
              src="/dailymix2.jpg"
            />

            <AlbumMidMain
              title="Daily Mix 3"
              artist="Twenty One Pilots, Billie Eilish, Red Hot Chilli...."
              src="/dailymix3.jpg"
            />
            <AlbumMidMain
              title="Daily Mix 4"
              artist="GOT7, UKISS, SHINee and more"
              src="/dailymix4.jpg"
            />
            <AlbumMidMain
              title="Daily Mix 5"
              artist="The Weeknd, Daniel Caesar, Justin Bieber..."
              src="/dailymix5.jpg"
            />
            <AlbumMidMain
              title="Daily Mix 6"
              artist="Major Lazer, San Holo, Zedd and more"
              src="/dailymix6.jpg"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
