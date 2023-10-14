import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Lato_700Bold, Lato_400Regular } from "@expo-google-fonts/lato";
import { GreatVibes_400Regular } from "@expo-google-fonts/great-vibes";
import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/styles/theme";
import { Router } from "./src/routes";
import { Loading } from "./src/components/Loading";

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    GreatVibes_400Regular,
  });

  return (
    <NativeBaseProvider config={config} theme={THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        {fontsLoaded ? <Router /> : <Loading />}
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
