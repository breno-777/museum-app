import React, { useState } from "react";
import { Icon, HStack, VStack, Text } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

function NavBar({ ...rest }) {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("home");

  const handleIconClick = (iconName) => {
    setSelected(iconName);
  };

  return (
    <VStack position={"absolute"} bottom={0} left={0} right={0} {...rest}>
      <HStack
        alignItems={"center"}
        justifyContent={"space-between"}
        borderColor={"white"}
        borderWidth={1}
        roundedTop={16}
        p={2}
        bgColor={"white"}
        shadow={"9"}
      >
        <VStack alignItems={"center"} flex={1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("home");
              handleIconClick("home");
            }}
            style={{
              borderRadius: 50,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Icon
              as={<Ionicons name="home-outline" />}
              size={"xl"}
              color={"gray.400"}
              // color={selected === "home" ? "secondary.700" : "gray.400"}
              m={1}
              mb={0}
            />
          </TouchableOpacity>
          <Text>Home</Text>
        </VStack>

        <VStack alignItems={"center"} flex={1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("explore");
              handleIconClick("explore");
            }}
            style={{ borderRadius: 50, width: "100%", alignItems: "center" }}
          >
            <Icon
              as={<Ionicons name="ios-compass-sharp" />}
              size={"xl"}
              color={"gray.400"}
              // color={selected === "explore" ? "secondary.700" : "gray.400"}
              m={1}
              mb={0}
            />
          </TouchableOpacity>
          <Text>Explore</Text>
        </VStack>

        <VStack alignItems={"center"} flex={1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("gallery");
              handleIconClick("gallery");
            }}
            style={{ borderRadius: 50, width: "100%", alignItems: "center" }}
          >
            <Icon
              as={<MaterialIcons name="folder" />}
              size={"xl"}
              color={"gray.400"}
              // color={selected === "bookshelf" ? "secondary.700" : "gray.400"}
              m={1}
              mb={0}
            />
          </TouchableOpacity>
          <Text>Gallery</Text>
        </VStack>

        <VStack alignItems={"center"} flex={1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("settings");
              handleIconClick("settings");
            }}
            style={{ borderRadius: 50, width: "100%", alignItems: "center" }}
          >
            <Icon
              as={<Ionicons name="settings-outline" />}
              size={"xl"}
              color={"gray.400"}
              // color={selected === "settings" ? "secondary.700" : "gray.400"}
              m={1}
              mb={0}
            />
          </TouchableOpacity>
          <Text>Setting</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default NavBar;
