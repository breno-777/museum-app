import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  HStack,
  VStack,
  Text,
  Stack,
  Icon,
  Switch,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavBar from "../../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import { deleteAccount } from "../../constants/requests/user/deleteAccount";
import { removeUserIdFromStorage } from "../../constants/requests/user/userDetails";

export function Settings() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogout = async () => {
    await removeUserIdFromStorage();
    navigation.navigate("signIn");
  };

  const handleDeletAccount = async () => {
    try {
      {
        condition ? deleteAccount(id) : "";
      }
    } catch (error) {
      console.error("Falha ao confirma exclusão da conta", error);
    }
  };
  return (
    <>
      <NavBar zIndex={9999} />
      <ScrollView>
        <VStack safeArea px={2} flex={1}>
          <HStack justifyContent={"space-between"}>
            <TouchableOpacity onPress={() => handleGoBack()}>
              <Stack bgColor={"gray.100"} rounded={10} p={1}>
                <Icon
                  as={<Ionicons name={"chevron-back"} />}
                  size={8}
                  color={"black"}
                />
              </Stack>
            </TouchableOpacity>
          </HStack>
          <Text fontSize={"4xl"} fontWeight={"bold"} my={4}>
            Settings
          </Text>
          <VStack>
            <VStack>
              <HStack borderBottomWidth={1} borderColor={"gray.200"} mb={4}>
                <Icon
                  as={<Ionicons name={"options-outline"} />}
                  size={6}
                  color={"black"}
                  mx={2}
                />
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  General
                </Text>
              </HStack>

              <HStack justifyContent={"space-between"}>
                <Text fontSize={"lg"} color={"gray.300"}>
                  Notifications
                </Text>
                <Switch
                  offTrackColor="red.400"
                  onTrackColor="green.300"
                  mt={-2}
                />
              </HStack>

              <HStack justifyContent={"space-between"}>
                <Text fontSize={"lg"} color={"gray.300"}>
                  Dark Theme
                </Text>
                <Switch
                  offTrackColor="red.400"
                  onTrackColor="green.300"
                  mt={-2}
                />
              </HStack>

              <HStack justifyContent={"space-between"}>
                <Text fontSize={"lg"} color={"gray.300"} my={2}>
                  Help and Support
                </Text>
                <Icon
                  as={<Ionicons name={"chevron-forward"} />}
                  size={8}
                  color={"gray.300"}
                />
              </HStack>

              <HStack justifyContent={"space-between"}>
                <Text fontSize={"lg"} color={"gray.300"}>
                  About
                </Text>
                <Icon
                  as={<Ionicons name={"chevron-forward"} />}
                  size={8}
                  color={"gray.300"}
                />
              </HStack>

              <HStack borderBottomWidth={1} borderColor={"gray.200"} my={4}>
                <Icon
                  as={<Ionicons name={"person-outline"} />}
                  size={6}
                  color={"black"}
                  mx={2}
                />
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  Account
                </Text>
              </HStack>

              <HStack justifyContent={"space-between"}>
                <Text fontSize={"lg"} color={"gray.300"}>
                  Edit Profile
                </Text>
                <Icon
                  as={<Ionicons name={"chevron-forward"} />}
                  size={8}
                  color={"gray.300"}
                />
              </HStack>

              <HStack justifyContent={"space-between"} my={2}>
                <Text fontSize={"lg"} color={"gray.300"}>
                  Change Password
                </Text>
                <Icon
                  as={<Ionicons name={"chevron-forward"} />}
                  size={8}
                  color={"gray.300"}
                />
              </HStack>

              <HStack justifyContent={"space-between"}>
                <Text fontSize={"lg"} color={"gray.300"}>
                  Your Preferences
                </Text>
                <Icon
                  as={<Ionicons name={"chevron-forward"} />}
                  size={8}
                  color={"gray.300"}
                />
              </HStack>

              <TouchableOpacity onPress={() => handleLogout()}>
                <HStack my={2}>
                  <Stack mr={2}>
                    <Icon
                      as={<Ionicons name={"exit-outline"} />}
                      size={8}
                      color={"red.600"}
                    />
                  </Stack>
                  <Text fontSize={"lg"} color={"red.600"}>
                    Logout
                  </Text>
                </HStack>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDeletAccount()}>
                <HStack justifyContent={"center"} alignItems={"center"} mt={4}>
                  <Text fontSize={"lg"} color={"red.600"}>
                    Delete Account
                  </Text>
                  <Stack ml={2}>
                    <Icon
                      as={<Ionicons name={"trash-outline"} />}
                      size={6}
                      color={"red.600"}
                    />
                  </Stack>
                </HStack>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}
