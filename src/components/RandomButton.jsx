import { Stack } from "native-base";
import React from "react";

const handleButtonPress = (index) => {
  console.log(index);
  setFocusedButton(index);
};
const RandomItem = ({
  text,
  isOpen,
  onClose,
  setArtworkModalIsOpen,
  ...rest
}) => {
  const handleOpenModal = () => {
    setArtworkModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setArtworkModalIsOpen(false);
  };

  return (
    <Stack
      {...rest}
      w={50}
      h={50}
      rounded={"full"}
      alignItems={"center"}
      bgColor={"yellow.400"}
      justifyContent={"center"}
      position={"relative"}
    >
      <Stack
        w={47}
        h={47}
        p={5}
        borderWidth={2}
        borderColor={"yellow.800"}
        borderStyle={"dotted"}
        rounded={"full"}
        bgColor={"gray.50"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack w={4} h={4} rounded={"full"} bgColor={"yellow.800"} />
      </Stack>
    </Stack>
  );
};

export default RandomItem;
