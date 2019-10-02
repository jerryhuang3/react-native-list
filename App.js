import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import Goal from "./components/Goal";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addGoal = input => {
    if (input.length === 0) {
      return;
    }
    setGoals(goals => [
      ...goals,
      { id: Math.random().toString(), value: input }
    ]);
    setIsAddModal(false);
  };

  const deleteGoal = id => {
    setGoals(goals => {
      return goals.filter(goal => goal.id !== id);
    });
  };

  const cancelInput = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.main}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddModal(true)} />
      <GoalInput
        visible={isAddModal}
        onAddGoal={addGoal}
        onCancel={cancelInput}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <Goal
            id={itemData.item.id}
            onDelete={deleteGoal}
            item={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  }
});
