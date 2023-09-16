import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Lato_700Bold, Lato_400Regular } from "@expo-google-fonts/lato";
import { GreatVibes_400Regular } from "@expo-google-fonts/great-vibes";
import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SignIn } from "./src/screens/SignIn";
import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    GreatVibes_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {fontsLoaded ? <SignIn /> : console.log("Erro ao carregar Font")}
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
