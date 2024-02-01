interface PlaylistProps {
  name: string;
}

export function PlaylistAside(props: PlaylistProps) {
  return (
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        {props.name}
      </a>
  );
}