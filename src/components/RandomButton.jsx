import { Button, Stack } from "native-base";
import React from "react";

const RandomItem = ({ text, index, isOpen, setIsOpen, ...rest }) => {
  const handleOpenModal = () => {
    setIsOpen(true);
    console.log(index);
  };

  return (
    <Button
      onPress={() => {
        handleOpenModal();
      }}
      {...rest}
      w={50}
      h={50}
      rounded={"full"}
      alignItems={"center"}
      bgColor={"white"}
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
    </Button>
  );
};

export default RandomItem;
