import { AlbumMidMain } from "@/components/albumMidMain";
import { AlbumTopMain } from "@/components/albumTopMain";
import { Footer } from "@/components/footer";
import { PlaylistAside } from "@/components/playlistAside";
import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-96 bg-zinc-850 p-6">
          <div className="flex items-center gap-2">
            <div className="size-1 bg-white rounded-full"></div>
            <div className="size-1 bg-white rounded-full"></div>
            <div className="size-1 bg-white rounded-full"></div>
            <ChevronLeft className="cursor-pointer" />
            <ChevronRight className="cursor-not-allowed text-zinc-600" />
          </div>

          {/* Navegação com fundo colorido */}
          <nav className="space-y-5 mt-10 bg-zinc-800 p-4 rounded-lg">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              <Library />
              Your Library
            </a>
          </nav>

          {/* Outras seções da navegação lateral */}
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2 bg-zinc-800 p-4 rounded-lg fixed w-[334px]">
            <PlaylistAside name="Top 50 - Global" person="Sa" />
            <PlaylistAside name="Daily Mix 1" person="Spotify" />
            <PlaylistAside name="Today's Top Hits" person="OceanBlue" />
            <PlaylistAside name="Chuva Leve" person="Sladost" />
            <PlaylistAside name="Bleach Soundtracks" person="Sladost" />
            <PlaylistAside name="Pop" person="Sladost" />
            <PlaylistAside name="Hip Pop" person="Sladost" />
            <PlaylistAside name="Rock" person="Sladost" />
            <PlaylistAside name="Rap" person="Sladost" />
            <PlaylistAside name="P o l i s h" person="Sladost" />
            <PlaylistAside name="classic ones" person="Sladost" />
            <PlaylistAside name="Soft" person="Sladost" />
            <PlaylistAside name="Kind" person="Sladost" />
            <PlaylistAside name="Kind" person="Sladost" />
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {/* Conteúdo principal */}
          <div className="flex flex-row justify-center gap-4 mb-10 ">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white bg-zinc-800 p-4 rounded-full"
            >
              <HomeIcon />
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-800 p-4 rounded-2xl"
            >
              <Search />
              What do you want to hear?
            </a>
          </div>

          {/* Seções principais com cores diferentes */}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AlbumTopMain title="Perfect Velvet" />
              <AlbumTopMain title="Bloom" />
              <AlbumTopMain title="Summer Magic" />
              <AlbumTopMain title="READY TO BE" />
              <AlbumTopMain title="Celebrate" />
              <AlbumTopMain title="BETWEEN 1&2" />
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg mt-6">
            <div className="flex justify-between">
              <h2 className="font-semibold text-2xl cursor-pointer">
                Made for Otto Gugel
              </h2>
              <h2 className="font-semibold text-base text-zinc-400 hover:underline cursor-pointer">
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
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}