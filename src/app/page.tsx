'use client'
import { useEffect, useState } from "react";
import { AlbumTopMain } from "@/components/albumTopMain";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/TopBar";
import { ChevronRight, Plus, Library } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaylistItems } from "@/components/playlistItems";
import { AlbumMid } from "@/components/albummid";

export default function Home() {
  // Estado para controlar se o conteúdo está carregando
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de dados ao recarregar a página
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tempo de 2 segundos para simular um fetch de dados

    return () => clearTimeout(timer); // Cleanup para evitar memory leaks
  }, []);

  return (
    <div className="h-screen flex flex-col bg-zinc-900">
      {/* Top Bar */}
      <TopBar />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-80 bg-black p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span>
                <Library />
              </span>
              <span className="text-zinc-200 font-semibold">
                Sua Biblioteca
              </span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-zinc-800 rounded-full">
                  <Plus className="w-5 h-5 text-zinc-200" />
                </button>
                <button className="p-2 hover:bg-zinc-800 rounded-full">
                  <ChevronRight className="w-5 h-5 text-zinc-200" />
                </button>
              </div>
            </div>

            <div className="flex gap-1">
              <button className="px-3 py-1 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 rounded-full text-white">
                Playlists
              </button>
              <button className="px-3 py-1 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 rounded-full text-white text-nowrap">
                Podcasts e cursos
              </button>
              <button className="px-3 py-1 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 rounded-full text-white">
                Álbuns
              </button>
              <button className="px-3 py-1 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 rounded-full text-white">
                Artistas
              </button>
            </div>

            {/* Playlist Items */}
            <div className="space-y-4">
              <PlaylistItems
                name="Músicas Curtidas"
                description="Playlist • 1,197 músicas"
              />
              <PlaylistItems
                name="Hip-Hop"
                description="Playlist • 197 músicas"
              />
              <PlaylistItems name="Rap" description="Playlist • 567 músicas" />
              <PlaylistItems name="Indie" description="Playlist • 50 músicas" />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gradient-to-b from-purple-900 to-zinc-900">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 text-xs font-normal bg-white rounded-full text-zinc-800">
                All
              </button>
              <button className="px-3 py-1 text-xs font-normal bg-white/40 rounded-full text-zinc-100">
                Song
              </button>
              <button className="px-3 py-1 text-xs font-normal bg-white/40 rounded-full text-zinc-100">
                Podcasts
              </button>
            </div>

            <div className="flex gap-4">
              <div className="p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {isLoading ? (
                    // Exibe o skeleton enquanto os dados carregam
                    <>
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap-reverse space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap-reverse space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap-reverse space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap-reverse space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Exibe os álbuns após o carregamento
                    <>
                      <AlbumTopMain title="Perfect Velvet" />
                      <AlbumTopMain title="Bloom" />
                      <AlbumTopMain title="Summer Magic" />
                      <AlbumTopMain title="READY TO BE" />
                      <AlbumTopMain title="Celebrate" />
                      <AlbumTopMain title="BETWEEN 1&2" />
                      <AlbumTopMain title="BETWEEN 1&2" />
                      <AlbumTopMain title="BETWEEN 1&2" />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              <a className="text-lg font-bold ml-4">Made for Sladost</a>
                <AlbumMid />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
