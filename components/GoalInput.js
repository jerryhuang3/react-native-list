import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [input, setInput] = useState("");

  const changeInput = e => {
    setInput(e);
  };

  const addGoalHandler = () => {
    props.onAddGoal(input);
    setInput("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={changeInput}
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
