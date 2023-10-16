import { HStack, Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import {
  fetchArtist,
  fetchArtistByName,
} from "../constants/requests/artists/fetchArtist";
import {
  fetchArtwork,
  fetchArtworkByArtworkName,
} from "../constants/requests/artwork/fetchArtwork";

export const SearchBar = ({
  setArtists,
  setArtworks,
  filterOn,
  isArtist,
  ...rest
}) => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query) {
      {
        isArtist
          ? fetchArtistByName(query).then((response) => {
              setArtists(response);
            })
          : fetchArtworkByArtworkName(query).then((response) => {
              setArtworks(response);
            });
      }
    } else {
      {
        isArtist
          ? fetchArtist().then((response) => {
              setArtists(response);
            })
          : fetchArtwork().then((response) => {
              setArtworks(response);
            });
      }
    }
  };

  return (
    <HStack alignItems={"center"} {...rest}>
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
          onChangeText={(text) => setQuery(text)}
          value={query}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="gray.400" />
        </TouchableOpacity>
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
