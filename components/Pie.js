import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Pie = ({ color = "red" }) => {
  return (
    <View>
      <View style={styles.grayCircle}></View>
      <View style={[styles.coloredCircle, { borderColor: color }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  grayCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#eee",
    borderWidth: 12,
  },
  coloredCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 12,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
