import api from "../../api";

export const fetchArtwork = async ({ page, size }) => {
  try {
    const response = await api.get(`/obras-de-artes?page=${page}&size=${size}`);
    console.log(page);

    const artworks = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      ano: item.ano,
      imagens: item.imagens,
      artistas: item.artistas,
    }));
    console.log("Obras de artes encontradas!", artworks);

    return artworks;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};
