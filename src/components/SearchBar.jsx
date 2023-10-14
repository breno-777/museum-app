import { HStack, Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export const SearchBar = ({ value, onChangeText, filterOn }) => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  return (
    <HStack alignItems={"center"}>
      <HStack
        alignItems={"center"}
        flex={1}
        px={4}
        py={1}
        letterSpacing={0}
        borderRadius={50}
        fontWeight={"500"}
        bgColor={"#E5EBED"}
        color={"#fff"}
      >
        <Input
          flex={1}
          rounded={50}
          fontSize={"md"}
          bgColor={"transparent"}
          borderColor={"transparent"}
          focusOutlineColor={"transparent"}
          placeholder="Search"
          onChangeText={onChangeText}
          value={value}
        />
        <Ionicons name="search" size={24} color="gray.400" />
      </HStack>
      {filterOn ? (
        <TouchableOpacity onPress={() => {}} style={{ marginLeft: 8 }}>
          <Icon
            as={<Ionicons name={"filter"} />}
            size={6}
            color={appliedFilters == 0 ? "gray.400" : "secondary.700"}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </HStack>
  );
};
