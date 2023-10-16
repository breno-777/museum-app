import {
  VStack,
  Text,
  Image,
  Icon,
  HStack,
  ScrollView,
  Stack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { fetchArtistDetails } from "../../constants/requests/artists/fetchArtistDetails";
import { fetchArtworkById } from "../../constants/requests/artwork/fetchArtwork";
import { ArtworkList } from "../../components/ArtworkList";
import { TextExpander } from "../../components/TextExpander";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ArtistDetails = () => {
  const route = useRoute();
  const { artist } = route.params;
  const [selectedArtist, setSelectedArtist] = useState(artist);
  const [artworks, setArtworks] = useState([]);

  const fetchData = async () => {
    await fetchArtistDetails(artist.id).then((response) => {
      setSelectedArtist(response);
    });

    await fetchArtworkById(artist.id).then((response) => {
      setArtworks(response);
    });
  };

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  colors: ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.8)"],
                  start: [0, 0.1],
                },
              }}
            >
              <Image
                w={"100%"}
                h={220}
                zIndex={-1}
                blurRadius={15}
                source={{ uri: selectedArtist.foto }}
                alt={"Secondary manga Thumbnail"}
              />
            </Stack>

            <HStack safeArea position={"absolute"} w={"full"}>
              <TouchableOpacity onPress={() => handleGoBack()}>
                <Stack bgColor={"gray.25"} rounded={10} p={1} ml={2}>
                  <Icon
                    as={<Ionicons name={"chevron-back"} />}
                    size={8}
                    color={"white"}
                  />
                </Stack>
              </TouchableOpacity>
            </HStack>

            <VStack px={2} w={"full"}>
              <VStack
                w={"full"}
                mt={-100}
                mb={15}
                alignItems={"center"}
                borderBottomWidth={1}
                borderColor={"gray.100"}
              >
                <Image
                  w={200}
                  h={200}
                  mb={2}
                  rounded={999}
                  resizeMode="cover"
                  source={{ uri: selectedArtist.foto }}
                  alt={"Artist Photo"}
                />
                <VStack flex={1} alignItems={"center"} mx={2}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    {artist.nome}
                  </Text>
                  <Text fontSize={"xl"}>
                    {artist.nacionalidade === ""
                      ? "Desconhecido"
                      : artist.nacionalidade}
                  </Text>
                </VStack>
                <VStack>
                  <TextExpander
                    textAlign={""}
                    maxLines={2}
                    fontSize={"md"}
                    text={
                      selectedArtist.descricao != ""
                        ? selectedArtist.descricao
                        : "Nenhuma Informação disponível"
                    }
                  />
                </VStack>
              </VStack>

              <ArtworkList
                data={artworks}
                enableDetails={true}
                imageWidth={40}
                imageHeight={32}
              />

              {/* <HStack justifyContent={"space-around"} my={2}>
                <VStack alignItems={"center"}>
                  <Icon
                    as={<Ionicons name={"hourglass-outline"} />}
                    size={6}
                    color={"gray.400"}
                  />
                  <Text textAlign={"center"}>Days</Text>
                </VStack>

                <VStack alignItems={"center"}>
                  <Icon
                    as={<Ionicons name={"earth-outline"} />}
                    size={6}
                    color={"gray.400"}
                  />
                  <Text textAlign={"center"}>WebView</Text>
                </VStack>
              </HStack> */}
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
