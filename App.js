import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const changeInput = e => {
    setInput(e);
  };

  const addGoal = () => {
    console.log(input);
    setGoals(goals => [
      ...goals,
      { id: Math.random().toString(), value: input }
    ]);
    setInput("");
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          style={styles.text}
          onChangeText={changeInput}
          value={input}
        />

        <Button title="ADD" onPress={addGoal} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <View style={styles.listGoal}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listGoal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
