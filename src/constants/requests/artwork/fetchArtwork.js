import api from "../../api";

export const fetchArtwork = async ({ page, size }) => {
  try {
    const response = await api.get(`/obras-de-artes?page=${page}&size=${size}`);

    const artworks = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      ano: item.ano,
      descricao: item.descricao,
      imagens: item.imagens,
      artistas: item.artistas,
    }));
    console.log("Obras de artes encontradas!");

    return artworks;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};

export const fetchArtworkById = async (id) => {
  try {
    const response = await api.get(`/obras-de-artes/artista/${id}`);
    const artworks = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      ano: item.ano,
      descricao: item.descricao,
      imagens: item.imagens,
      artistas: item.artistas,
    }));
    console.log("Obras de artes encontradas!");

    return artworks;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};

export const fetchArtworkByArtworkName = async (nome) => {
  try {
    const response = await api.get(`/obras-de-artes/nome/${nome}`);

    const artists = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      ano: item.ano,
      descricao: item.descricao,
      imagens: item.imagens,
      artistas: item.artistas,
    }));
    console.log("Obras de artes encontradas!");

    return artists;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};

export const fetchArtworkByArtistName = async (nome) => {
  try {
    const response = await api.get(`/obras-de-artes/artista/nome/${nome}`);

    const artists = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      ano: item.ano,
      descricao: item.descricao,
      imagens: item.imagens,
      artistas: item.artistas,
    }));
    console.log("Obras de artes encontradas!");

    return artists;
  } catch (error) {
    console.error("Nenhuma obra de arte encontrada", error);
    return false;
  }
};
