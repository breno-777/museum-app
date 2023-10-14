import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import { HStack, VStack, Icon, Text, Stack, Spinner } from "native-base";
import bgImage from "../../assets/images/details-screen.png";
import { ImageBackground, TouchableOpacity } from "react-native";
import RandomButtonsContainer from "../../js/randomButtonsContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArtworkModalSheet } from "../../components/ArtworkModalSheet";

export function Details() {
  const route = useRoute();
  const [artworkModalIsOpen, setArtworkModalIsOpen] = useState(false);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const { artkwork } = route.params;
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("fullDetails", { artkwork: artkwork })
          }
          style={{ rounded: 10, padding: 1 }}
        >
          <Icon as={<Ionicons name={"add"} />} size={8} color={"white"} />
        </TouchableOpacity>
      </HStack>
      <RandomButtonsContainer
        itemCount={3}
        setArtworkModalIsOpen={setArtworkModalIsOpen}
      />
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
