import Image from "next/image";

interface PlaylistProps {
  name: string;
  person: string;
}

export function PlaylistAside(props: PlaylistProps) {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/dailymix1.jpg"
        width={60}
        height={60}
        alt="Capa Perfect Velvet"
      />
      <div className="flex flex-col">
        <a href="" className="text-sm text-white">
          {props.name}
        </a>
        <a className="text-sm text-zinc-400">{props.person}</a>
      </div>
    </div>
  );
}