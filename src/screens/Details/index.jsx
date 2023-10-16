import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import { HStack, VStack, Icon, Text, Stack } from "native-base";
import { ImageBackground, TouchableOpacity } from "react-native";
import RandomButtonsContainer from "../../js/randomButtonsContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArtworkModalSheet } from "../../components/ArtworkModalSheet";
import { fetchArtistDetails } from "../../constants/requests/artists/fetchArtistDetails";

export function Details() {
  const route = useRoute();
  const [isOpen, setIsOpen] = useState(false);
  const [artist, setArtist] = useState();

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const { artwork } = route.params;
  const urls =
    artwork.imagens && artwork.imagens.length > 0
      ? artwork.imagens[0].url
      : null;

  useEffect(() => {
    fetchArtistDetails(artwork.artistas[0].id).then((response) => {
      setArtist(response);
    });
  }, []);

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
      <ArtworkModalSheet
        data={artwork}
        artist={artist}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
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
          {artwork.nome}
        </Text>
        {/* <Spinner size={"lg"} color={"white"} /> */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("fullDetails", {
              artwork: artwork,
              artist: artist,
            })
          }
          style={{ rounded: 10, padding: 1 }}
        >
          <Icon as={<Ionicons name={"add"} />} size={8} color={"white"} />
        </TouchableOpacity>
      </HStack>
      <RandomButtonsContainer itemCount={3} setIsOpen={setIsOpen} />
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
