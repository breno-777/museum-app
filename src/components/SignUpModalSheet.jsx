import { Button, HStack, Icon, Input, Stack, Text, VStack } from "native-base";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";
import { signUp } from "../constants/requests/user/signUp";

export const SignUpModalSheet = ({
  isOpen,
  onClose,
  setUsername,
  username,
  setEmail,
  email,
  setPassword,
  password,
  setConfirmPassword,
  confirmPassword,
}) => {
  const navigation = useNavigation();
  const signUpRef = useRef(null);

  if (isOpen) {
    signUpRef.current.open();
  }

  //  Cadastra um novo usuário
  const handleSignUp = async () => {
    if (password === confirmPassword && password && confirmPassword !== "") {
      const signUpSucess = await signUp({
        username: username,
        email: email,
        password: password,
      });
      if (signUpSucess) {
        signUpRef.current.close();
        navigation.navigate("home");
        setUsername("");
      }
    } else {
      console.log("Senhas não coincidem");
    }
  };

  return (
    <Modalize
      ref={signUpRef}
      onClosed={onClose}
      snapPoint={560}
      modalHeight={700}
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
              as={<Octicons name={"device-camera"} />}
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
        </VStack>

        <VStack
          borderBottomWidth={2}
          borderBottomColor={"gray.200"}
          pt={4}
          px={2}
        >
          <Input
            fontSize={"md"}
            bgColor={"transparent"}
            borderColor={"transparent"}
            focusOutlineColor={"transparent"}
            onChangeText={(value) => setEmail(value)}
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
            type="password"
            fontSize={"md"}
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
            placeholder="Password"
          />
        </VStack>

        <VStack
          borderBottomWidth={2}
          borderBottomColor={"gray.200"}
          pt={4}
          px={2}
        >
          <Input
            type="password"
            fontSize={"md"}
            bgColor={"transparent"}
            borderColor={"transparent"}
            focusOutlineColor={"transparent"}
            onChangeText={(value) => setConfirmPassword(value)}
            InputLeftElement={
              <Icon
                as={<Ionicons name={"key-outline"} />}
                size={6}
                color={"gray.400"}
              />
            }
            placeholder="Confirm Password"
          />
        </VStack>

        <Button
          py={4}
          mt={8}
          mb={4}
          borderRadius={50}
          shadow={2}
          bgColor={"brown.600"}
          onPress={() => handleSignUp()}
        >
          <Text fontSize={"xl"} color={"white"}>
            Sign Up
          </Text>
        </Button>
        <HStack justifyContent={"center"} space={2}>
          <Text fontSize={"md"} fontWeight={"600"}>
            Already have an account?
          </Text>
          <Text color={"brown.600"} fontSize={"md"} fontWeight={"600"}>
            LogIn
          </Text>
        </HStack>
      </VStack>
    </Modalize>
  );
};
