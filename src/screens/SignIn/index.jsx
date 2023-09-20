import { Modalize } from "react-native-modalize";
import { Ionicons, Octicons } from "@expo/vector-icons";

import { ImageBackground } from "react-native";
import React, { useRef } from "react";
import { VStack, Button, Text, HStack, Icon, Input, Stack } from "native-base";
import bgImage from "../../assets/images/signIn-screen.png";
import { StyledTitle, WelcomeStyledTitle } from "../../components/StyledTitle";

export function SignIn() {
  const signInRef = useRef(null);
  const signUpRef = useRef(null);

  const handleOpenSignIn = () => {
    if (signInRef.current) {
      signInRef.current.open();
    }
  };
  const handleOpenSignUp = () => {
    if (signUpRef.current) {
      signUpRef.current.open();
    }
  };

  return (
    <>
      <VStack flex={1} justifyContent={"center"} h={"full"} w={"full"}>
        <ImageBackground
          source={bgImage}
          style={{
            flex: 1,
          }}
        >
          <HStack position={"absolute"} top={0} mx={4} safeArea>
            <VStack>
              <WelcomeStyledTitle
                title={"A VIDA É UMA"}
                subtitle={"ART"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                color={"white"}
                w={"100%"}
              />
            </VStack>
          </HStack>

          <VStack flex={1} justifyContent={"flex-end"} mb={"30%"} space={2}>
            <Button
              onPress={handleOpenSignIn}
              rounded={16}
              shadow={2}
              bgColor={"brown.600"}
              mx={8}
            >
              <Text fontSize={"lg"} color={"white"}>
                SignIn
              </Text>
            </Button>

            <Button
              onPress={handleOpenSignUp}
              rounded={16}
              bgColor={"white"}
              shadow={2}
              mx={8}
            >
              <Text fontSize={"lg"} color={"brown.600"}>
                SignUp
              </Text>
            </Button>
          </VStack>
        </ImageBackground>
      </VStack>

      <Modalize
        ref={signUpRef}
        snapPoint={450}
        modalHeight={450}
        HeaderComponent={
          <HStack alignItems={"center"} justifyContent={"space-between"} m={6}>
            <Text fontSize={"3xl"} fontWeight={"bold"} lineHeight={30}>
              New {"\n"}Account
            </Text>

            <Stack
              borderWidth={1}
              borderColor={"brown.700"}
              rounded={999}
              alignContent={"center"}
              justifyContent={"center"}
              p={4}
            >
              <Icon
                as={<Octicons name={"device-camera"} size={24} />}
                size={8}
                color={"brown.500"}
              />
            </Stack>
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
                  as={<Ionicons name={"mail-outline"} size={24} />}
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
                  as={<Ionicons name={"key-outline"} size={24} />}
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="123456"
            />
          </VStack>

          <Button
            py={4}
            mt={8}
            mb={4}
            borderRadius={50}
            shadow={2}
            bgColor={"brown.600"}
          >
            <Text fontSize={"xl"} color={"white"}>
              Sign In
            </Text>
          </Button>
        </VStack>
      </Modalize>

      <Modalize
        ref={signInRef}
        snapPoint={450}
        modalHeight={350}
        HeaderComponent={
          <HStack alignItems={"center"} justifyContent={"space-between"} m={6}>
            <Text fontSize={"3xl"} fontWeight={"bold"} lineHeight={30}>
              Welcome Back{"\n"}User
            </Text>

            <Stack
              borderWidth={1}
              borderColor={"brown.700"}
              rounded={999}
              alignContent={"center"}
              justifyContent={"center"}
              p={4}
            >
              <Icon
                as={<Octicons name={"device-camera"} size={24} />}
                size={8}
                color={"brown.500"}
              />
            </Stack>
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
                  as={<Ionicons name={"mail-outline"} size={24} />}
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="alice@gmail.com"
            />
          </VStack>
          {/* 
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
                  as={<Ionicons name={"key-outline"} size={24} />}
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="123456"
            />
          </VStack> */}

          <Button
            py={4}
            mt={8}
            mb={4}
            borderRadius={50}
            shadow={2}
            bgColor={"brown.600"}
          >
            <Text fontSize={"xl"} color={"white"}>
              Sign In
            </Text>
          </Button>
        </VStack>
      </Modalize>
    </>
  );
}
