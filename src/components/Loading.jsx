import React from "react";
import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} bg="white">
      <Spinner size={"md"} />
    </Center>
  );
}
