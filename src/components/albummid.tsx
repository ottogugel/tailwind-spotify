import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import Image from "next/image";

export function AlbumMid() {

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[90%] pt-4 ml-2"
      >
        <CarouselContent className="flex text-wrap">
          {[
            {
              id: 1,
              description: "Stray Kids, NewJeans, LE SSERAFIM e mais",
              imgSrc: "/dailymix1.jpg",
            },
            {
              id: 2,
              description: "Shiro SAGISU, BAD HOP e mais",
              imgSrc: "/dailymix2.jpg",
            },
            {
              id: 3,
              description: "aespa, GOT7, TWICE e mais",
              imgSrc: "/dailymix3.jpg",
            },
            {
              id: 4,
              description: "Taylor Swift, Doja Cat, Shawn Mendes e mais",
              imgSrc: "/dailymix4.jpg",
            },
            {
              id: 5,
              description: "Travis Scott, Drake, Post Malone e mais",
              imgSrc: "/dailymix5.jpg",
            },
            {
              id: 6,
              description: "Travis Scott, Drake, Post Malone e mais",
              imgSrc: "/dailymix6.jpg",
            },
            {
              id: 7,
              description: "Travis Scott, Drake, Post Malone e mais",
              imgSrc: "/week.jpg",
            },
            {
              id: 8,
              description: "Travis Scott, Drake, Post Malone e mais",
              imgSrc: "/news.jpg",
            },
          ].map((mix) => (
            <CarouselItem
              key={mix.id}
              className="basis-1/12 min-w-[180px] max-w-[200px]"
            >
              <div className="p-2">
                <div className="relative group">
                  <Image
                    src={mix.imgSrc}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <button className="size-10 absolute bottom-3 right-2 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible shadow-bottom hover:scale-105">
                    <Play fill="black" />
                  </button>
                </div>
                <div className="mt-2 text-white">
                  <p className="text-sm text-gray-400">{mix.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
