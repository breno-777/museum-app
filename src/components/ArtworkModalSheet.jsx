import { Button, HStack, Icon, Stack, Text, VStack } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";

export const ArtworkModalSheet = ({ isOpen, onClose, data }) => {
  const navigation = useNavigation();
  const artworkRef = useRef(null);

  if (isOpen) {
    artworkRef.current.open();
  }

  return (
    <Modalize
      ref={artworkRef}
      onClosed={onClose}
      snapPoint={380}
      modalHeight={500}
      HeaderComponent={
        <HStack alignItems={"center"} justifyContent={"space-between"} m={6}>
          <Text fontSize={"3xl"} fontWeight={"bold"} lineHeight={30}>
            Welcome Back{"\n"}
            {data.descricao == "" ? "" : data.descricao}
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
        <Button
          onPress={() => {}}
          py={4}
          mt={8}
          mb={4}
          borderRadius={50}
          shadow={2}
          bgColor={"brown.600"}
        >
          <Text fontSize={"xl"} color={"white"}>
            Ver mais
          </Text>
        </Button>
      </VStack>
    </Modalize>
  );
};
