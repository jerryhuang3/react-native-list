import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
	const [input, setInput] = useState("");
	
	const changeInput = e => {
    setInput(e);
	};
	
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Course Goal"
        style={styles.text}
        onChangeText={changeInput}
        value={input}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(input)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default GoalInput;
