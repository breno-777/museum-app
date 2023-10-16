import { HStack, Image, Text, VStack } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";

export const ArtworkModalSheet = ({
  isOpen,
  data,
  setIsOpen,
  artist,
  index,
}) => {
  const navigation = useNavigation();
  const artworkRef = useRef(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    artworkRef.current.open();
  }

  return (
    <Modalize
      ref={artworkRef}
      onClosed={handleCloseModal}
      snapPoint={380}
      modalHeight={500}
      HeaderComponent={
        <HStack alignItems={"center"} justifyContent={"center"} m={6}>
          <Text fontSize={"2xl"} fontWeight={"bold"} lineHeight={30}>
            {data.nome}
          </Text>
        </HStack>
      }
    >
      {index == 1 ? (
        <>
          <HStack alignItems={"center"}>
            <Image
              alt={artist.id.toString()}
              source={{ uri: artist.foto }}
              w={100}
              h={100}
              rounded={9999}
            />
            <VStack ml={2}>
              <Text fontSize={"xl"}>{artist.nome}</Text>
              <Text>{artist.nacionalidade}</Text>
            </VStack>
          </HStack>
        </>
      ) : (
        <>
          <VStack>
            <Text fontSize={"md"} textAlign={"center"}>
              Uma magnífica obra de arte, intitulada "{data.nome}", foi criada
              no ano de {data.ano}. Esta peça incrível é um testemunho da
              criatividade e habilidade do artista, capturando a essência de sua
              época com maestria. Com cada pincelada e detalhe cuidadosamente
              trabalhados, a obra transcende o tempo, convidando os espectadores
              a contemplarem a beleza e significado por trás de cada traço.
            </Text>
          </VStack>
        </>
      )}
    </Modalize>
  );
};
