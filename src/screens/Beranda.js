import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import KartuInformasi from "../components/KartuInformasi";
import dataInformasi from "../data/dataInformasi";
import { globalStyles } from "../styles/globalStyles";

export default function Beranda({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataInformasi);
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.judul}>Tips Kesehatan</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <KartuInformasi
            item={item}
            onPress={() => navigation.navigate("DetailInformasi", { item })}
          />
        )}
      />
    </View>
  );
}
