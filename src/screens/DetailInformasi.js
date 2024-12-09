import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function DetailInformasi({ route }) {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.judul}>{item.judul}</Text>
      <Text style={globalStyles.deskripsi}>{item.deskripsi}</Text>
    </View>
  );
}
