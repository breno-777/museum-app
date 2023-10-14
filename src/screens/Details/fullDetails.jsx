import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import { HStack, VStack, Icon, Text, Stack, Spinner } from "native-base";
import { ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArtworkModalSheet } from "../../components/ArtworkModalSheet";
import { fetchArtworkDetails } from "../../constants/requests/artwork/fetchArtworkDetails";
import { userGallery } from "../../constants/requests/user/userGallery";
import { favoriteArtwork } from "../../constants/requests/artwork/favoriteArtwork";
import { unfavoriteArtwork } from "../../constants/requests/artwork/unfavoriteArtwork";

export function FullDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { artkwork } = route.params;

  const [artworkModalIsOpen, setArtworkModalIsOpen] = useState(false);
  const [artworkDetails, setArtworkDetails] = useState();
  const [favorite, setFavorite] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCheckFavorite = async () => {
    try {
      const gallery = await userGallery(1);
      const checkFavorite = gallery.some((art) => art.id === artkwork.id);
      if (checkFavorite) {
        console.error("Obra de arte encontrada na galeria do usuário");
        return true;
      } else {
        console.log("Obra de arte não está na galeria do usuário");
        return false;
      }
    } catch (error) {
      console.error("Falha ao verificar obra de arte", error);
    }
  };

  const handleAddFavorite = async () => {
    try {
      const artworks = await userGallery(1);
      const checkFavorite = artworks.some((art) => art.id === artkwork.id);

      if (checkFavorite) {
        unfavoriteArtwork(1, artkwork.id);
        setFavorite(false);
        console.error("Obra de arte já está na galeria do usuário");
      } else {
        favoriteArtwork(1, artkwork.id);
        setFavorite(true);
        console.log("Obra de arte adicionada a galeria do usuário");
      }
    } catch (error) {
      console.error("Erro ao adicionar obra de arte a galeria:", error);
      setFavorite(false);
    }
  };

  useEffect(() => {
    handleCheckFavorite();
    const response = fetchArtworkDetails(artkwork);
    console.log(artkwork);
    setArtworkDetails(response);
  }, []);

  const urls =
    artkwork.imagens && artkwork.imagens.length > 0
      ? artkwork.imagens[0].url
      : null;

  return (
    <VStack
      flex={1}
      alignContent={"center"}
      bg={{
        linearGradient: {
          colors: [
            "rgba(0, 0, 0, 0.8)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
          ],
          start: [0, 0.01],
        },
      }}
    >
      <ArtworkModalSheet data={artkwork} />
      <HStack
        safeArea
        mx={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TouchableOpacity onPress={() => handleGoBack()}>
          <Stack bgColor={"gray.25"} rounded={10} p={1}>
            <Icon
              as={<Ionicons name={"chevron-back"} />}
              size={8}
              color={"white"}
            />
          </Stack>
        </TouchableOpacity>

        <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
          {artkwork.nome}
        </Text>
        {/* <Spinner size={"lg"} color={"white"} /> */}
        <TouchableOpacity onPress={() => handleAddFavorite()}>
          <Stack rounded={10} p={1}>
            <Icon
              as={<Ionicons name={favorite ? "star" : "star-outline"} />}
              size={8}
              color={favorite ? "secondary.700" : "white"}
            />
          </Stack>
        </TouchableOpacity>
      </HStack>

      <VStack
        flex={1}
        justifyContent={"center"}
        h={"full"}
        w={"full"}
        position={"absolute"}
        zIndex={-1}
      >
        <ImageBackground
          source={{ uri: urls }}
          style={{
            flex: 1,
          }}
        />
      </VStack>
    </VStack>
  );
}
