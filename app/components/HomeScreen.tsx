import GlobalStyles from "@/constants/GlobalStyles";
import { Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Bienvenido</Text>
      <Text style={GlobalStyles.header}>Hola, {name ?? "usuario"}</Text>
    </View>
  );
};
