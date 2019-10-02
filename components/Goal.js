import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Goal = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listGoal}>
        <Text>{props.item}</Text>
      </View>
    </TouchableOpacity>
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
