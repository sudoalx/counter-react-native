import { ScrollView, StyleSheet } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Balance } from "./components/Balance";
import { Menu } from "./components/Menu";
import { Sensors } from "./components/Sensors";
import { Drawer } from "expo-router/drawer";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Drawer.Screen
        options={{
          title: "Inicio",
        }}
      />
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen name="Alex" />
      <Counter />
      <Balance />
      <Sensors />
      <Menu />
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
