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
import { Octicons } from "@expo/vector-icons";

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
  ...rest
}) {
  const navigation = useNavigation();

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
      renderItem={({ item }) => {
        const urls =
          item.imagens && item.imagens.length > 0 ? item.imagens[0].url : null;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("details", { artkwork: item })}
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
              <HStack>
                <VStack>
                  <Text>{item.nome != "" ? item.nome : "Desconhecido"}</Text>
                  <Text>{item.ano != "" ? item.ano : "Desconhecido"}</Text>
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
