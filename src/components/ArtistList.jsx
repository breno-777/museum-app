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

export function ArtistList({
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
        const url = item.foto ? item.foto : null;

        return (
          <>
            {isHorizontal ? (
              <VStack>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("artistDetails", { artist: item })
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: 20,
                  }}
                >
                  <VStack>
                    {item.foto !== null || item.foto !== "" ? (
                      <Image
                        alt={item.id.toString()}
                        source={{ uri: url }}
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
                          <Text>
                            {item.nome != ""
                              ? textLimit(item.nome, titleLimit || 24)
                              : "Desconhecido"}
                          </Text>
                          <Text>
                            {item.nacionalidade != ""
                              ? item.nacionalidade
                              : "Desconhecido"}
                          </Text>
                        </VStack>
                      </HStack>
                    ) : (
                      ""
                    )}
                  </VStack>
                </TouchableOpacity>
              </VStack>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("artistDetails", { artist: item })
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: 20,
                  }}
                >
                  {item.foto !== null || item.foto !== "" ? (
                    <Image
                      alt={item.id.toString()}
                      source={{ uri: url }}
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
                        <Text>
                          {item.nome != "" ? item.nome : "Desconhecido"}
                        </Text>
                        <Text>
                          {item.nacionalidade != ""
                            ? item.nacionalidade
                            : "Desconhecido"}
                        </Text>
                      </VStack>
                    </HStack>
                  ) : (
                    ""
                  )}
                </TouchableOpacity>
              </>
            )}
          </>
        );
      }}
    />
  );
}
