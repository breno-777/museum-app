import { Modalize } from "react-native-modalize";
import { Ionicons } from "@expo/vector-icons";

import { ImageBackground } from "react-native";
import React, { useRef } from "react";
import {
  VStack,
  Image,
  Button,
  Text,
  View,
  HStack,
  Icon,
  Input,
} from "native-base";
import bgImage from "../../assets/images/signIn-screen.png";

export function SignIn() {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <VStack flex={1} justifyContent={"center"}>
        <Image
          source={bgImage}
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          right={-83}
        />
        <HStack position={"absolute"} top={0} mx={4} safeArea>
          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            color={"white"}
            right={90}
            w={"100%"}
          >
            A vida é uma {"\n"}ART
          </Text>
        </HStack>

        <VStack flex={1} justifyContent={"flex-end"} mb={"30%"}>
          <Button w={"100%"} mb={2} rounded={16} shadow={2}>
            <Text fontSize={"lg"}> SignIn</Text>
          </Button>
          <Button rounded={16} onPress={onOpen} bgColor={"white"} shadow={2}>
            <Text fontSize={"lg"} color={"#1982a2"}>
              {" "}
              SignUp
            </Text>
          </Button>
        </VStack>
      </VStack>

      <Modalize
        ref={modalizeRef}
        snapPoint={450}
        modalHeight={450}
        HeaderComponent={
          <HStack>
            <Text fontSize={"3xl"} fontWeight={"bold"} my={4} mx={6}>
              New {"\n"}Account
            </Text>
          </HStack>
        }
      >
        <VStack mx={6} h={"100%"} alignContent={"center"}>
          <VStack
            borderBottomWidth={2}
            borderBottomColor={"gray.200"}
            pt={4}
            px={2}
          >
            <Input
              borderColor={"transparent"}
              InputLeftElement={
                <Icon
                  as={
                    <Ionicons name={"mail-outline"} size={24} color={"gray"} />
                  }
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="alice@gmail.com"
            />
          </VStack>

          <VStack
            borderBottomWidth={2}
            borderBottomColor={"gray.200"}
            pt={4}
            px={2}
          >
            <Input
              borderColor={"transparent"}
              InputLeftElement={
                <Icon
                  as={
                    <Ionicons
                      name={"person-outline"}
                      size={24}
                      color={"gray"}
                    />
                  }
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="Alice"
            />
          </VStack>
          <VStack
            borderBottomWidth={2}
            borderBottomColor={"gray.200"}
            pt={4}
            px={2}
          >
            <Input
              borderColor={"transparent"}
              InputLeftElement={
                <Icon
                  as={
                    <Ionicons name={"key-outline"} size={24} color={"gray"} />
                  }
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="123456"
            />
          </VStack>

          <Button borderRadius={50} py={4} mt={8} mb={4} shadow={2}>
            Sign In
          </Button>
        </VStack>
      </Modalize>
    </>
  );
}
