export function Category() {
    return (
      <div className="flex items-center gap-1 ml-6">
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
    );
}