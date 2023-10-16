import api from "../../api";

export const fetchArtworkDetails = async (id) => {
  try {
    const response = await api.get(`/obras-de-artes/${id}`);

    const artworks = {
      id: response.id,
      nome: response.nome,
      ano: response.ano,
      descricao: response.descricao,
      artistas: response.artistas,
    };
    console.log("Obras de artes encontradas!");

    return artworks;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};
