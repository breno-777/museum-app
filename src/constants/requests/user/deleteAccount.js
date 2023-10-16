import { Alert } from "react-native";
import api from "../../api";
import { getUserIdFromStorage } from "./userDetails";

export const deleteAccount = async (navigation) => {
  const id = await getUserIdFromStorage();

  const showConfirmationAlert = () => {
    return new Promise((resolve) => {
      Alert.alert(
        "Deletar Conta",
        "Tem certeza que deseja deletar sua conta?\nTodos os dados serão perdidos permanentemente!",
        [
          {
            text: "Cancelar",
            onPress: () => resolve(false),
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: () => resolve(true),
          },
        ],
        { cancelable: false }
      );
    });
  };

  try {
    const confirmed = await showConfirmationAlert();

    if (confirmed) {
      await api.delete(`/usuarios/${id}`);
      console.warn("Usuário deletado com sucesso!");
      navigation.navigate("signIn");
    } else {
      console.warn("Confirmação rejeitada. Deleção cancelada.");
    }
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    return false;
  }
};
