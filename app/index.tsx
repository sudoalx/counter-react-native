import { ScrollView, StyleSheet } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen />
      <Counter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow container to fill the entire screen
    backgroundColor: "#f0f0f0", // Light background color
    padding: 20, // Add some padding for visual spacing
  },
});
