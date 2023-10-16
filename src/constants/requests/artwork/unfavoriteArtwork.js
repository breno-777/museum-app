import api from "../../api";
import { getUserIdFromStorage } from "../user/userDetails";

export const unfavoriteArtwork = async (obraDeArteId) => {
  const id = await getUserIdFromStorage();
  try {
    await api.delete(`/usuarios/${id}/galeria/${obraDeArteId}/remove`);

    console.log("Obras de arte removida com sucesso!");
  } catch (error) {
    console.error("Não foi possível remover obra de arte", error);
  }
};
