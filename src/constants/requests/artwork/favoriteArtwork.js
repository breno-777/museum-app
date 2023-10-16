import api from "../../api";
import { getUserIdFromStorage } from "../user/userDetails";

export const favoriteArtwork = async (obraDeArteId) => {
  const id = await getUserIdFromStorage();
  try {
    const response = await api.post(
      `/usuarios/${id}/galeria/${obraDeArteId}/save`
    );
    const artwork = {
      id: response.id,
      nome: response.nome,
    };
    console.log("Obras de arte salva com sucesso!");

    return artwork;
  } catch (error) {
    console.error("Não foi possível salvar obra de arte", error);
    return false;
  }
};
