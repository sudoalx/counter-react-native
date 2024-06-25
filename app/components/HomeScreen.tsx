import GlobalStyles from "@/constants/GlobalStyles";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View style={GlobalStyles.container}>
      <Drawer.Screen
        options={{
          title: "Inicio",
        }}
      />
      <Text style={GlobalStyles.titleText}>Bienvenido</Text>
      <Text style={GlobalStyles.header}>Hola, {name ?? "usuario"}</Text>
    </View>
  );
};
