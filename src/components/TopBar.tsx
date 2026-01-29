import {
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

export function TopBar() {
  return (
    <div className="flex items-center justify-between px-6">
      {/* Navegação Esquerda */}
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/60 p-2 hover:bg-black/80">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button className="rounded-full bg-black/60 p-2 hover:bg-black/80 cursor-not-allowed opacity-60">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Ícones da direita */}
      <div className="flex items-center gap-4">
        {/* Botão de busca para mobile */}
        <button className="md:hidden bg-black/60 p-2 rounded-full hover:bg-black/80">
          <Search className="w-5 h-5 text-white" />
        </button>
        
        <button className="bg-black/60 p-2 rounded-full hover:bg-black/80">
          <abbr title="Novidades">
            <Bell className="w-5 h-5 text-white" />
          </abbr>
        </button>
        <button className="bg-black/60 p-2 rounded-full hover:bg-black/80">
          <User className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}