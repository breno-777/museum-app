import api from "../../api";
import { getUserIdFromStorage } from "./userDetails";

export async function userGallery() {
  const id = await getUserIdFromStorage();
  console.log("ID DO USUARIO ", id);
  try {
    const response = await api.get(`/usuarios/${id}/galeria`);

    if (response.data.obraDeArte.length > 0) {
      console.log(
        "Dados da galeria do usuário carregado com sucesso!",
        response.data.obraDeArte
      );

      return response.data.obraDeArte;
    } else {
      console.error("Galeria do usuário vazia!", response.data);
      return [];
    }
  } catch (error) {
    console.error("Falha ao carregar galeria do usuário", error);
    return [];
  }
}
