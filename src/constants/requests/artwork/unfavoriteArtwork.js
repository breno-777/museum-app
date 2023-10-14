import api from "../../api";

export const unfavoriteArtwork = async ({ usuarioId, obraDeArteId }) => {
  try {
    const response = await api.delete(
      `/usuarios/${usuarioId}/galeria/${obraDeArteId}/remove`
    );

    const artwork = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
    }));
    console.log("Obras de arte removida com sucesso!", artwork);

    return artwork;
  } catch (error) {
    console.error("Não foi possível remover obra de arte", error);
    return false;
  }
};
