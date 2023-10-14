import api from "../../api";

export const signUp = async ({ username, email, password }) => {
  try {
    const data = {
      nome: username,
      email: email,
      senha: password,
    };
    await api.post(`/usuarios`, data).then((response) => {
      console.log(response.data);
      console.log("Usuário cadastrado com sucesso!");
    });
    return true;
  } catch (error) {
    console.error("Error ao cadastrar usuário", error);
    return false;
  }
};
