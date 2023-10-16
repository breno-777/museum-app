import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserIdToStorage = async (userId) => {
  try {
    await AsyncStorage.setItem("userId", userId.toString());
    console.log("ID do usuário salvo com sucesso.");
  } catch (error) {
    console.error("Erro ao salvar ID do usuário:", error);
  }
};
