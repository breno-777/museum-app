import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import {
  HStack,
  VStack,
  Text,
  Stack,
  Image,
  ScrollView,
  Icon,
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchArtworkDetails } from "../../constants/requests/artwork/fetchArtworkDetails";
import { userGallery } from "../../constants/requests/user/userGallery";
import { favoriteArtwork } from "../../constants/requests/artwork/favoriteArtwork";
import { unfavoriteArtwork } from "../../constants/requests/artwork/unfavoriteArtwork";
import { TouchableOpacity } from "react-native-gesture-handler";

export function FullDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { artwork, artist } = route.params;

  const [artworkDetails, setArtworkDetails] = useState();
  const [favorite, setFavorite] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCheckFavorite = async () => {
    try {
      const gallery = await userGallery();
      const checkFavorite = gallery.some((art) => art.id === artwork.id);
      if (checkFavorite) {
        console.log("Obra de arte encontrada na galeria do usuário");
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
      const response = await handleCheckFavorite();

      if (response) {
        console.log("Removendo obra de arte dos favoritos");
        unfavoriteArtwork(artwork.id);
        setFavorite(false);
      } else {
        console.log("Adicionando obra de arte aos favoritos");
        favoriteArtwork(artwork.id);
        setFavorite(true);
      }
    } catch (error) {
      console.error("Erro ao adicionar obra de arte a galeria:", error);
      setFavorite(false);
    }
  };

  useEffect(() => {
    const response = fetchArtworkDetails(artwork.id);
    setArtworkDetails(response);
    handleCheckFavorite().then((response) => {
      response ? setFavorite(true) : setFavorite(false);
    });
  }, []);

  const urls =
    artwork.imagens && artwork.imagens.length > 0
      ? artwork.imagens[0].url
      : null;

  return (
    <ScrollView showsVerticalScrollIndicator={false} bgColor={"white"}>
      <VStack mb={20}>
        <VStack flex={1}>
          <VStack alignItems={"center"} flex={1}>
            <Stack
              bgColor={"gray.800"}
              w={"100%"}
              bg={{
                linearGradient: {
                  colors: ["rgba(0, 0, 0, 0.4)", "rgba(255, 255, 255, 0)"],
                  start: [0, 0.1],
                },
              }}
            >
              <HStack
                safeArea
                position={"absolute"}
                justifyContent={"space-between"}
                px={2}
                w={"full"}
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
                <TouchableOpacity
                  onPress={() => handleAddFavorite()}
                  style={{ rounded: 10, padding: 1 }}
                >
                  <Icon
                    as={<Ionicons name={favorite ? "star" : "star-outline"} />}
                    size={8}
                    color={favorite ? "secondary.700" : "white"}
                  />
                </TouchableOpacity>
              </HStack>
              <Image
                w={"100%"}
                h={280}
                zIndex={-1}
                source={{ uri: urls }}
                alt={"Secondary manga Thumbnail"}
              />
            </Stack>

            <VStack px={2} w={"full"}>
              <VStack
                w={"full"}
                mt={-100}
                mb={15}
                alignItems={"center"}
                borderBottomWidth={1}
                borderColor={"gray.100"}
              >
                <VStack flex={1} alignItems={"center"} mx={2} mt={"30%"}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    {artwork.nome}
                  </Text>
                  <Text fontSize={"xl"}>
                    {artwork.ano === "" ? "Desconhecido" : artwork.ano}
                  </Text>
                </VStack>
              </VStack>

              <TouchableOpacity onPress={() => {
              navigation.navigate("artistDetails", { artist: artist });
            }}>
                <HStack alignItems={"center"}>
                  <Image
                    alt={artist.id.toString()}
                    source={{ uri: artist.foto }}
                    w={120}
                    h={120}
                    rounded={9999}
                  />
                  <VStack ml={2}>
                    <Text fontSize={"xl"}>{artist.nome}</Text>
                    <Text>{artist.nacionalidade}</Text>
                  </VStack>
                </HStack>
              </TouchableOpacity>

              <VStack w={"full"} mt={-100} mb={15} alignItems={"center"}>
                <VStack flex={1} alignItems={"center"} mx={2} mt={"30%"}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    Descrição
                  </Text>
                  <Text fontSize={"xl"}>
                    {artwork.descricao === ""
                      ? "Desconhecido"
                      : artwork.descricao}
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
