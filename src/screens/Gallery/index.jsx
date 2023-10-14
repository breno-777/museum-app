import React, { useEffect } from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { HStack, ScrollView, VStack, Text, Stack, Icon } from "native-base";
import NavBar from "../../components/NavBar";
import { SearchBar } from "../../components/SearchBar";
import { ArtworkList } from "../../components/ArtworkList";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { userGallery } from "../../constants/requests/user/userGallery";

export function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(async () => {
    setArtworks([]);
    const response = await userGallery(id);
    console.log(response);
    setArtworks(response);
  }, []);

  return (
    <>
      <NavBar zIndex={9999} />
      <ScrollView>
        <VStack
          safeArea={true}
          px={2}
          style={{
            gap: 4,
          }}
        >
          <HStack justifyContent={"space-between"} alignItems={"center"} px={2}>
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
            filterOn={true}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
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

          <ArtworkList
            data={artworks}
            isHorizontal={true}
            enableDetails={false}
            imageWidth={40}
            imageHeight={32}
          />
          <HStack
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"2xl"} fontWeight={600}>
              Artworks
            </Text>
            <Icon as={<Octicons name={"chevron-right"} />} size={8} />
          </HStack>
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
