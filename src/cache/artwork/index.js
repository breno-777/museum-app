// import AsyncStorage from "@react-native-async-storage/async-storage";

// //  Verifica se a obra de arte já está no cache
// export const verifyCache = async (cacheKey, mangaDetails) => {
//   try {
//     const cachedResponse = await AsyncStorage.getItem(cacheKey);

//     if (cachedResponse) {
//       return JSON.parse(cachedResponse);
//     } else {
//       await AsyncStorage.setItem(cacheKey, JSON.stringify(mangaDetails));
//       return null;
//     }
//   } catch (error) {
//     console.error("Cache not found: ", error);
//     throw error;
//   }
// };

// //  Limpa o cache de uma obra de arte especifica
// export const clearCache = async (cacheKey) => {
//   try {
//     await AsyncStorage.removeItem(cacheKey);
//     console.log("Cache Limpo!");
//   } catch (error) {
//     console.error("Falha ao Limpar Cache");
//   }
// };

// //  Clears all caches except or including favorites
// export const clearAllCache = async (includeFavorite = false) => {
//   try {
//     if (includeFavorite) {
//       await AsyncStorage.clear();
//     } else {
//       const keys = AsyncStorage.getAllKeys();
//       const keysToKeep = ["favorites"];
//       const keysToDelete = (await keys).filter(
//         (key) => !keysToKeep.includes(key)
//       );
//       await AsyncStorage.multiRemove(keysToDelete);
//     }

//     console.log("Successfully cleared cache!");
//   } catch (error) {
//     console.error("Error clearing cache: ", error);
//   }
// };
