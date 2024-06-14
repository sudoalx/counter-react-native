import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "Inicio",
        }}
      />
      <Text style={GlobalStyles.titleText}>Bienvenido</Text>
      <Text style={GlobalStyles.header}>Hola, {name ?? "usuario"}</Text>
    </View>
  );
};
