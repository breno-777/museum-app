import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { Icon, HStack, ScrollView, Stack, Text, VStack } from "native-base";
import { ArtworkList } from "../../components/ArtworkList";
import NavBar from "../../components/NavBar";
import { Octicons } from "@expo/vector-icons";

import { fetchArtwork } from "../../constants/requests/artwork/fetchArtwork";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { fetchArtist } from "../../constants/requests/artists/fetchArtist";
import { ArtistList } from "../../components/ArtistList";

export function Home() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [artists, setArtists] = useState([]);

  const itemPerPage = 5;

  useEffect(() => {
    fetchArtwork({ page: 0, size: itemPerPage }).then((response) => {
      setArtworks(response);
    });

    fetchArtist({ page: 0, size: itemPerPage }).then((response) => {
      setArtists(response);
    });
  }, []);

  return (
    <>
      <NavBar zIndex={9999} />
      <ScrollView>
        <VStack
          pb={24}
          safeArea={true}
          px={2}
          style={{
            gap: 10,
          }}
        >
          <HStack justifyContent={"space-between"} alignItems={"center"} px={2}>
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"#424242"}>
              {"Welcome to\nAR Museum Guide"}
            </Text>
            <Stack
              borderWidth={1}
              borderColor={"brown.700"}
              rounded={50}
              alignContent={"center"}
              justifyContent={"center"}
              p={4}
            >
              {/* <Image source={avatar} w={100} h={100} /> */}
              <Icon
                as={<Octicons name={"device-camera"} />}
                size={8}
                color={"brown.500"}
              />
            </Stack>
          </HStack>
          <SearchBar
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("exploreArtists", { isArtist: true });
            }}
          >
            <HStack
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={"2xl"} fontWeight={600}>
                Artists
              </Text>
              <Icon as={<Octicons name={"chevron-right"} />} size={8} />
            </HStack>
          </TouchableOpacity>

          <ArtistList
            data={artists}
            isHorizontal={true}
            enableDetails={true}
            imageWidth={40}
            imageHeight={32}
          />

          <ArtworkList
            title={"Popular"}
            screen={"explore"}
            canNavigate={true}
            data={artworks}
            enableDetails={true}
            imageWidth={40}
            imageHeight={32}
          />
        </VStack>
      </ScrollView>
    </>
  );
}
