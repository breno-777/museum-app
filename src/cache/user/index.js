// import AsyncStorage from "@react-native-async-storage/async-storage";

// //  Verifica se o usuário já está no cache
// export const verifyCache = async (cacheKey, userDetails) => {
//   try {
//     const cachedResponse = await AsyncStorage.getItem(cacheKey);

//     if (cachedResponse) {
//       return JSON.parse(cachedResponse);
//     } else {
//       await AsyncStorage.setItem(cacheKey, JSON.stringify(userDetails));
//       return null;
//     }
//   } catch (error) {
//     console.error("Cache not found: ", error);
//     throw error;
//   }
// };

// const storedData = await AsyncStorage.getItem(cacheKey);
// if (storedData) {
//   const userData = JSON.parse(storedData);
// }

// //  Limpa o cache de uma usuário
// export const clearCache = async (cacheKey) => {
//   try {
//     await AsyncStorage.removeItem(cacheKey);
//     console.log("Cache Limpo!");
//   } catch (error) {
//     console.error("Falha ao Limpar Cache");
//   }
// };

// import AsyncStorage from "@react-native-async-storage/async-storage";
