import api from "../../api";
import { saveUserIdToStorage } from "../../uuid";

export const signUp = async ({ username, email, password }) => {
  try {
    const data = {
      nome: username,
      email: email,
      senha: password,
    };
    await api.post(`/usuarios`, data).then((response) => {
      console.log("Usuário cadastrado com sucesso!");
      saveUserIdToStorage(response.data.id);
    });
    return true;
  } catch (error) {
    console.error("Error ao cadastrar usuário", error);
    return false;
  }
};
