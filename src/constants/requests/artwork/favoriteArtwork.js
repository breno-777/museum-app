import api from "../../api";

export const favoriteArtwork = async ({ usuarioId, obraDeArteId }) => {
  try {
    const response = await api.post(
      `/usuarios/${usuarioId}/galeria/${obraDeArteId}/save`
    );

    const artwork = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
    }));
    console.log("Obras de arte salva com sucesso!", artwork);

    return artwork;
  } catch (error) {
    console.error("Não foi possível salvar obra de arte", error);
    return false;
  }
};
