import React, { useState } from "react";
import { Text, Icon, Stack, HStack } from "native-base";
import { Entypo } from "@expo/vector-icons";

export const TextExpander = ({ text, maxLines, ...rest }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack opacity={expanded ? 1 : 0.5}>
      <Text
        {...rest}
        numberOfLines={expanded ? undefined : maxLines}
        textAlign={"justify"}
      >
        {text}
      </Text>
      <HStack justifyContent={"center"} w={"full"}>
        <Icon
          as={
            <Entypo
              name={expanded ? "chevron-small-up" : "chevron-small-down"}
            />
          }
          size={8}
          color={"gray.400"}
          onPress={toggleExpansion}
        />
      </HStack>
    </Stack>
  );
};
