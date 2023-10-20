import api from "../../api";

export const fetchArtistDetails = async (id) => {
  try {
    const response = await api.get(`/artistas/${id}`);

    if (response.status === 200) {
      if (response.data && response.data.id) {
        const artist = {
          id: response.data.id,
          nome: response.data.nome,
          foto: response.data.foto,
          nascimento: response.data.nascimento,
          falecimento: response.data.falecimento,
          descricao: response.data.descricao,
          nacionalidade: response.data.nacionalidade,
        };
        console.log("Detalhes do artista encontrados:", artist);
        return artist;
      } else {
        console.error(
          "Resposta da API não contém os dados esperados:",
          response.data
        );
        return false;
      }
    } else {
      console.error(
        "Erro ao obter os dados. Status da resposta:",
        response.status
      );
      return false;
    }
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    return false;
  }
};
