import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Goal from "./components/Goal";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = input => {
    setGoals(goals => [
      ...goals,
      { id: Math.random().toString(), value: input }
    ]);
  };

  return (
    <View style={styles.main}>
      <GoalInput onAddGoal={addGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <Goal item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  }
});
