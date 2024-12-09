import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Beranda from "./src/screens/Beranda";
import DetailInformasi from "./src/screens/DetailInformasi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen name="Fajar Muhairi" component={Beranda} />
        <Stack.Screen name="DetailInformasi" component={DetailInformasi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
