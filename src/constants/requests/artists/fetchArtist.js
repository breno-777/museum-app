import api from "../../api";

export const fetchArtist = async ({ page, size }) => {
  try {
    const response = await api.get(`/artistas?page=${page}&size=${size}`);
    console.log(page);

    const artists = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      foto: item.foto,
      nascimento: item.nascimento,
      falecimento: item.falecimento,
      nacionalidade: item.nacionalidade,
    }));
    console.log("Artistas encontrados!", artists);

    return artists;
  } catch (error) {
    console.error("Nenhum artista encontrado", error);
    return false;
  }
};

export const fetchArtistByName = async (nome) => {
  try {
    const response = await api.get(`/artistas/nome/${nome}`);
    const artists = response.data.map((item) => ({
      id: item.id,
      nome: item.nome,
      foto: item.foto,
      nascimento: item.nascimento,
      falecimento: item.falecimento,
      descricao: item.descricao,
      nacionalidade: item.nacionalidade,
    }));
    console.log("Artistas encontrados!");
    return artists;
  } catch (error) {
    console.error("Nenhum artista encontrado", error);
    return false;
  }
};
