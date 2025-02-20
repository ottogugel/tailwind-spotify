"use client";
import { useEffect, useState } from "react";
import { AlbumTopMain } from "@/components/albumTopMain";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/TopBar";
import { ChevronRight, Plus, Library, ChevronLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaylistItems } from "@/components/playlistItems";
import { AlbumMid } from "@/components/albummid";
import { Category } from "@/components/category";
import { CategoryAside } from "@/components/categoryAisde";
import VideoMid from "@/components/videoMid";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-zinc-900">
      {/* Top Bar */}
      <TopBar />

      {/* Layout principal com sidebar, conteúdo e novo aside */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar esquerdo */}
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

            <CategoryAside />

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

        {/* Área principal com rolagem interna */}
        <main className="flex-1 p-6 bg-gradient-to-b from-purple-900 to-zinc-900 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <Category />

            {/* Lista de álbuns */}
            <div className="flex gap-4 ">
              <div className="p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {isLoading ? (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <AlbumTopMain title="Perfect Velvet" />
                      <AlbumTopMain title="Bloom" />
                      <AlbumTopMain title="Summer Magic" />
                      <AlbumTopMain title="READY TO BE" />
                      <AlbumTopMain title="Celebrate" />
                      <AlbumTopMain title="BETWEEN 1&2" />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              {isLoading ? (
                <div className="flex flex-wrap">
                    <div className="flex items-center space-x-4 p-4">
                      <Skeleton className="size-44" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center px-4">
                    <h2 className="text-lg font-bold">Made for Sladost</h2>
                    <button className="text-sm text-zinc-400 hover:text-white">
                      Show all
                    </button>
                  </div>
                  <AlbumMid />
                </>
              )}
            </div>

            {/* Videoclipes */}
            <div>
              <VideoMid />
            </div>
          </div>
        </main>

        {/* Novo aside no lado direito */}
        <aside className="w-16 bg-black p-6 hidden lg:block overflow-y-auto">
          <div className="flex items-center justify-center h-full">
            <ChevronLeft className="text-zinc-200" />
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
