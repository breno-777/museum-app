import React from "react";
import {
  FlatList,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Icon,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Octicons, Ionicons } from "@expo/vector-icons";

export function ArtworkList({
  data,
  isHorizontal,
  enableDetails,
  imageWidth,
  imageHeight,
  borderRadius,
  title,
  canNavigate,
  screen,
  titleLimit,
  ...rest
}) {
  const navigation = useNavigation();

  function textLimit(text, limit) {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  }

  return (
    <FlatList
      {...rest}
      horizontal={isHorizontal ? true : false}
      scrollEnabled={isHorizontal ? true : false}
      contentContainerStyle={{
        gap: 10,
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        canNavigate ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(screen);
            }}
          >
            <HStack
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={"2xl"} fontWeight={600}>
                {title}
              </Text>
              <Icon as={<Octicons name={"chevron-right"} />} size={8} />
            </HStack>
          </TouchableOpacity>
        ) : title != "" ? (
          <HStack
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"2xl"} fontWeight={600}>
              {title}
            </Text>
          </HStack>
        ) : (
          <></>
        )
      }
      ListEmptyComponent={
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"2xl"} color={"gray.200"}>
            There's nothing here!
          </Text>
          <Icon
            as={<Ionicons name={"file-tray-outline"} alignContent={"center"} />}
            size={20}
            color={"gray.200"}
            ml={2}
          />
        </VStack>
      }
      renderItem={({ item }) => {
        const urls =
          item.imagens && item.imagens.length > 0 ? item.imagens[0].url : null;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("details", { artwork: item })}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            {item.image !== null || item.image !== "" ? (
              <Image
                alt={item.id.toString()}
                source={{ uri: urls }}
                w={imageWidth || 100}
                h={imageHeight || 100}
                borderRadius={borderRadius || 16}
              />
            ) : (
              <Stack
                bgColor={"black"}
                w={imageWidth || 100}
                h={imageHeight || 100}
                borderRadius={borderRadius || 16}
              />
            )}
            {enableDetails ? (
              <HStack mt={2}>
                <VStack>
                  <Text fontSize={"md"}>
                    {item.nome != ""
                      ? textLimit(item.nome, titleLimit || 24)
                      : "Desconhecido"}
                  </Text>
                  <Text>
                    {item.ano != "" ? "Ano: " + item.ano : "Desconhecido"}
                  </Text>
                </VStack>
              </HStack>
            ) : (
              ""
            )}
          </TouchableOpacity>
        );
      }}
    />
  );
}
