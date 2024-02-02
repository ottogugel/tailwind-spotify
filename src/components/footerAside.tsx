import Image from "next/image";

interface FooterAsideProps {
  music: string;
  artist: string;
}

export function FooterAside(props: FooterAsideProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/album.jpg"
        width={56}
        height={56}
        alt="Capa Perfect Velvet"
      />
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
    </div>
  );
}