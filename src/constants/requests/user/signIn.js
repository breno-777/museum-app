import api from "../../api";
import { saveUserIdToStorage } from "../../uuid";
export const signIn = async ({ username, password }) => {
  try {
    const response = await api.post("/login", {
      nome: username,
      senha: password,
    });

    console.log(response);
    // Change by ${id}
    await saveUserIdToStorage(1);

    return true;
  } catch (error) {
    console.error("Falha ao fazer login", error);
  }
};
