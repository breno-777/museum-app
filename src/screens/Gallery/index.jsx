import React, { useEffect } from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { HStack, ScrollView, VStack, Text, Stack, Icon } from "native-base";
import NavBar from "../../components/NavBar";
import { SearchBar } from "../../components/SearchBar";
import { ArtworkList } from "../../components/ArtworkList";
import { useState } from "react";
import { RefreshControl, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { userGallery } from "../../constants/requests/user/userGallery";

export function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);

  const [refresh, setRefresh] = useState(false);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const fetchData = async () => {
    try {
      const response = await userGallery();
      setArtworks(response);
    } catch (error) {
      console.error("Erro ao buscar galeria de usuário", error);
    }
  };

  const handleRefresh = async () => {
    setRefresh(true);
    setArtworks([]);
    await fetchData();
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar zIndex={9999} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => handleRefresh()}
          />
        }
      >
        <VStack
          safeArea={true}
          px={2}
          style={{
            gap: 4,
          }}
        >
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <TouchableOpacity onPress={() => handleGoBack()}>
              <Stack bgColor={"gray.100"} rounded={10} p={1}>
                <Icon
                  as={<Ionicons name={"chevron-back"} />}
                  size={8}
                  color={"black"}
                />
              </Stack>
            </TouchableOpacity>
          </HStack>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Personal Gallery
          </Text>
          <SearchBar
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />

          <ScrollView
            mb={24}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <ArtworkList data={artworks} enableDetails={true} />
          </ScrollView>
        </VStack>
      </ScrollView>
    </>
  );
}
