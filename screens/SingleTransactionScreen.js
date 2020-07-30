import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export const SingleTransactionScreen = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.back}
        >
          <Ionicons name="md-arrow-back" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.money}>${item.money}</Text>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.singleBtn}>
          <Ionicons name="md-card" size={24} color="black" />
          <Text style={styles.type}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleBtn}>
          <FontAwesome name="dollar" size={24} color="black" />
          <Text style={styles.type}>Debt</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.details}>Transaction details</Text>
      <View style={styles.line} />

      <View style={{ marginHorizontal: 15 }}>
        <View style={styles.singleDetail}>
          <Text style={styles.text}>Payment Details</Text>
          <Text style={styles.data}>{item.date}</Text>
        </View>
        <View style={styles.singleDetail}>
          <Text style={styles.text}>Type</Text>
          <Text style={styles.data}>{item.type}</Text>
        </View>
        <View style={styles.singleDetail}>
          <Text style={styles.text}>Pay With</Text>
          <Text style={styles.data}>{item.payWith}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.export}>
        <Fontisto name="export" size={24} color="black" />
        <Text style={styles.type}>Export</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "white",
    paddingTop: 40,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  back: {
    position: "absolute",
    left: 0,
  },
  money: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 56,
    marginVertical: 50,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
  },
  singleBtn: {
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  type: {
    marginLeft: 5,
  },
  details: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  line: {
    borderTopWidth: 3,
    borderTopColor: "#eee",
    marginVertical: 15,
  },
  singleDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  data: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
  },
  export: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 25,
    marginRight: 15,
  },
});
