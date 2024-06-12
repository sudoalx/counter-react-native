import { ScrollView, StyleSheet } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Balance } from "./components/Balance";
import { Menu } from "./components/Menu";
import { Sensors } from "./components/Sensors";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen />
      <Menu />
      <Counter />
      <Balance />
      <Sensors />
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
