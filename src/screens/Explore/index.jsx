import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { HStack, ScrollView, Text, VStack } from "native-base";
import { ArtworkList } from "../../components/ArtworkList";
import NavBar from "../../components/NavBar";

import { fetchArtwork } from "../../constants/requests/artwork/fetchArtwork";

export function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const itemPerPage = 10;

  const handleEndReached = async (searchQuery) => {
    if (nextPage !== null) {
      //   const filterIds = extractFilterIds(appliedFilters);
      const response = await fetchArtwork(
        { page: currentPage, size: itemPerPage }
        // searchQuery
        // filterIds
      );
      if (response.length > 0) {
        setArtworks([...artworks, ...response]);
        setCurrentPage(currentPage + 1);
      } else {
        setNextPage(null);
      }
    }
  };

  //   const extractFilterIds = (filters) => {
  //     return filters.map((filter) => filter.id);
  //   };

  useEffect(() => {
    handleEndReached();
  }, []);

  return (
    <>
      <NavBar zIndex={9999} />
      <ScrollView
        onMomentumScrollEnd={handleEndReached}
        showsVerticalScrollIndicator={false}
      >
        <VStack
          safeArea={true}
          px={2}
          style={{
            gap: 10,
          }}
        >
          <HStack justifyContent={"space-between"} alignItems={"center"} px={2}>
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"#424242"}>
              {"Explore"}
            </Text>
          </HStack>
          <SearchBar
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />

          <ScrollView
            mb={24}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <ArtworkList
              title={"Artworks"}
              data={artworks}
              enableDetails={true}
            />
          </ScrollView>
        </VStack>
      </ScrollView>
    </>
  );
}
