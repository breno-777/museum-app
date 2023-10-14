import { Alert } from "react-native";
import api from "../../api";
import { useNavigation } from "@react-navigation/native";

export const deleteAccount = async ({ id }) => {
  const navigation = useNavigation();
  try {
    Alert.alert("Deletar Conta");
    await api.delete(`/usuarios/${id}`).then((response) => {
      console.log("Usuário deletado com sucesso!", response);
    });
    navigation.navigate("sigIn");
  } catch (error) {
    console.error("Error ao deletar usuário", error);
    return false;
  }
};
