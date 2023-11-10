import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // TODO: Initialize the state for course goals
  // const [courseGoals, setCourseGoals] = useState(?);

  // TODO: Initialize the state for modal visibility
  // const [modalIsVisible, setModalIsVisible] = useState(?);

  // TODO: Implement the function to start adding a goal
  function startAddGoalHandler() {
    // Your code here
  }

  // TODO: Implement the function to end adding a goal
  function endAddGoalHandler() {
    // Your code here
  }

  // TODO: Implement the function to add a new goal
  function addGoalHandler(enteredGoalText) {
    // Your code here
  }

  // TODO: Implement the function to delete a goal
  function deleteGoalHandler(id) {
    // Your code here
  }

  return (
    <View style={styles.appContainer}>
    <StatusBar style="light"/>
      <Button
        title="Add new Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler} // Hint: What should happen when this button is pressed?
        style={styles.button}
      />
      {/* TODO: Display GoalInput component conditionally based on modalIsVisible */}
      <View style={styles.goalContainer}>
        {/* TODO: Render a list of goals */}
      </View>
    </View>
  );
}

// TODO: Define your styles here
const styles = StyleSheet.create({
  // Your styles here
});
