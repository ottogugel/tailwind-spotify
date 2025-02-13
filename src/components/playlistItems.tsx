import Image from "next/image";

interface PlaylistProps {
  name: string;
  description: string;
}

export function PlaylistItems({name, description}: PlaylistProps) {
  return (
    <div className="flex items-center gap-3 hover:bg-zinc-800 p-2 rounded-md cursor-pointer">
      <Image
        src="/album.jpg"
        alt="Playlist"
        width={48}
        height={48}
        className="rounded"
      />
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}