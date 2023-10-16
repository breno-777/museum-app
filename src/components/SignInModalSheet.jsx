import { Button, HStack, Icon, Input, Stack, Text, VStack } from "native-base";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { signIn } from "../constants/requests/user/signIn";
import { useNavigation } from "@react-navigation/native";

export const SignInModalSheet = ({
  isOpen,
  onClose,
  setUsername,
  username,
  setPassword,
  password,
}) => {
  const navigation = useNavigation();
  const signInRef = useRef(null);
  const [userFound, setUerFound] = useState(false);

  if (isOpen) {
    signInRef.current.open();
  }

  //  Inicia sessão
  const handleSignIn = async () => {
    const signInSucess = await signIn({
      username,
      password,
    });
    if (signInSucess) {
      signInRef.current.close();
      navigation.navigate("home");
      setUerFound(false);
      setUsername("");
    }
  };

  const handleCheckUser = async () => {
    {
      username != "" ? setUerFound(true) : setUerFound(false);
    }
  };

  return (
    <Modalize
      ref={signInRef}
      onClosed={onClose}
      snapPoint={380}
      modalHeight={500}
      HeaderComponent={
        <HStack alignItems={"center"} justifyContent={"space-between"} m={6}>
          <Text fontSize={"3xl"} fontWeight={"bold"} lineHeight={30}>
            Welcome Back{"\n"}
            {username == "" ? "" : username}
          </Text>

          {/* <Stack
            borderWidth={1}
            borderColor={"brown.700"}
            rounded={999}
            alignContent={"center"}
            justifyContent={"center"}
            p={4}
          >
            <Icon
              as={<Octicons name={"device-camera"} />}
              size={8}
              color={"brown.500"}
            />
          </Stack> */}
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
          {!userFound ? (
            <Input
              fontSize={"md"}
              bgColor={"transparent"}
              borderColor={"transparent"}
              focusOutlineColor={"transparent"}
              onChangeText={(value) => setUsername(value)}
              InputLeftElement={
                <Icon
                  as={<Ionicons name={"person-outline"} />}
                  size={6}
                  color={"gray.400"}
                />
              }
              placeholder="Alice"
            />
          ) : (
            <VStack borderBottomColor={"gray.200"} pt={4} px={2}>
              <Input
                fontSize={"md"}
                type="password"
                bgColor={"transparent"}
                borderColor={"transparent"}
                focusOutlineColor={"transparent"}
                onChangeText={(value) => setPassword(value)}
                InputLeftElement={
                  <Icon
                    as={<Ionicons name={"key-outline"} />}
                    size={6}
                    color={"gray.400"}
                  />
                }
                placeholder="123456"
              />
            </VStack>
          )}
        </VStack>

        <Button
          onPress={() => {
            {
              userFound ? handleSignIn() : handleCheckUser();
            }
          }}
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
        <HStack justifyContent={"center"} space={2}>
          <Text color={"brown.600"} fontSize={"md"} fontWeight={"600"}>
            Forgot password?
          </Text>
          <Text>or</Text>
          <Text color={"brown.600"} fontSize={"md"} fontWeight={"600"}>
            Create Account
          </Text>
        </HStack>
      </VStack>
    </Modalize>
  );
};
