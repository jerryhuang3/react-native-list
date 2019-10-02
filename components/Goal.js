import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Goal = props => {
  return (
    <View style={styles.listGoal}>
      <Text>{props.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listGoal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default Goal;
