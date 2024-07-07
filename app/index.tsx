import { View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Menu } from "./components/Menu";

import GlobalStyles from "@/constants/GlobalStyles";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen name="Equipo" />
      <Counter />
      <Menu />
    </View>
  );
}
