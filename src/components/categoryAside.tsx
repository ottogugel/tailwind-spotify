import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CategoryAside() {
  const categories = [
    "Playlists",
    "Podcasts e cursos",
    "Álbuns",
    "Artistas",
    "Músicas",
    "Ao vivo",
    "Descobertas",
  ];

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="flex">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="basis-auto"
            >
              <button className="px-3 py-1 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 rounded-full text-white whitespace-nowrap">
                {category}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}