import api from "../../api";

export const fetchArtworkDetails = async ({ id }) => {
  try {
    const response = await api.get(`/obras-de-artes/${id}`);

    const artworks = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      ano: item.ano,
      descricao: item.descricao,
      artistas: item.artistas,
    }));
    console.log("Obras de artes encontradas!", artworks);

    return artworks;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};
