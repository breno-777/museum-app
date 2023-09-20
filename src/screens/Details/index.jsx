import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { HStack, VStack, Icon, Text, Stack, Spinner } from "native-base";
import bgImage from "../../assets/images/details-screen.png";
import { ImageBackground, TouchableOpacity } from "react-native";
import RandomButtonsContainer from "../../js/randomButtonsContainer";

export function Details() {
  return (
    <VStack
      flex={1}
      alignContent={"center"}
      bg={{
        linearGradient: {
          colors: [
            "rgba(0, 0, 0, 0.7)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
          ],
          start: [0, 0.01],
        },
      }}
    >
      <HStack
        safeArea
        mx={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TouchableOpacity>
          <Stack bgColor={"gray.25"} rounded={10} p={1}>
            <Icon
              as={<Ionicons name={"chevron-back"} />}
              size={8}
              color={"white"}
            />
          </Stack>
        </TouchableOpacity>

        <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
          Scanning...
        </Text>
        <Spinner size={"lg"} color={"white"} />
      </HStack>
      <RandomButtonsContainer itemCount={3} />
      <VStack
        flex={1}
        justifyContent={"center"}
        h={"full"}
        w={"full"}
        position={"absolute"}
        zIndex={-1}
      >
        <ImageBackground
          source={bgImage}
          style={{
            flex: 1,
          }}
        />
      </VStack>
    </VStack>
  );
}
