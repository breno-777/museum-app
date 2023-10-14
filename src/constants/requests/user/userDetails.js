import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../api";

export const userDetails = async () => {
  try {
    const response = await api.get(`/usuarios/${id}`);
    console.log("Detalhes de usuário encontrado:", response.data);

    details = {
      nome: response.nome,
      email: response.email,
    };

    return details;
  } catch (error) {
    console.error(
      "Não foi possível encontrar nenhuma informações do usuário",
      error
    );
    return false;
  }
};

export const getUserIdFromStorage = async () => {
  try {
    const userId = await AsyncStorage.getItem("userId");
    if (userId !== null) {
      // ID do usuário recuperado com sucesso
      return userId;
    } else {
      // Não há ID do usuário armazenado
      return null;
    }
  } catch (error) {
    console.error("Erro ao recuperar ID do usuário:", error);
    return null;
  }
};

export const removeUserIdFromStorage = async () => {
  try {
    await AsyncStorage.removeItem("userId");
    console.log("ID do usuário removido com sucesso.");
  } catch (error) {
    console.error("Erro ao remover ID do usuário:", error);
  }
};
