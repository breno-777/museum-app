import { ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { VStack, Button, Text, HStack } from "native-base";
import bgImage from "../../assets/images/signIn-screen.png";
import { WelcomeStyledTitle } from "../../components/StyledTitle";
import { SignInModalSheet } from "../../components/SignInModalSheet";
import { SignUpModalSheet } from "../../components/SignUpModalSheet";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  const handleOpenSignIn = () => {
    setSignInModalIsOpen(true);
  };
  const handleOpenSignUp = () => {
    setSignUpModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setSignInModalIsOpen(false);
    setSignUpModalIsOpen(false);
  };

  //  Verifica se o usuário está cadastrado no banco de dados
  // const handleCheckUser = async () => {
  //   if (email != "") {
  //     const searchUser = await checkEmail({ email: email });
  //     if (searchUser) {
  //       console.log(`${email} encontrado!`);
  //       setUerFound(true);
  //     } else {
  //       console.log(`${email} não encontrado.`);
  //       setEmail("");
  //       setUerFound(false);
  //     }
  //   }
  // };

  useEffect(() => {
    setUsername("");
  }, []);
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

      <SignInModalSheet
        isOpen={signInModalIsOpen}
        setUsername={setUsername}
        username={username}
        setPassword={setPassword}
        password={password}
        onClose={handleCloseModal}
      />

      <SignUpModalSheet
        isOpen={signUpModalIsOpen}
        setUsername={setUsername}
        username={username}
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        setConfirmPassword={setConfirmPassword}
        confirmPassword={confirmPassword}
        onClose={handleCloseModal}
      />
    </>
  );
}
