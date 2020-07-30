import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Pie } from "../components/Pie.js";
import { DATA } from "../dummyData.js";

const searchHandler = (fieldValue, itemsToBeSearched) => {
  if (fieldValue === "") return itemsToBeSearched;
  else {
    let foundedItems = [];
    itemsToBeSearched.map((item) => {
      if (item.name?.toLowerCase().includes(fieldValue.toLowerCase())) foundedItems.push(item);
    });
    return foundedItems;
  }
};

export const TransactionScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transactions</Text>
      <View style={styles.searchBox}>
        <Ionicons name="md-search" size={22} color="gray" />
        <TextInput placeholder="Search" style={styles.search} onChangeText={(v) => setValue(v)} />
      </View>

      <Text style={styles.section}>Performance</Text>
      <View style={styles.line} />
      <View style={styles.pieChartsWrapper}>
        <View style={styles.singlePieChart}>
          <Text style={styles.pieText}>Current Week</Text>
          <Pie color="green" />
        </View>
        <View style={styles.singlePieChart}>
          <Text style={styles.pieText}>Last Week</Text>
          <Pie />
        </View>
        <View style={styles.singlePieChart}>
          <Text style={styles.pieText}>Last Month</Text>
          <Pie color="blue" />
        </View>
      </View>

      <Text style={styles.section}>Transactions</Text>
      <View style={styles.line} />

      <FlatList
        data={searchHandler(value, DATA)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.singleTransaction}
            onPress={() => {
              navigation.navigate("SingleTransactionScreen", { item });
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.money}>{item.money}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
  heading: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
  },
  searchBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderColor: "#EEE",
    borderWidth: 8,
    borderRadius: 5,
    marginVertical: 20,
  },
  search: {
    marginLeft: 5,
    fontSize: 16,
  },
  section: {
    fontSize: 22,
    fontWeight: "bold",
  },
  line: {
    borderTopWidth: 3,
    borderTopColor: "#eee",
    marginVertical: 10,
  },
  pieChartsWrapper: {
    flexDirection: "row",
  },
  singlePieChart: {
    margin: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  pieText: {
    color: "rgba(0,0,0,0.5)",
    marginBottom: 10,
  },
  singleTransaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
  },
  money: {
    color: "rgba(0,0,0,0.5)",
  },
});
