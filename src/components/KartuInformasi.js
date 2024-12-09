import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function KartuInformasi({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.kartu} onPress={onPress}>
      <Text style={styles.judul}>{item.judul}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  kartu: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
  judul: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
