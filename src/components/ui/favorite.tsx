import { useState } from "react";
import { PlusCircle, CheckCircle } from "lucide-react"; // Importe os ícones desejados
import { toast } from "sonner";

const AddToFavorites = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const toggleAdd = () => {
    const newState = !isAdded;
    setIsAdded(newState);

    // Exibe a notificação com base no estado
    if (newState) {
      toast.success("Música adicionada aos favoritos!"); // Notificação de sucesso
    } else {
      toast.info("Música removida dos favoritos."); // Notificação de informação
    }
  };

  return (
    <button onClick={toggleAdd} className="p-2">
      {isAdded ? (
        <CheckCircle
          className="text-green-500 hover:text-green-400 cursor-pointer"
          size={20}
        /> // Ícone de "Adicionado"
      ) : (
        <PlusCircle
          className="text-zinc-50 hover:text-zinc-400 cursor-pointer"
          size={20}
        /> // Ícone de "Adicionar"
      )}
    </button>
  );
};

export default AddToFavorites;
