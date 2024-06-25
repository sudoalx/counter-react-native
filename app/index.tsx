import { ScrollView } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Balance } from "./components/Balance";
import { Menu } from "./components/Menu";
import { Sensors } from "./components/Sensors";
import { Drawer } from "expo-router/drawer";

export default function Index() {
  return (
    <ScrollView style={GlobalStyles.container}>
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
