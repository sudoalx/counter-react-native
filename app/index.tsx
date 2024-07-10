import { View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Menu } from "./components/Menu";
import { RootSiblingParent } from "react-native-root-siblings";
import GlobalStyles from "@/constants/GlobalStyles";

export default function Index() {
  return (
    <RootSiblingParent>
      <View style={GlobalStyles.container}>
        {/* Opcionalmente pasar prop "name" */}
        <HomeScreen name="Alex" />
        <Counter />
        <Menu />
      </View>
    </RootSiblingParent>
  );
}
