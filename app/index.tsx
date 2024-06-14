import { ScrollView } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Balance } from "./components/Balance";
import { Menu } from "./components/Menu";
import { Sensors } from "./components/Sensors";
import GlobalStyles from "@/constants/GlobalStyles";

export default function Index() {
  return (
    <ScrollView style={GlobalStyles.container}>
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen />
      <Menu />
      <Counter />
      <Balance />
      <Sensors />
    </ScrollView>
  );
}
