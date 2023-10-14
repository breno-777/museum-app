import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../api";

// export const checkEmail = async ({ email }) => {
//   try {
//     const response = await api.get(`/usuarios/email/${email}`);
//     if (response.data.length > 0) {
//       const id = response.data[0].id;
//       console.log(`Email ${email} encontrado! ID: ${id}`);
//       return id;
//     } else {
//       console.log(`Email ${email} não encontrado.`);
//       return null;
//     }
//   } catch (error) {
//     console.error("Email não cadastrado", error);
//     return null;
//   }
// };

// export const checkUsername = async ({ username }) => {
//   try {
//     const response = await api.get(`/usuarios/nome/${username}`);
//     if (response.data.length > 0) {
//       const id = response.data[0].id;
//       console.log(`${username} encontrado! ID: ${id}`);
//       return id;
//     } else {
//       console.log(`${username} não encontrado.`);
//       return null;
//     }
//   } catch (error) {
//     console.error("Usuário não cadastrado", error);
//     return null;
//   }
// };

const saveUserIdToStorage = async (userId) => {
  try {
    await AsyncStorage.setItem("userId", userId.toString());
    console.log("ID do usuário salvo com sucesso.");
  } catch (error) {
    console.error("Erro ao salvar ID do usuário:", error);
  }
};

export const signIn = async ({ username, password }) => {
  // const { id } = useParams();
  try {
    const response = await api.post("/login", {
      nome: username,
      senha: password,
    });

    let userId = 1;
    await saveUserIdToStorage(userId);

    return true;
  } catch (error) {
    console.error("Falha ao fazer login", error);
  }
};
