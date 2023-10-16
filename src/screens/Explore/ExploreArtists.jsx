import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { HStack, ScrollView, Text, VStack } from "native-base";
import { ArtworkList } from "../../components/ArtworkList";
import NavBar from "../../components/NavBar";

import { fetchArtwork } from "../../constants/requests/artwork/fetchArtwork";
import { fetchArtist } from "../../constants/requests/artists/fetchArtist";
import { ArtistList } from "../../components/ArtistList";

export function ExploreArtists({ isArtist }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [artists, setArtists] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const itemPerPage = 10;

  const handleEndReached = async (searchQuery) => {
    if (nextPage !== null) {
      const response = await fetchArtist({
        page: currentPage,
        size: itemPerPage,
      });
      if (response.length > 0) {
        setArtists([...artists, ...response]);
        setCurrentPage(currentPage + 1);
      } else {
        setNextPage(null);
      }
    }
  };

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
            isArtist={isArtist}
            value={searchQuery}
            filterOn={true}
            handleEndReached={() => {
              handleEndReached();
            }}
            setArtists={setArtists}
          />

          <ScrollView
            mb={24}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <ArtistList title={"Artists"} data={artists} enableDetails={true} />
          </ScrollView>
        </VStack>
      </ScrollView>
    </>
  );
}
