import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./public.routes";

export function Router() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
