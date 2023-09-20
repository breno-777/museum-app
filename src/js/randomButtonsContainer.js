import React from "react";
import { Dimensions } from "react-native";
import RandomItem from "../components/RandomButton";
import { Stack } from "native-base";
import { useEffect } from "react";
import { useState } from "react";

const RandomButtonsContainer = ({ itemCount }) => {
  const { height, width } = Dimensions.get("screen");

  const randomPosition = () => ({
    left: Math.random() * (width - 100),
    top: Math.random() * (height - 300),
  });

  useEffect(() => {
    randomPosition();
  }),
    [itemCount];

  const randomButtons = Array.from({ length: itemCount }).map((_, index) => (
    <RandomItem key={index} style={randomPosition()} />
  ));

  return (
    <Stack flex={1} position={"relative"} safeArea m={10}>
      {randomButtons}
    </Stack>
  );
};

export default RandomButtonsContainer;
