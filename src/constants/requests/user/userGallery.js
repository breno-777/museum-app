import api from "../../api";
import { getUserIdFromStorage } from "./userDetails";

export async function userGallery() {
  const id = await getUserIdFromStorage();
  try {
    const response = await api.get(`/usuarios/${id}/galeria`);

    if (response.data.obraDeArte.length > 0) {
      console.log("Dados da galeria do usuário carregado com sucesso!");

      return response.data.obraDeArte;
    } else {
      console.log("Galeria do usuário vazia!");
      return [];
    }
  } catch (error) {
    console.error("Falha ao carregar galeria do usuário", error);
    return [];
  }
}
